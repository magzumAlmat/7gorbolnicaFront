'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const EditorJSRenderer = ({ data }) => {
  if (!data || !data.blocks || data.blocks.length === 0) {
    return <Typography color="text.secondary">Контент отсутствует.</Typography>;
  }

  return (
    <Box sx={{ '& > *:last-child': { mb: 0 } }}>
      {data.blocks.map((block, i) => {
        switch (block.type) {
          case 'header':
            return (
              <Typography
                key={i}
                variant={`h${block.data.level}`}
                sx={{ mt: i > 0 ? 3 : 0, mb: 1.5, fontWeight: 700, color: '#0C2340' }}
              >
                <span dangerouslySetInnerHTML={{ __html: block.data.text }} />
              </Typography>
            );

          case 'paragraph':
            return (
              <Typography
                key={i}
                variant="body1"
                sx={{ mb: 2, lineHeight: 1.8, color: '#334155' }}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );

          case 'list':
            const Tag = block.data.style === 'ordered' ? 'ol' : 'ul';
            return (
              <Box key={i} component={Tag} sx={{ mb: 2, pl: 3, '& li': { mb: 0.5, lineHeight: 1.7 } }}>
                {block.data.items.map((item, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: typeof item === 'string' ? item : item.content }} />
                ))}
              </Box>
            );

          case 'image':
            return (
              <Box key={i} sx={{ my: 3, textAlign: 'center' }}>
                <Box
                  component="img"
                  src={block.data.file?.url || block.data.url}
                  alt={block.data.caption || ''}
                  sx={{
                    maxWidth: block.data.stretched ? '100%' : '80%',
                    height: 'auto',
                    borderRadius: 2,
                    border: block.data.withBorder ? '1px solid #e0e0e0' : 'none',
                    bgcolor: block.data.withBackground ? '#f8f9fa' : 'transparent',
                    p: block.data.withBackground ? 2 : 0,
                  }}
                />
                {block.data.caption && (
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary', fontStyle: 'italic' }}>
                    {block.data.caption}
                  </Typography>
                )}
              </Box>
            );

          case 'quote':
            return (
              <Box
                key={i}
                sx={{
                  my: 3,
                  pl: 3,
                  borderLeft: '4px solid #0891B2',
                  bgcolor: '#f8fffe',
                  py: 2,
                  pr: 3,
                  borderRadius: '0 8px 8px 0',
                }}
              >
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#334155', lineHeight: 1.7 }}>
                  {block.data.text}
                </Typography>
                {block.data.caption && (
                  <Typography variant="body2" sx={{ mt: 1, fontWeight: 600, color: '#64748b' }}>
                    — {block.data.caption}
                  </Typography>
                )}
              </Box>
            );

          case 'code':
            return (
              <Box
                key={i}
                component="pre"
                sx={{
                  my: 2,
                  p: 2,
                  bgcolor: '#1e293b',
                  color: '#e2e8f0',
                  borderRadius: 2,
                  overflow: 'auto',
                  fontSize: 14,
                  fontFamily: 'monospace',
                  lineHeight: 1.6,
                }}
              >
                <code>{block.data.code}</code>
              </Box>
            );

          case 'delimiter':
            return (
              <Box key={i} sx={{ my: 4, textAlign: 'center', color: '#cbd5e1', fontSize: 24, letterSpacing: 8 }}>
                ***
              </Box>
            );

          case 'table':
            return (
              <Box key={i} sx={{ my: 3, overflow: 'auto' }}>
                <Box
                  component="table"
                  sx={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    '& td, & th': {
                      border: '1px solid #e2e8f0',
                      p: 1.5,
                      fontSize: 14,
                    },
                    '& tr:first-of-type': block.data.withHeadings
                      ? { bgcolor: '#f1f5f9', fontWeight: 700 }
                      : {},
                  }}
                >
                  <tbody>
                    {block.data.content.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} dangerouslySetInnerHTML={{ __html: cell }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Box>
              </Box>
            );

          case 'checklist':
            return (
              <Box key={i} sx={{ my: 2 }}>
                {block.data.items.map((item, j) => (
                  <Box key={j} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Box sx={{ width: 18, height: 18, borderRadius: '4px', border: '2px solid', borderColor: item.checked ? '#10b981' : '#cbd5e1', bgcolor: item.checked ? '#10b981' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, flexShrink: 0 }}>
                      {item.checked && '✓'}
                    </Box>
                    <Typography variant="body2" sx={{ textDecoration: item.checked ? 'line-through' : 'none', color: item.checked ? '#94a3b8' : '#334155' }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            );

          case 'warning':
            return (
              <Box key={i} sx={{ my: 3, p: 2, bgcolor: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#92400e', mb: 0.5 }}>
                  ⚠ {block.data.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#78350f' }}>
                  {block.data.message}
                </Typography>
              </Box>
            );

          case 'embed':
            return (
              <Box key={i} sx={{ my: 3, position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src={block.data.embed}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: 8 }}
                  allowFullScreen
                />
                {block.data.caption && (
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary', textAlign: 'center' }}>
                    {block.data.caption}
                  </Typography>
                )}
              </Box>
            );

          case 'raw':
            return (
              <Box key={i} sx={{ my: 2 }} dangerouslySetInnerHTML={{ __html: block.data.html }} />
            );

          default:
            return null;
        }
      })}
    </Box>
  );
};

export default EditorJSRenderer;
