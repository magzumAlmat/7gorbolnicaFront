"use client";
import React, { useState, useEffect, useCallback } from 'react';
import {
    Container, Paper, Typography, Grid, TextField, Button, List, ListItem,
    ListItemText, IconButton, Box, CircularProgress
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const API = 'http://localhost:8000';
const token = () => (typeof window !== 'undefined' ? localStorage.getItem('token') : null);
// JSONB-поля редактируем по-русски; шлём { ru, kz, en } (kz/en сохраняем как были).
const ru = (v) => (v && typeof v === 'object' ? v.ru || '' : v || '');

const empty = { officeName: '', address: '', phone: '', email: '', workHours: '', director: '', directorRole: '', contactName: '', contactRole: '', contactPhone: '', contactEmail: '' };

// Контакты и филиалы — один набор офисов (kazniisa_contacts). На «Филиалах»
// показываем директора, на «Контактах» — телефон/почту. Источник один.
const ContactsManager = () => {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState(empty);
    const [editing, setEditing] = useState(null); // полная запись, чтобы сохранить kz/en
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchItems = useCallback(async () => {
        setLoading(true); setError(null);
        try {
            const res = await fetch(`${API}/api/kazniisa/contacts`, { headers: { Authorization: `Bearer ${token()}` } });
            if (res.ok) {
                const data = await res.json();
                setItems([...data].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
            } else setError('Не удалось загрузить контакты');
        } catch (e) { setError('Ошибка загрузки: ' + e.message); }
        finally { setLoading(false); }
    }, []);
    useEffect(() => { fetchItems(); }, [fetchItems]);

    const cancel = () => { setEditing(null); setForm(empty); setError(null); };
    const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        const jb = (key, val) => {
            const prev = editing && editing[key] && typeof editing[key] === 'object' ? editing[key] : {};
            return { ru: val, kz: prev.kz || '', en: prev.en || '' };
        };
        const payload = {
            officeName: jb('officeName', form.officeName),
            address: jb('address', form.address),
            workHours: jb('workHours', form.workHours),
            phone: form.phone,
            email: form.email,
            director: form.director || null,
            directorRole: form.directorRole || null,
            contactName: form.contactName || null,
            contactRole: form.contactRole || null,
            contactPhone: form.contactPhone || null,
            contactEmail: form.contactEmail || null,
        };
        const url = editing ? `${API}/api/kazniisa/contacts/${editing.id}` : `${API}/api/kazniisa/contacts`;
        try {
            const res = await fetch(url, {
                method: editing ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token()}` },
                body: JSON.stringify(payload),
            });
            if (res.ok) { fetchItems(); cancel(); }
            else { const d = await res.json().catch(() => ({})); setError(`Не удалось сохранить: ${d.message || 'ошибка'}`); }
        } catch (err) { setError('Ошибка сохранения: ' + err.message); }
    };

    const edit = (it) => {
        setEditing(it);
        setForm({
            officeName: ru(it.officeName), address: ru(it.address), phone: it.phone || '',
            email: it.email || '', workHours: ru(it.workHours), director: it.director || '', directorRole: it.directorRole || '',
            contactName: it.contactName || '', contactRole: it.contactRole || '', contactPhone: it.contactPhone || '', contactEmail: it.contactEmail || '',
        });
    };

    const remove = async (id) => {
        try {
            const res = await fetch(`${API}/api/kazniisa/contacts/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token()}` } });
            if (res.ok) fetchItems(); else setError('Не удалось удалить');
        } catch (e) { setError('Ошибка удаления: ' + e.message); }
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" gutterBottom>{editing ? 'Редактировать офис' : 'Добавить офис / филиал'}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Единый список офисов: используется и на странице «Контакты», и на «Филиалы» (там показывается руководитель).
                </Typography>
                <Box component="form" onSubmit={submit} sx={{ mb: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}><TextField fullWidth required label="Название офиса" value={form.officeName} onChange={set('officeName')} /></Grid>
                        <Grid item xs={12} sm={6}><TextField fullWidth label="Адрес" value={form.address} onChange={set('address')} /></Grid>
                        <Grid item xs={12} sm={4}><TextField fullWidth label="Телефон" value={form.phone} onChange={set('phone')} /></Grid>
                        <Grid item xs={12} sm={4}><TextField fullWidth label="Email" value={form.email} onChange={set('email')} /></Grid>
                        <Grid item xs={12} sm={4}><TextField fullWidth label="Часы работы" value={form.workHours} onChange={set('workHours')} /></Grid>
                        <Grid item xs={12} sm={6}><TextField fullWidth label="Руководитель филиала (ФИО)" value={form.director} onChange={set('director')} /></Grid>
                        <Grid item xs={12} sm={6}><TextField fullWidth label="Должность руководителя" value={form.directorRole} onChange={set('directorRole')} /></Grid>
                        <Grid item xs={12} sm={6}><TextField fullWidth label="Контактное лицо (ФИО)" value={form.contactName} onChange={set('contactName')} /></Grid>
                        <Grid item xs={12} sm={6}><TextField fullWidth label="Должность контактного лица" value={form.contactRole} onChange={set('contactRole')} /></Grid>
                        <Grid item xs={12} sm={6}><TextField fullWidth label="Телефон контактного лица" value={form.contactPhone} onChange={set('contactPhone')} /></Grid>
                        <Grid item xs={12} sm={6}><TextField fullWidth label="Email контактного лица" value={form.contactEmail} onChange={set('contactEmail')} /></Grid>
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" startIcon={editing ? <Edit /> : <Add />} sx={{ height: 56 }}>
                                {editing ? 'Обновить' : 'Добавить'}
                            </Button>
                        </Grid>
                        {editing && <Grid item xs={12}><Button fullWidth variant="outlined" onClick={cancel}>Отмена</Button></Grid>}
                    </Grid>
                </Box>

                <Typography variant="h5" gutterBottom>Офисы и филиалы</Typography>
                {loading ? <Box sx={{ textAlign: 'center', my: 4 }}><CircularProgress /></Box>
                    : error ? <Typography color="error" align="center">{error}</Typography>
                    : items.length === 0 ? <Typography color="text.secondary" align="center" sx={{ py: 3 }}>Записей пока нет</Typography>
                    : (
                        <List>
                            {items.map((it) => (
                                <ListItem key={it.id} divider
                                    secondaryAction={<>
                                        <IconButton edge="end" onClick={() => edit(it)} sx={{ mr: 1 }}><Edit /></IconButton>
                                        <IconButton edge="end" color="error" onClick={() => remove(it.id)}><Delete /></IconButton>
                                    </>}>
                                    <ListItemText
                                        primary={ru(it.officeName)}
                                        secondary={[ru(it.address), it.phone, it.email, it.director && `${it.directorRole || 'Руководитель'}: ${it.director}`].filter(Boolean).join(' · ')}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    )}
            </Paper>
        </Container>
    );
};

export default ContactsManager;
