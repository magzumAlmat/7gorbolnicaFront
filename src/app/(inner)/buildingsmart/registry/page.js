'use client';
import { Typography, Box, Paper, Grid, Chip, Divider } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import StarIcon from '@mui/icons-material/Star';

const members = [
  {
    name: 'BI-GROUP',
    type: 'Корпоративный член',
    desc: 'Крупнейший строительный холдинг Казахстана. 29 лет на рынке строительства. Девелопер № 1 в Центральной Азии. Реализует жилые, коммерческие и инфраструктурные проекты с применением BIM-технологий.',
    color: '#0369A1',
  },
];

export default function RegistryPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        Реестр участников
      </Typography>
      <Chip label="BuildingSMART Казахстан" sx={{ bgcolor: '#0369A1', color: '#fff', mb: 3, fontWeight: 600 }} />

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        Реестр организаций — членов BuildingSMART Казахстан. Участники реестра активно применяют
        BIM-технологии и openBIM-стандарты в своей профессиональной деятельности и вносят вклад
        в развитие строительной отрасли страны.
      </Typography>

      <Grid container spacing={3}>
        {members.map((m) => (
          <Grid item xs={12} key={m.name}>
            <Paper sx={{ p: 3, borderRadius: 2, border: `2px solid ${m.color}`, position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: 0, left: 0, width: 6, height: '100%', bgcolor: m.color }} />
              <Box sx={{ pl: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <BusinessIcon sx={{ color: m.color, fontSize: 32 }} />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#0F172A' }}>{m.name}</Typography>
                    <Chip label={m.type} size="small" sx={{ bgcolor: m.color, color: '#fff', fontWeight: 600, mt: 0.5 }} />
                  </Box>
                </Box>
                <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>{m.desc}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                  <Chip icon={<StarIcon />} label="29 лет на рынке" size="small" sx={{ bgcolor: '#F8FAFC' }} />
                  <Chip label="№1 в Центральной Азии" size="small" sx={{ bgcolor: '#F8FAFC' }} />
                  <Chip label="BIM-пионер" size="small" sx={{ bgcolor: '#F8FAFC' }} />
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 3, mt: 4, bgcolor: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 2 }}>
        <Typography sx={{ color: '#92400E', lineHeight: 1.7 }}>
          Для вступления в реестр участников BuildingSMART Казахстан обратитесь в КазНИИСА.
          Членство открыто для строительных компаний, проектных организаций, государственных органов
          и учебных заведений, внедряющих BIM/ТИМСО.
        </Typography>
      </Paper>
    </Box>
  );
}
