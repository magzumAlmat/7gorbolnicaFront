import React from 'react';
import NewsList from '../../../components/newslist';
import { Typography, Box } from '@mui/material';

export default function NewsPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#002e5b' }}>
        Новости
      </Typography>
      <NewsList />
    </Box>
  );
}
