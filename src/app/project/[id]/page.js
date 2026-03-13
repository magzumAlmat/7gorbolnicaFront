"use client";
import React from "react";
import { useParams } from "next/navigation";
import Documents from "@/components/documents";
import CreateDocument from "@/components/createdocument";
import { Container, Stack, Typography, Box } from "@mui/material";

export default function ProjectDocumentsPage() {
  const pathname = useParams();
  
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack spacing={4}>
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                    Документы проекта
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    ID Проекта: {pathname.id}
                </Typography>
            </Box>
            <Documents id={pathname.id} />
            <CreateDocument id={pathname.id}/>
        </Stack>
    </Container>
  );
}
