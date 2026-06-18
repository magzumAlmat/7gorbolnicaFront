"use client";
import React, { useState, useEffect, useCallback } from 'react';
import {
    Container, Paper, Typography, Grid, TextField, Button, List, ListItem,
    ListItemText, IconButton, Box, CircularProgress, Link, Alert
} from '@mui/material';
import { Edit, Delete, Add, CloudUpload } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const API = 'http://localhost:8000';

/**
 * Единый конфиг-driven CRUD для файловых реестров (название + опц. поля + файл).
 * Props:
 *   endpoint   — путь API, напр. '/api/prices'
 *   entity     — { one: 'прайс-лист', list: 'Сохранённые прайс-листы' }
 *   fields     — [{ key, label, required }] (первое поле — основное название)
 *   file       — показывать ли загрузку файла (по умолчанию true)
 */
const FileRegistry = ({ endpoint, entity = {}, fields = [], file = true, fileRequired = false, publicPage = false }) => {
    const [items, setItems] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const emptyForm = () => fields.reduce((a, f) => ({ ...a, [f.key]: '' }), {});
    const [form, setForm] = useState(emptyForm());
    const [fileObj, setFileObj] = useState(null);
    const [preview, setPreview] = useState(null);

    const onDrop = useCallback((accepted) => {
        const f = accepted[0];
        setFileObj(f);
        setPreview(URL.createObjectURL(f));
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

    const token = () => (typeof window !== 'undefined' ? localStorage.getItem('token') : null);

    const fetchItems = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`${API}${endpoint}`, { headers: { Authorization: `Bearer ${token()}` } });
            if (res.ok) setItems(await res.json());
            else setError('Не удалось загрузить данные');
        } catch (e) {
            setError('Ошибка загрузки: ' + e.message);
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

    useEffect(() => { fetchItems(); }, [fetchItems]);

    const cancelEdit = () => {
        setEditingId(null);
        setForm(emptyForm());
        setFileObj(null);
        setPreview(null);
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Файл обязателен у моделей с NOT NULL path; на создании требуем его,
        // чтобы не получить 500. На редактировании прежний файл сохраняется.
        if (fileRequired && !editingId && !fileObj) {
            setError('Прикрепите файл — он обязателен для этого раздела.');
            return;
        }
        const url = editingId ? `${API}${endpoint}/${editingId}` : `${API}${endpoint}`;
        const method = editingId ? 'PUT' : 'POST';
        const fd = new FormData();
        // Не отправляем пустые значения: пустая строка в DATE-колонке (expiryDate/
        // issueDate) ломает create. Пустое поле -> null/без изменений.
        fields.forEach((f) => {
            const v = form[f.key];
            if (v !== undefined && v !== null && v !== '') fd.append(f.key, v);
        });
        if (file && fileObj) fd.append('file', fileObj);
        try {
            const res = await fetch(url, { method, headers: { Authorization: `Bearer ${token()}` }, body: fd });
            if (res.ok) { fetchItems(); cancelEdit(); }
            else { const d = await res.json().catch(() => ({})); setError(`Не удалось сохранить: ${d.message || 'ошибка'}`); }
        } catch (e) {
            setError('Ошибка сохранения: ' + e.message);
        }
    };

    const handleEdit = (item) => {
        setEditingId(item.id);
        setForm(fields.reduce((a, f) => ({ ...a, [f.key]: item[f.key] ?? '' }), {}));
        setFileObj(null);
        setPreview(item.path ? `${API}/${item.path}` : null);
    };

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${API}${endpoint}/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token()}` } });
            if (res.ok) fetchItems();
            else setError('Не удалось удалить');
        } catch (e) {
            setError('Ошибка удаления: ' + e.message);
        }
    };

    const primaryText = (item) => {
        const main = item[fields[0]?.key] || 'Без названия';
        const rest = fields.slice(1).map((f) => item[f.key]).filter(Boolean).join(', ');
        return rest ? `${main} (${rest})` : main;
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {editingId ? `Редактировать: ${entity.one || 'запись'}` : `Добавить: ${entity.one || 'запись'}`}
                </Typography>
                {!publicPage && (
                    <Alert severity="warning" sx={{ mb: 3 }}>
                        Загрузки сохраняются в базе, но публичная страница для этого раздела пока не подключена —
                        добавленный контент НЕ отображается на сайте.
                    </Alert>
                )}
                <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={file ? 8 : 12}>
                            <Grid container spacing={2}>
                                {fields.map((f) => (
                                    <Grid item xs={12} sm={fields.length > 1 ? 6 : 12} key={f.key}>
                                        <TextField
                                            fullWidth
                                            label={f.label}
                                            value={form[f.key] ?? ''}
                                            onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                                            required={!!f.required}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        {file && (
                            <Grid item xs={12} md={4}>
                                <Box
                                    {...getRootProps()}
                                    sx={{
                                        border: `2px dashed ${isDragActive ? 'green' : 'grey'}`,
                                        borderRadius: 2, p: 2, textAlign: 'center', cursor: 'pointer',
                                        height: '100%', display: 'flex', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center',
                                    }}
                                >
                                    <input {...getInputProps()} />
                                    <CloudUpload sx={{ fontSize: 60, mb: 2, color: 'text.secondary' }} />
                                    <Typography>
                                        {isDragActive ? 'Отпустите для загрузки' : 'Перетащите файл сюда или кликните'}
                                    </Typography>
                                    {preview && !preview.startsWith('blob:') && (
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            Текущий файл: <Link href={preview} target="_blank" rel="noopener">{preview.split('/').pop()}</Link>
                                        </Typography>
                                    )}
                                    {preview && preview.startsWith('blob:') && (
                                        <Typography variant="body2" sx={{ mt: 1 }}>Новый файл: {fileObj?.name}</Typography>
                                    )}
                                </Box>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" startIcon={editingId ? <Edit /> : <Add />} sx={{ mt: 2, height: 56 }}>
                                {editingId ? 'Обновить' : 'Добавить'}
                            </Button>
                        </Grid>
                        {editingId && (
                            <Grid item xs={12}>
                                <Button fullWidth variant="outlined" onClick={cancelEdit}>Отмена</Button>
                            </Grid>
                        )}
                    </Grid>
                </Box>

                <Typography variant="h5" component="h2" gutterBottom>
                    {entity.list || 'Записи'}
                </Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>
                ) : error ? (
                    <Typography color="error" align="center">{error}</Typography>
                ) : items.length === 0 ? (
                    <Typography color="text.secondary" align="center" sx={{ py: 3 }}>Записей пока нет</Typography>
                ) : (
                    <List>
                        {items.map((item) => (
                            <ListItem
                                key={item.id}
                                secondaryAction={
                                    <>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)} sx={{ mr: 1 }}><Edit /></IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}><Delete /></IconButton>
                                    </>
                                }
                                sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}
                            >
                                <ListItemText
                                    primary={primaryText(item)}
                                    secondary={item.path ? (
                                        <Link href={`${API}/${item.path}`} target="_blank" rel="noopener">Скачать файл</Link>
                                    ) : (file ? 'Файл не загружен' : (item.urloffile ? <Link href={item.urloffile} target="_blank" rel="noopener">Открыть ссылку</Link> : null))}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </Container>
    );
};

export default FileRegistry;
