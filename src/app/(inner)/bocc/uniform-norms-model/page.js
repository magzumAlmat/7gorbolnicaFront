'use client';
import { Typography, Box, Divider } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

export default function UniformNormsModel() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 1 }}>
        Модель единых норм
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        АО «КазНИИСА» представило проект модели единых норм для стран СНГ в области сейсмостойкого строительства. Презентация состоялась на III Международной научно-практической конференции в г. Бишкек.
      </Typography>

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Проект модели единых норм для стран СНГ в области сейсмостойкого строительства разработан в рамках деятельности Базовой организации государств — участников СНГ по сейсмостойкому строительству.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Ключевые направления исследований
      </Typography>
      <Divider sx={{ borderColor: AMBER, mb: 3 }} />

      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {[
          'Обработка и оцифровка архивных сейсмограмм землетрясений Центральной Азии',
          'Разработка региональных зависимостей между советскими шкалами и моментной магнитудой',
          'Консолидация каталогов землетрясений',
          'Разработка карт опасности для регионов Центральной Азии',
          'Гармонизация нормативных документов по сейсмостойкому строительству стран СНГ',
        ].map((item) => (
          <Box component="li" key={item} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{item}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        О разработке
      </Typography>
      <Divider sx={{ borderColor: AMBER, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        В рамках разработки модели единых норм проведена оценка действующих национальных нормативных документов стран СНГ. Следующим этапом является установление гармонизированных единых стандартов и национальных приложений к ним.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
        Единые нормы направлены на совершенствование сейсмостойкого строительства в странах СНГ и устранение существующих законодательных пробелов в области строительства на сейсмоопасных территориях.
      </Typography>
    </Box>
  );
}
