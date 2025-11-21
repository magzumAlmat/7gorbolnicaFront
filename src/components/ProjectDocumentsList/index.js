"use client";
import React, { useState, useEffect } from 'react';
import {
    Box, Typography, List, ListItem, ListItemText, IconButton, CircularProgress, Alert, Paper
} from '@mui/material';
import { Description, Visibility } from '@mui/icons-material';

const ProjectDocumentsList = ({ projectId, onDocumentClick }) => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocuments = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:8000/api/user/project/${projectId}/alldocuments`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('API response for documents: ', data);
                    setDocuments(data || []); // Ensure documents is always an array // Assuming the API returns { status, message, data: [...] }
                } else {
                    const errorData = await response.json();
                    setError(errorData.message || 'Failed to fetch documents');
                }
            } catch (err) {
                setError('Error fetching documents: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        if (projectId) {
            fetchDocuments();
        }
    }, [projectId]);

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

    console.log('Fetched documents: ', documents);
    if (documents.length == 0) {
        return <Typography variant="h6" sx={{ mt: 2 }}>Нет документов для этого проекта.</Typography>;
    }

    return (
        <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h5" gutterBottom>{documents[0].document_name}</Typography>
            <List>
                {documents.map((doc) => (
                    <ListItem
                        key={doc.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="view" onClick={() => onDocumentClick(doc.id)}>
                                <Visibility />
                            </IconButton>
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
