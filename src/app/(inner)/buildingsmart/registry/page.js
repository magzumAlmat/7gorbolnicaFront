'use client';
import { Typography, Box, Paper, Grid, Chip } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import StarIcon from '@mui/icons-material/Star';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const members = [];

export default function RegistryPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: NAVY }}>
        Реестр участников
      </Typography>
      <Chip label="BuildingSMART Казахстан" sx={{ bgcolor: BLUE, color: '#fff', mb: 3, fontWeight: 600 }} />

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        Реестр организаций — членов BuildingSMART Казахстан. Участники реестра активно применяют
        BIM-технологии и openBIM-стандарты в своей профессиональной деятельности и вносят вклад
        в развитие строительной отрасли страны.
      </Typography>

      {members.length > 0 ? (
        <Grid container spacing={3}>
          {members.map((m) => (
            <Grid item xs={12} key={m.name}>
              <Paper sx={{
                p: 3,
                borderRadius: '6px',
                border: '2px solid ' + m.color,
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: 6, height: '100%', bgcolor: m.color }} />
                <Box sx={{ pl: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <BusinessIcon sx={{ color: m.color, fontSize: 32 }} />
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: NAVY }}>{m.name}</Typography>
                      <Chip label={m.type} size="small" sx={{ bgcolor: m.color, color: '#fff', fontWeight: 600, mt: 0.5 }} />
                    </Box>
                  </Box>
                  <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>{m.desc}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper sx={{
          p: 4,
          borderRadius: '6px',
          border: '1px dashed ' + BORDER,
          bgcolor: GRAY_BG,
          textAlign: 'center',
        }}>
          <Typography sx={{ color: GRAY_TEXT, lineHeight: 1.7 }}>
            Реестр участников формируется. Информация о членах BuildingSMART Казахстан
            будет опубликована по мере регистрации организаций.
          </Typography>
        </Paper>
      )}

      <Paper sx={{
        p: 3,
        mt: 4,
        bgcolor: BLUE_LIGHT,
        border: '1px solid ' + BLUE,
        borderRadius: '6px',
      }}>
        <Typography sx={{ color: NAVY, lineHeight: 1.7 }}>
          Для вступления в реестр участников BuildingSMART Казахстан обратитесь в КазНИИСА.
          Членство открыто для строительных компаний, проектных организаций, государственных органов
          и учебных заведений, внедряющих BIM/ТИМСО.
        </Typography>
      </Paper>
    </Box>
  );
}
