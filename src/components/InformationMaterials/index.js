"use client";
import React, { useState, useEffect } from 'react';
import {
    Container, Paper, Typography, Grid, TextField, Button, List, ListItem,
    ListItemText, IconButton, Box, CircularProgress, Link
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const InformationMaterialsComponent = () => {
    const [materials, setMaterials] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Form state
    const [title, setTitle] = useState('');
    const [urlOfFile, setUrlOfFile] = useState('');

    useEffect(() => {
        fetchMaterials();
    }, []);

    const fetchMaterials = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/api/information-materials', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setMaterials(data);
            } else {
                setError('Failed to fetch information materials');
            }
        } catch (error) {
            setError('Error fetching information materials: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const url = editingId
            ? `http://localhost:8000/api/information-materials/${editingId}`
            : 'http://localhost:8000/api/information-materials';
        const method = editingId ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ title, urlOfFile })
            });

            if (response.ok) {
                fetchMaterials();
                cancelEdit();
            } else {
                const errorData = await response.json();
                setError(`Failed to save material: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            setError('Error saving material: ' + error.message);
        }
    };

    const handleEdit = (material) => {
        setEditingId(material.id);
        setTitle(material.title);
        setUrlOfFile(material.urlOfFile);
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/api/information-materials/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                fetchMaterials();
            } else {
                setError('Failed to delete material');
            }
        } catch (error) {
            setError('Error deleting material: ' + error.message);
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setTitle('');
        setUrlOfFile('');
        setError(null);
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {editingId ? 'Редактировать материал' : 'Добавить информационный материал'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Заголовок"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="URL файла"
                                value={urlOfFile}
                                onChange={(e) => setUrlOfFile(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                startIcon={editingId ? <Edit /> : <Add />}
                                sx={{ height: '56px' }}
                            >
                                {editingId ? 'Обновить' : 'Добавить'}
                            </Button>
                        </Grid>
                        {editingId && (
                            <Grid item xs={12} sm={6}>
                                <Button fullWidth variant="outlined" onClick={cancelEdit} sx={{ height: '56px' }}>
                                    Отмена
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </Box>

                <Typography variant="h5" component="h2" gutterBottom>
                    Сохраненные материалы
                </Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" align="center">{error}</Typography>
                ) : (
                    <List>
                        {materials.map((material) => (
                            <ListItem
                                key={material.id}
                                secondaryAction={
                                    <>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(material)} sx={{ mr: 1 }}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(material.id)}>
                                            <Delete />
                                        </IconButton>
                                    </>
                                }
                                sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}
                            >
                                <ListItemText
                                    primary={material.title}
                                    secondary={
                                        <Link href={material.urlOfFile} target="_blank" rel="noopener">
                                            {material.urlOfFile}
                                        </Link>
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

export default InformationMaterialsComponent;
