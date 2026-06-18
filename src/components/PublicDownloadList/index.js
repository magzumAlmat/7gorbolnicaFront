'use client';
import { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const BORDER = '#E2E8F0';

// Имя записи берём из любого из вариантов поля названия у файловых реестров.
const titleOf = (i) => i.Name || i.title || i.name || i.reportName || i.licenseName || 'Документ';

/**
 * Публичный список документов из файлового реестра (read-only).
 * Рендерится ПОД существующим текстом страницы; если записей нет — не показывает ничего.
 *   endpoint — напр. '/api/corporate-documents/public'
 *   heading  — заголовок секции (опц.)
 */
export default function PublicDownloadList({ endpoint, heading }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}${endpoint}`)
      .then((r) => r.json())
      .then((d) => setItems(Array.isArray(d) ? d : []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [endpoint]);

  if (loading) return <Box sx={{ py: 3, textAlign: 'center' }}><CircularProgress size={24} /></Box>;
  if (!items.length) return null; // нет записей — оставляем нарратив страницы как есть

  return (
    <Box sx={{ mt: 4 }}>
      {heading && (
        <>
          <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
            {heading}
          </Typography>
          <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
        </>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {items.map((it) => {
          const href = it.path ? `${API_URL}/${it.path}` : null;
          return (
            <Box
              key={it.id}
              component={href ? 'a' : 'div'}
              href={href || undefined}
              target={href ? '_blank' : undefined}
              rel={href ? 'noopener noreferrer' : undefined}
              sx={{
                display: 'flex', alignItems: 'center', gap: 1.5, p: 2,
                border: '1px solid ' + BORDER, borderLeft: '4px solid ' + BLUE,
                borderRadius: '0 6px 6px 0', bgcolor: BLUE_LIGHT, textDecoration: 'none',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': href ? { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' } : {},
              }}
            >
              <DescriptionIcon sx={{ color: BLUE, flexShrink: 0 }} />
              <Typography sx={{ flex: 1, fontSize: '0.95rem', color: '#334155', fontWeight: 500 }}>
                {titleOf(it)}{it.year ? ` (${it.year})` : ''}
              </Typography>
              {href && <OpenInNewIcon sx={{ color: BLUE, fontSize: 18, flexShrink: 0 }} />}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
