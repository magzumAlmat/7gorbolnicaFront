"use client";
import React, { useState, useEffect } from 'react';
import {
    Box, Typography, CircularProgress, Alert, Paper, Link as MuiLink, Grid
} from '@mui/material';
import Image from 'next/image';

const DocumentDetails = ({ documentId }) => {
    const [documentDetails, setDocumentDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocumentDetails = async () => {
            if (!documentId) {
                setLoading(false);
                setError("Document ID is not provided.");
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://localhost:8000/api/user/project/document/${documentId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    setDocumentDetails(data);
                } else {
                    const errorData = await response.json();
                    setError(errorData.message || 'Failed to fetch document details');
                }
            } catch (err) {
                setError('Error fetching document details: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDocumentDetails();
    }, [documentId]);

    const cleanImageUrl = (url) => {
        const baseUrl = "http://localhost:8000";
        if (url.startsWith(baseUrl + baseUrl)) {
            return url.substring(baseUrl.length);
        }
        return url;
    };

    const renderContent = (content) => {
        if (!content || !Array.isArray(content)) {
            return <Typography variant="body2" color="text.secondary">Содержимое неверного формата.</Typography>;
        }

        return content.map((block, index) => {
            const children = block.children?.map((child, childIndex) => (
                <span key={childIndex} style={{ 
                    fontWeight: child.bold ? 'bold' : 'normal',
                    fontStyle: child.italic ? 'italic' : 'normal',
                    textDecoration: child.underline ? 'underline' : 'none',
                 }}>
                    {child.text}
                </span>
            ));

            switch (block.type) {
                case 'heading-one':
                    return <Typography key={index} variant="h4" component="h2" sx={{ my: 2 }}>{children}</Typography>;
                case 'heading-two':
                    return <Typography key={index} variant="h5" component="h3" sx={{ my: 2 }}>{children}</Typography>;
                case 'heading-three':
                    return <Typography key={index} variant="h6" component="h4" sx={{ my: 1 }}>{children}</Typography>;
                case 'paragraph':
                    return <Typography key={index} variant="body1" sx={{ mb: 1.5 }}>{children}</Typography>;
                case 'image':
                    const imageUrl = cleanImageUrl(block.url);
                    return (
                        <Box key={index} sx={{ my: 2, textAlign: block.align || 'center' }}>
                            <Image
                                src={imageUrl}
                                alt={block.alt || `Image ${index}`}
                                width={600}
                                height={400}
                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                            />
                        </Box>
                    );
                case 'block-quote':
                     return <Box key={index} component="blockquote" sx={{ my: 2, pl: 2, borderLeft: 4, borderColor: 'primary.main', color: 'text.secondary' }}><Typography variant="body1" sx={{ fontStyle: 'italic' }}>{children}</Typography></Box>;
                default:
                    return <Typography key={index} variant="body2" color="text.secondary">Неизвестный тип блока: {block.type}</Typography>;
            }
        });
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (!documentDetails) {
        return <Alert severity="warning">Документ не найден.</Alert>;
    }

    return (
        <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, border: 1, borderColor: 'divider', borderRadius: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {documentDetails.document_name}
                    </Typography>
                </Grid>

                {documentDetails.path && (
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            <strong>Файл:</strong>{' '}
                            <MuiLink href={`http://localhost:8000/${documentDetails.path}`} target="_blank" rel="noopener" underline="hover">
                                Скачать файл
                            </MuiLink>
                        </Typography>
                    </Grid>
                )}

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Typography variant="h6">Содержимое документа:</Typography>
                    <Box sx={{ mt: 1, p: { xs: 1.5, md: 2.5 }, borderRadius: 1, bgcolor: 'action.hover', minHeight: 200 }}>
                        {documentDetails.document_content ? (
                            renderContent(documentDetails.document_content)
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                Содержимое документа отсутствует.
                            </Typography>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default DocumentDetails;
