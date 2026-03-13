'use client';

import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { LocationOn, Phone } from '@mui/icons-material';

export default function BranchesPage() {
  const branches = [
    { city: 'Астана', address: 'р-н Сарыарқа, ул. Бейбітшілік 14, оф 1406', phone: '8 (7172) 57-53-03' },
    { city: 'Усть-Каменогорск', address: 'ул. М.Горького, 21 офис 203', phone: '8 (7232) 26-16-90' },
    { city: 'Тараз', address: 'ул. Сулейманова, 19 Б', phone: '+7 (7262) 43-63-99' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#002e5b' }}>
        Филиалы
      </Typography>
      
      <Typography variant="body1" paragraph>
        АО «КазНИИСА» имеет развитую сеть филиалов в крупнейших городах Казахстана, обеспечивая 
        доступ к экспертным услугам в области строительства по всей стране.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {branches.map((branch, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card elevation={0} sx={{ border: '1px solid #eee', height: '100%', '&:hover': { borderColor: '#2887B6' } }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#002e5b', mb: 2 }}>{branch.city}</Typography>
                
                <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
                  <LocationOn sx={{ color: '#2887B6', fontSize: 20 }} />
                  <Typography variant="body2">{branch.address}</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Phone sx={{ color: '#2887B6', fontSize: 20 }} />
                  <Typography variant="body2">{branch.phone}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
