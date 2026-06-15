'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

export default function AboutUsPage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}>
        О нас
      </Typography>
      <Box sx={{ width: 50, height: 3, bgcolor: AMBER, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2.5 }}>
        Единственный в Казахстане государственный научно-исследовательский и проектный институт в области развития строительства, включая районы с особо сложными инженерно-геологическими условиями и сейсмоопасные районы.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        АО «КазНИИСА» – признанный лидер ЕАЭС в области исследования и внедрения информационных технологий в строительство. Мы осуществляем проектирование зданий, сооружений и объектов любого уровня сложности. Институт выполняет полный комплекс научно-технических работ в области разработки градостроительной документации, от предпроектных исследований и обоснований до подготовки проектной документации и ведения авторского надзора. Проектная деятельность осуществляется специалистами, способными решать различные градостроительные, архитектурно-планировочные, землеустроительные и инженерные задачи с помощью современной технологической базы института.
      </Typography>

      <Box sx={{ borderLeft: `4px solid ${AMBER}`, pl: 3, py: 2, mb: 4, bgcolor: '#FAFAFA' }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, color: '#334155', fontStyle: 'italic' }}>
          АО «КазНИИСА» имеет собственную лабораторную и производственную базу, позволяющую проводить передовые научные исследования в области внедрения новых материалов и технологических инноваций в строительной отрасли.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, mb: 2, fontFamily: '"Exo 2", sans-serif' }}>
            Наша миссия
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', textAlign: 'justify' }}>
            Содействие научно-техническому развитию и внедрению передовых технологий в сфере строительства. Повышение качества жизни через создание условий для инновационного развития сферы строительства в соответствии с принципами устойчивого развития регионов, применение передовых программно-технических решений проектирования, и безусловную приверженность безопасности на всех стадиях жизненного цикла каждого объекта.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, mb: 2, fontFamily: '"Exo 2", sans-serif' }}>
            Как мы работаем
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', textAlign: 'justify' }}>
            Проводим научно-исследовательские и проектные работы и оказываем консультационные услуги для обеспечения надежности зданий и сооружений сейсмостойкого строительства.
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mt: 2, textAlign: 'justify' }}>
            Осуществляем мониторинг цен на строительные материалы, разработку технологических карт и других нормативно-технических документов, регулирующих ценообразование в строительстве.
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mt: 2, textAlign: 'justify' }}>
            Исследуем и внедряем современные информационные технологии в строительство.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <Box
          component="img"
          src="/images/kazniisa/history-banner.webp"
          alt="КазНИИСА"
          sx={{ width: '100%', maxWidth: 560, borderRadius: 1 }}
        />
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="overline" sx={{ color: '#64748B', fontWeight: 600, letterSpacing: 1.5 }}>
        Руководство
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mt: 1.5 }}>
        <Box
          component="img"
          src="/images/kazniisa/kulbaev-director.webp"
          alt="Кульбаев Бегман Бахитович"
          sx={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: NAVY }}>
            Кульбаев Бегман Бахитович
          </Typography>
          <Typography sx={{ color: '#64748B', fontSize: '0.9rem' }}>
            Генеральный директор
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
