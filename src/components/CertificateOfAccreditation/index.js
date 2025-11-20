"use client";
import React, { useState, useEffect, useCallback } from 'react';
import {
    Container, Paper, Typography, Grid, TextField, Button, List, ListItem,
    ListItemText, IconButton, Box, CircularProgress, Link
} from '@mui/material';
import { Edit, Delete, Add, CloudUpload } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const CertificateOfAccreditationComponent = () => {
    const [certificates, setCertificates] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Form state
    const [name, setName] = useState('');
    const [issueDate, setIssueDate] = useState(''); // YYYY-MM-DD format for input type="date"
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
        fetchCertificates();
        return () => {
            if (preview && preview.startsWith('blob:')) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const fetchCertificates = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/api/certificate-of-accreditation', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setCertificates(data);
            } else {
                setError('Failed to fetch certificates');
            }
        } catch (error) {
            setError('Error fetching certificates: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const url = editingId
            ? `http://localhost:8000/api/certificate-of-accreditation/${editingId}`
            : 'http://localhost:8000/api/certificate-of-accreditation';
        const method = editingId ? 'PUT' : 'POST';

        const formData = new FormData();
        formData.append('name', name);
        if (issueDate) {
            formData.append('issueDate', issueDate);
        }
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
                fetchCertificates();
                cancelEdit();
            } else {
                const errorData = await response.json();
                setError(`Failed to save certificate: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            setError('Error saving certificate: ' + error.message);
        }
    };

    const handleEdit = (certificate) => {
        setEditingId(certificate.id);
        setName(certificate.name);
        // Format date for input type="date" (YYYY-MM-DD)
        if (certificate.issueDate) {
            const date = new Date(certificate.issueDate);
            setIssueDate(date.toISOString().split('T')[0]);
        } else {
            setIssueDate('');
        }
        setFile(null);
        if (certificate.path) {
            setPreview(`http://localhost:8000/${certificate.path}`);
        } else {
            setPreview(null);
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8000/api/certificate-of-accreditation/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                fetchCertificates();
            } else {
                setError('Failed to delete certificate');
            }
        } catch (error) {
            setError('Error deleting certificate: ' + error.message);
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setName('');
        setIssueDate('');
        setFile(null);
        setPreview(null);
        setError(null);
    };

    return (
        <Container maxWidth="lg">
            <h1>hi</h1>
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {editingId ? 'Редактировать сертификат' : 'Добавить сертификат аккредитации'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        fullWidth
                                        label="Название сертификата"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        label="Дата выдачи"
                                        type="date"
                                        value={issueDate}
                                        onChange={(e) => setIssueDate(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
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
                                {editingId ? 'Обновить сертификат' : 'Добавить сертификат'}
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
                    Сохраненные сертификаты
                </Typography>
                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" align="center">{error}</Typography>
                ) : (
                    <List>
                        {certificates.map((certificate) => (
                            <ListItem
                                key={certificate.id}
                                secondaryAction={
                                    <>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(certificate)} sx={{ mr: 1 }}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(certificate.id)}>
                                            <Delete />
                                        </IconButton>
                                    </>
                                }
                                sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' } }}
                            >
                                <ListItemText
                                    primary={certificate.name}
                                    secondary={
                                        <>
                                            <Typography component="span" variant="body2" color="text.primary">
                                                {certificate.issueDate ? `Дата выдачи: ${new Date(certificate.issueDate).toLocaleDateString()}` : 'Дата выдачи не указана'}
                                            </Typography>
                                            <br />
                                            {certificate.path ? (
                                                <Link href={`http://localhost:8000/${certificate.path}`} target="_blank" rel="noopener">
                                                    Скачать файл
                                                </Link>
                                            ) : 'Файл не загружен'}
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

export default CertificateOfAccreditationComponent;
