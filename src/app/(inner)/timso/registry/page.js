'use client';

import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function TimsoRegistryPage() {
  const participants = [
    { name: 'ТОО «Проектная фирма»', city: 'Алматы', status: 'Активен' },
    { name: 'АО «Институт проектирования»', city: 'Астана', status: 'Активен' },
    { name: 'ТОО «БИМ-Технологии»', city: 'Шымкент', status: 'Активен' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Реестр участников ТИМСО
      </Typography>
      
      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #eee' }}>
        <Table>
          <TableHead sx={{ bgcolor: '#f8f9fa' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Наименование организации</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Город</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell sx={{ color: '#10b857', fontWeight: 600 }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
