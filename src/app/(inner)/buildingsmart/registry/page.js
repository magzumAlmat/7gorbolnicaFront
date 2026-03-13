'use client';

import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function BuildingSmartRegistryPage() {
  const participants = [
    { name: 'АО «КазНИИСА»', status: 'Platinum' },
    { name: 'ТОО «BI Group»', status: 'Gold' },
    { name: 'ТОО «Bazis-A»', status: 'Gold' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Реестр участников BuildingSMART Kazakhstan
      </Typography>
      
      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #eee' }}>
        <Table>
          <TableHead sx={{ bgcolor: '#f8f9fa' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Наименование организации</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Статус участия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.name}</TableCell>
                <TableCell sx={{ color: '#2887B6', fontWeight: 600 }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
