"use client";
import React, { useState, useEffect, useCallback } from 'react';
import {
    Container, Paper, Typography, Grid, TextField, Button, List, ListItem,
    ListItemText, IconButton, Box, CircularProgress, Link
} from '@mui/material';
import { Edit, Delete, Add, CloudUpload } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const AntiCorruptionComponent = () => {
    const [antiCorruptionDocs, setAntiCorruptionDocs] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Form state
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
    });

    useEffect(() => {
        fetchAntiCorruptionDocs();
        return () => {
            if (preview && preview.startsWith('blob:')) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const fetchAntiCorruptionDocs = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/api/anti-corruption', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setAntiCorruptionDocs(data);
            } else {
                setError('Failed to fetch anti-corruption documents');
            }
        } catch (error) {
            setError('Error fetching anti-corruption documents: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const url = editingId
            ? `http://localhost:8000/api/anti-corruption/${editingId}`
            : 'http://localhost:8000/api/anti-corruption';
        const method = editingId ? 'PUT' : 'POST';

        const formData = new FormData();
        formData.append('title', title);
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
                fetchAntiCorruptionDocs();
                cancelEdit();
            } else {
                const errorData = await response.json();
                setError(`Failed to save document: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            setError('Error saving document: ' + error.message);
        }
    };

    const handleEdit = (doc) => {
        setEditingId(doc.id);
        setTitle(doc.title);
        setFile(null);
        if (doc.documentPath) {
            setPreview(`http://localhost:8000/${doc.documentPath}`);
        } else {
            setPreview(null);
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/api/anti-corruption/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                fetchAntiCorruptionDocs();
            } else {
                setError('Failed to delete document');
            }
        } catch (error) {
            setError('Error deleting document: ' + error.message);
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setTitle('');
        setFile(null);
        setPreview(null);
        setError(null);
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {editingId ? 'Редактировать документ' : 'Добавить документ по противодействию коррупции'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <TextField
                                fullWidth
                                label="Название документа"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
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
                                <CloudUpload sx={{ fontSize: 60, mb: 2, color: 'text.secondary' }} />
                                <Typography>
                                    {isDragActive ? 'Отпустите для загрузки' : 'Перетащите файл сюда или кликните для выбора'}
                                </Typography>
                                {preview && !preview.startsWith('blob:') && (
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                        Текущий файл: <Link href={preview} target="_blank" rel="noopener">{preview.split('/').pop()}</Link>
                                    </Typography>
                                )}
                                {preview && preview.startsWith('blob:') && (
                                     <Typography variant="body2" sx={{ mt: 1 }}>
                                        Новый файл: {file?.name}
                                    </Typography>
                                )}
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" startIcon={editingId ? <Edit /> : <Add />} sx={{ mt: 2, height: '56px' }}>
                                {editingId ? 'Обновить документ' : 'Добавить документ'}
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
                    Сохраненные документы
                </Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" align="center">{error}</Typography>
                ) : (
                    <List>
                        {antiCorruptionDocs.map((doc) => (
                            <ListItem
                                key={doc.id}
                                secondaryAction={
                                    <>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(doc)} sx={{ mr: 1 }}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(doc.id)}>
                                            <Delete />
                                        </IconButton>
                                    </>
                                }
                                sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}
                            >
                                <ListItemText
                                    primary={doc.title}
                                    secondary={doc.documentPath ? (
                                        <Link href={`http://localhost:8000/${doc.documentPath}`} target="_blank" rel="noopener">
                                            Скачать файл
                                        </Link>
                                    ) : 'Файл не загружен'}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </Container>
    );
};

export default AntiCorruptionComponent;
