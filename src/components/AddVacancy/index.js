"use client";
import React, { useState, useEffect } from 'react';
import {
    Container, Paper, Typography, Grid, TextField, Button, List, ListItem,
    ListItemText, IconButton, Box, CircularProgress
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const AddVacancyComponent = () => {
    const [vacancies, setVacancies] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchVacancies();
    }, []);

    const fetchVacancies = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/api/vacancies', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setVacancies(data);
            } else {
                setError('Failed to fetch vacancies');
            }
        } catch (error) {
            setError('Error fetching vacancies: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const url = editingId
            ? `http://localhost:8000/api/vacancies/${editingId}`
            : 'http://localhost:8000/api/vacancies';
        const method = editingId ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ title, description })
            });

            if (response.ok) {
                fetchVacancies();
                cancelEdit();
            } else {
                const errorData = await response.json();
                setError(`Failed to save vacancy: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            setError('Error saving vacancy: ' + error.message);
        }
    };

    const handleEdit = (vacancy) => {
        setEditingId(vacancy.id);
        setTitle(vacancy.title);
        setDescription(vacancy.description);
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/api/vacancies/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                fetchVacancies();
            } else {
                setError('Failed to delete vacancy');
            }
        } catch (error) {
            setError('Error deleting vacancy: ' + error.message);
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setTitle('');
        setDescription('');
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {editingId ? 'Редактировать вакансию' : 'Добавить вакансию'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Название"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Описание"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                multiline
                                rows={4}
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
                    Список вакансий
                </Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" align="center">{error}</Typography>
                ) : (
                    <List>
                        {vacancies.map((vacancy) => (
                            <ListItem
                                key={vacancy.id}
                                secondaryAction={
                                    <>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(vacancy)} sx={{ mr: 1 }}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(vacancy.id)}>
                                            <Delete />
                                        </IconButton>
                                    </>
                                }
                                sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}
                            >
                                <ListItemText
                                    primary={vacancy.title}
                                    secondary={vacancy.description}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </Container>
    );
};

export default AddVacancyComponent;
