'use client';
import { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';

export default function VacanciesPage() {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/vacancies/public`)
      .then((r) => r.json())
      .then((d) => setVacancies(Array.isArray(d) ? d : []))
      .catch(() => {});
  }, []);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Бос жұмыс орындар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box
        component="img"
        src="/images/kazniisa/vacancies-banner.jpg"
        alt="Бос жұмыс орындар"
        sx={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 2, mb: 3 }}
      />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Қазақстанның кешенді құрылысын тиімді дамыту саласындағы мемлекеттік ғылыми-зерттеу және
        жобалау институты. Біз түпкілікті нәтижеге назар аударатын тиімділікке бағытталған
        кәсіпқойлармыз.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Ашық позициялар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ overflowX: 'auto', mb: 5 }}>
        <Table sx={{ minWidth: 600 }}>
          <TableBody>
            <TableRow sx={{ bgcolor: NAVY }}>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', py: 1.5 }}>
                Тақырып жұмыс туралы хабарландыру
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', py: 1.5 }}>
                Орналасқан жері
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', py: 1.5 }}>
                Бөлім
              </TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', py: 1.5 }}>
                Күні
              </TableCell>
            </TableRow>
            {vacancies.map((v, i) => (
              <TableRow
                key={i}
                sx={{ bgcolor: i % 2 === 0 ? GRAY_BG : '#fff', '&:hover': { bgcolor: BLUE_LIGHT } }}
              >
                <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 600, py: 1.5 }}>
                  {v.title}
                </TableCell>
                <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', py: 1.5 }}>
                  {v.address}
                </TableCell>
                <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', py: 1.5 }}>
                  {v.department}
                </TableCell>
                <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', py: 1.5 }}>
                  {v.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4 }}>
        <Typography
          sx={{
            color: '#CBD5E1',
            fontSize: '1rem',
            lineHeight: 1.9,
            mb: 1.5,
          }}
        >
          Біз сізге қалай көмектесе аламыз?
        </Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.9 }}>
          Мекенжайы:{' '}
          <Box component="span" sx={{ color: BLUE_LIGHT, fontWeight: 600 }}>
            Алматы қ., 3 микрорайон, 44-а
          </Box>
          {'  '}|{'  '}
          Тел.:{' '}
          <Box component="span" sx={{ color: BLUE_LIGHT, fontWeight: 600 }}>
            8 (727) 226 94 10
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
