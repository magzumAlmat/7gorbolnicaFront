"use client";
import React, { useState, useEffect } from 'react';
import {
    Box, Typography, List, ListItem, ListItemText, IconButton, CircularProgress, Alert, Paper
} from '@mui/material';
import { Description, Visibility, Edit, Delete } from '@mui/icons-material'; // Import Edit and Delete icons

const ProjectDocumentsList = ({ projectId, onDocumentClick, onDocumentEditClick, onDocumentDeleteClick, onSave }) => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDocuments = async () => {
        if (!projectId) {
            setDocuments([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:8000/api/user/project/${projectId}/alldocuments`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                const data = await response.json();
                setDocuments(data || []);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Не удалось загрузить новости');
                setDocuments([]); // Clear documents on error
            }
        } catch (err) {
            setError('Ошибка загрузки новостей: ' + err.message);
            setDocuments([]); // Clear documents on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, [projectId, onSave]);


    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (documents.length === 0) {
        return <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>Нет новостей в этой категории.</Typography>;
    }

    const projectName = documents.length > 0 && documents[0].project ? documents[0].project.name : "Новости категории";

    return (
        <Paper elevation={2} sx={{ p: 2, mt: 2, width: '100%' }}>
            <Typography variant="h5" gutterBottom>{projectName}</Typography>
            <List>
                {documents.map((doc) => (
                    <ListItem
                        key={doc.id}
                        secondaryAction={
                            <>
                                <IconButton edge="end" aria-label="view" onClick={() => onDocumentClick(doc.id)} sx={{ mr: 1 }}>
                                    <Visibility />
                                </IconButton>
                                <IconButton edge="end" aria-label="edit" onClick={() => onDocumentEditClick(doc.id)} sx={{ mr: 1 }}>
                                    <Edit />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => onDocumentDeleteClick(doc.id)}>
                                    <Delete />
                                </IconButton>
                            </>
                        }
                    >
                        <Description sx={{ mr: 2 }} />
                        <ListItemText primary={doc.name} secondary={`ID: ${doc.id}`} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default ProjectDocumentsList;
