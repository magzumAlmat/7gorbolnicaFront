"use client";
import React, { useState, useEffect } from 'react';
import {
    Box, Typography, CircularProgress, Alert, Paper, Link
} from '@mui/material';
import Image from 'next/image'; // Import Image from next/image

const DocumentDetails = ({ documentId }) => {
    const [documentDetails, setDocumentDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocumentDetails = async () => {
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
                    console.log('Document Details:', data); // Log document details
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

        if (documentId) {
            fetchDocumentDetails();
        }
    }, [documentId]);

    // Helper function to clean up image URLs
    const cleanImageUrl = (url) => {
        const baseUrl = "http://localhost:8000";
        if (url.startsWith(baseUrl + baseUrl)) {
            return url.substring(baseUrl.length);
        }
        return url;
    };

    // Helper function to render rich text content
    const renderContent = (content) => {
        if (!content || !Array.isArray(content)) {
            return null;
        }

        return content.map((block, index) => {
            switch (block.type) {
                case 'paragraph':
                    return (
                        <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                            {block.children.map((child, childIndex) => (
                                <span key={childIndex} style={{ fontWeight: child.bold ? 'bold' : 'normal' }}>
                                    {child.text}
                                </span>
                            ))}
                        </Typography>
                    );
                case 'image':
                    const imageUrl = cleanImageUrl(block.url);
                    return (
                        <Box key={index} sx={{ my: 2, textAlign: 'center' }}>
                            <Image
                                src={imageUrl}
                                alt={block.alt || `Image ${index}`}
                                width={500} // You might want to make this dynamic or configurable
                                height={300} // You might want to make this dynamic or configurable
                                layout="responsive" // This makes the image responsive
                                objectFit="contain"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </Box>
                    );
                // Add more cases for other block types (e.g., heading, list) as needed
                default:
                    return <Typography key={index} variant="body2" color="text.secondary">Неизвестный тип блока: {block.type}</Typography>;
            }
        });
    };

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

    if (!documentDetails) {
        return <Typography variant="h6" sx={{ mt: 2 }}>Документ не найден.</Typography>;
    }

    return (
        <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
            {/* <Typography variant="h5" gutterBottom>Детали </Typography> */}
            {/* <Typography variant="body1"><strong>ID:</strong> {documentDetails.id}</Typography> */}
            <Typography variant="body1"><strong>Название:</strong> {documentDetails.document_name}</Typography>
            {documentDetails.path && (
                <Typography variant="body1">
                    <strong>Файл:</strong> <Link href={`http://localhost:8000/${documentDetails.path}`} target="_blank" rel="noopener">
                        Скачать файл
                    </Link>
                </Typography>
            )}
            
            <Box sx={{ mt: 2, p: 2, border: '1px dashed grey', minHeight: '100px' }}>
                {documentDetails.document_content ? (
                    renderContent(documentDetails.document_content)
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        Содержимое документа отсутствует.
                    </Typography>
                )}
            </Box>
        </Paper>
    );
};

export default DocumentDetails;
