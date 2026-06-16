'use client';
import { useState } from 'react';
import { Dialog, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ImageLightbox({ open, onClose, src, alt }) {
  if (!src) return null;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          bgcolor: 'transparent',
          boxShadow: 'none',
          maxWidth: '90vw',
          maxHeight: '90vh',
          overflow: 'visible',
          m: 0,
        },
      }}
      slotProps={{
        backdrop: { sx: { bgcolor: 'rgba(0,0,0,0.85)' } },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: -44,
          right: -4,
          color: '#fff',
          bgcolor: 'rgba(255,255,255,0.15)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        component="img"
        src={src}
        alt={alt || ''}
        onClick={onClose}
        sx={{
          maxWidth: '90vw',
          maxHeight: '85vh',
          objectFit: 'contain',
          display: 'block',
          borderRadius: 1,
          cursor: 'zoom-out',
        }}
      />
    </Dialog>
  );
}

export function useImageLightbox() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });
  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: '', alt: '' });
  return { lightbox, openLightbox, closeLightbox };
}
