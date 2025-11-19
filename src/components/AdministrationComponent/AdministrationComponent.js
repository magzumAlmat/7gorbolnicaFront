"use client";
import React, { useState, useEffect, useCallback } from 'react';
import {
    Container, Paper, Typography, Grid, TextField, Button, List, ListItem,
    ListItemText, IconButton, Box, CircularProgress, Avatar
} from '@mui/material';
import { Edit, Delete, Add, CloudUpload } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const AdministrationComponent = () => {
    const [administrations, setAdministrations] = useState([]);
    const [fio, setFio] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
        multiple: false,
    });

    useEffect(() => {
        fetchAdministrations();
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const fetchAdministrations = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/api/administration', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setAdministrations(data);
            } else {
                setError('Failed to fetch administrations');
            }
        } catch (error) {
            setError('Error fetching administrations: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const url = editingId
            ? `http://localhost:8000/api/administration/${editingId}`
            : 'http://localhost:8000/api/administration';
        const method = editingId ? 'PUT' : 'POST';

        const formData = new FormData();
        formData.append('fio', fio);
        formData.append('position', position);
        formData.append('email', email);
        formData.append('phone', phone);
        if (file) {
            formData.append('file', file);
        }

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (response.ok) {
                fetchAdministrations();
                cancelEdit();
            } else {
                const errorData = await response.json();
                setError(`Failed to save administration: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            setError('Error saving administration: ' + error.message);
        }
    };

    const handleEdit = (admin) => {
        setEditingId(admin.id);
        setFio(admin.fio);
        setPosition(admin.position);
        setEmail(admin.email);
        setPhone(admin.phone);
        setFile(null);
        if (admin.path) {
            setPreview(`http://localhost:8000/${admin.path}`);
        } else {
            setPreview(null);
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/api/administration/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                fetchAdministrations();
            } else {
                setError('Failed to delete administration');
            }
        } catch (error) {
            setError('Error deleting administration: ' + error.message);
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setFio('');
        setPosition('');
        setEmail('');
        setPhone('');
        setFile(null);
        setPreview(null);
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {editingId ? 'Редактировать данные' : 'Добавить сотрудника'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="ФИО" value={fio} onChange={(e) => setFio(e.target.value)} required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Должность" value={position} onChange={(e) => setPosition(e.target.value)} required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth label="Телефон" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                {...getRootProps()}
                                sx={{
                                    border: `2px dashed ${isDragActive ? 'green' : 'grey'}`,
                                    borderRadius: 2,
                                    p: 2,
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <input {...getInputProps()} />
                                {preview ? (
                                    <Avatar src={preview} sx={{ width: 120, height: 120, mb: 2 }} variant="rounded" />
                                ) : (
                                    <CloudUpload sx={{ fontSize: 60, mb: 2, color: 'text.secondary' }} />
                                )}
                                <Typography>
                                    {isDragActive ? 'Отпустите для загрузки' : 'Перетащите фото сюда или кликните для выбора'}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" startIcon={editingId ? <Edit /> : <Add />} sx={{ mt: 2, height: '56px' }}>
                                {editingId ? 'Обновить' : 'Добавить'}
                            </Button>
                        </Grid>
                        {editingId && (
                            <Grid item xs={12}>
                                <Button fullWidth variant="outlined" onClick={cancelEdit}>
                                    Отмена
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </Box>

                <Typography variant="h5" component="h2" gutterBottom>
                    Список сотрудников
                </Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" align="center">{error}</Typography>
                ) : (
                    <List>
                        {administrations.map((admin) => (
                            <ListItem
                                key={admin.id}
                                secondaryAction={
                                    <>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(admin)} sx={{ mr: 1 }}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(admin.id)}>
                                            <Delete />
                                        </IconButton>
                                    </>
                                }
                                sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, p: 2 }}
                            >
                                <Avatar src={`http://localhost:8000/${admin.path}`} sx={{ width: 56, height: 56, mr: 2 }} variant="rounded" />
                                <ListItemText
                                    primary={admin.fio}
                                    secondary={
                                        <>
                                            <Typography component="span" variant="body2" color="text.primary">
                                                {admin.position}
                                            </Typography>
                                            <br />
                                            {admin.email} - {admin.phone}
                                        </>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </Container>
    );
};

export default AdministrationComponent;
