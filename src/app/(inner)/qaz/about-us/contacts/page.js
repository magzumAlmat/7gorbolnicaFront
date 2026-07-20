'use client';
import { useState, useEffect } from 'react';
import { Typography, Box, Grid, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function ContactsPage() {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/kazniisa/contacts`)
      .then((r) => r.json())
      .then((d) => setOffices(
        (Array.isArray(d) ? d : [])
          .slice()
          .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
          .map((o) => ({
            city: o.officeName?.kz || o.officeName?.ru || '',
            address: o.address?.kz || o.address?.ru || '',
            phone: o.phone,
            email: o.email,
            hours: o.workHours?.kz || o.workHours?.ru || '',
            contact: o.contactName,
            contactRole: o.contactRole,
            contactPhone: o.contactPhone,
            contactEmail: o.contactEmail,
          }))
      ))
      .catch(() => {});
  }, []);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Байланыс
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3}>
        {offices.map((office, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Box sx={{
              p: 3, border: '1px solid ' + BORDER, borderRadius: '6px',
              height: '100%', boxSizing: 'border-box',
              bgcolor: i === 0 ? BLUE_LIGHT : 'white',
              borderLeft: i === 0 ? '4px solid ' + BLUE : undefined,
              transition: 'box-shadow 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
            }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.05rem', mb: 2 }}>
                {office.city}
              </Typography>

              <Typography sx={{ fontSize: '0.78rem', color: GRAY_TEXT, fontWeight: 600, letterSpacing: 0.5, mb: 1.5, textTransform: 'uppercase' }}>
                Байланыс ақпараты
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                <LocationOnIcon sx={{ color: BLUE, fontSize: 18, mt: 0.3 }} />
                <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#334155' }}>{office.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <PhoneIcon sx={{ color: BLUE, fontSize: 18 }} />
                <Typography sx={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>{office.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <EmailIcon sx={{ color: BLUE, fontSize: 18 }} />
                <Typography sx={{ fontSize: '0.92rem', color: '#334155' }}>{office.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <AccessTimeIcon sx={{ color: BLUE, fontSize: 18 }} />
                <Typography sx={{ fontSize: '0.92rem', color: GRAY_TEXT }}>{office.hours}</Typography>
              </Box>

              {office.contact && (
                <Box sx={{ pt: 1.5, borderTop: '1px solid ' + BORDER }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <PersonIcon sx={{ color: BLUE, fontSize: 18 }} />
                    <Typography sx={{ fontWeight: 600, color: NAVY, fontSize: '0.88rem' }}>
                      {office.contact}
                    </Typography>
                  </Box>
                  {office.contactRole && (
                    <Typography sx={{ fontSize: '0.8rem', color: GRAY_TEXT, ml: 3.5 }}>{office.contactRole}</Typography>
                  )}
                  {office.contactPhone && (
                    <Typography sx={{ fontSize: '0.8rem', color: '#334155', ml: 3.5, mt: 0.3 }}>
                      тел. {office.contactPhone}
                    </Typography>
                  )}
                  {office.contactEmail && (
                    <Typography sx={{ fontSize: '0.8rem', color: '#334155', ml: 3.5, mt: 0.3 }}>
                      {office.contactEmail}
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
