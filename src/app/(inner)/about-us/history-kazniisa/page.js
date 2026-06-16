'use client';
import { Typography, Box, Divider } from '@mui/material';
import ImageLightbox, { useImageLightbox } from '../../../../components/ImageLightbox';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const timeline = [
  {
    date: '7 сентября 1931',
    text: 'Постановление №46 СНК КАССР об организации НИИСМиС — Научно-исследовательского института строительных материалов и строительства. Первый технический научный институт в Казахстане.',
  },
  {
    date: '1957',
    text: 'Институт вошёл в состав Казахского филиала Академии строительства и архитектуры СССР.',
  },
  {
    date: '1964',
    text: 'После ликвидации АСиА СССР институт передан Казпромстройпроекту. Академик Т.Ж. Жунусов возглавил научное направление.',
  },
  {
    date: 'Январь 1990',
    text: 'На базе КазпромстройНИИпроекта создан КазНИИССА. Первым директором назначен профессор Толеубай Жунусович Жунусов.',
  },
  {
    date: '23 февраля 1990',
    text: 'Институту присвоен статус головной государственной научной организации по строительному комплексу Республики Казахстан.',
  },
  {
    date: '30 июля 2012',
    text: 'Постановлением Правительства РК №922 республиканское государственное предприятие преобразовано в акционерное общество «КазНИИСА» со 100% участием государства.',
  },
];

const spheres = [
  'BIM-технологии и информационное моделирование зданий',
  'Мониторинг и техническое обследование зданий и сооружений',
  'Сейсмические исследования и сейсмозащита',
  'Обучение и повышение квалификации специалистов',
  'Лабораторные услуги и испытания строительных материалов',
  'Проектные работы любой сложности',
  'Экспертные и консультационные услуги',
  'Научно-исследовательские и опытно-конструкторские работы',
  'Разработка специальных технических условий',
];

export default function HistoryPage() {
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  return (
    <Box>
      <ImageLightbox {...lightbox} onClose={closeLightbox} />

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        История КазНИИСА
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <Box
          component="img"
          src="/images/kazniisa/history-left.png"
          alt="История КазНИИСА — левый"
          onClick={() => openLightbox('/images/kazniisa/history-left.png', 'История КазНИИСА — левый')}
          sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, flexShrink: 0, cursor: 'zoom-in' }}
        />
        <Box
          component="img"
          src="/images/kazniisa/history-kazniisa.webp"
          alt="История КазНИИСА"
          onClick={() => openLightbox('/images/kazniisa/history-kazniisa.webp', 'История КазНИИСА')}
          sx={{ flex: 1, minWidth: 200, maxWidth: '100%', width: '100%', borderRadius: 2, objectFit: 'cover', maxHeight: 320, cursor: 'zoom-in' }}
        />
        <Box
          component="img"
          src="/images/kazniisa/history-right.png"
          alt="История КазНИИСА — правый"
          onClick={() => openLightbox('/images/kazniisa/history-right.png', 'История КазНИИСА — правый')}
          sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, flexShrink: 0, cursor: 'zoom-in' }}
        />
      </Box>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 5 }}>
        АО «КазНИИСА» — старейшая техническая научная организация Казахстана в области строительства.
        За более чем 90 лет своей истории институт прошёл путь от небольшого исследовательского
        учреждения до ведущего национального центра строительной науки, нормирования и проектирования.
      </Typography>

      {/* Timeline */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Хронология
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ position: 'relative', pl: 4, mb: 6 }}>
        <Box
          sx={{
            position: 'absolute',
            left: 7,
            top: 8,
            bottom: 8,
            width: 3,
            bgcolor: `${BLUE}40`,
            borderRadius: 2,
          }}
        />
        {timeline.map((item, i) => (
          <Box key={i} sx={{ position: 'relative', mb: 4 }}>
            <Box
              sx={{
                position: 'absolute',
                left: -25,
                top: 6,
                width: 14,
                height: 14,
                borderRadius: '50%',
                bgcolor: i === timeline.length - 1 ? BLUE : NAVY,
                border: '3px solid #fff',
                boxShadow: `0 0 0 2px ${i === timeline.length - 1 ? BLUE : NAVY}`,
              }}
            />
            <Typography
              sx={{
                fontWeight: 700,
                color: BLUE,
                fontSize: '0.9rem',
                mb: 0.5,
              }}
            >
              {item.date}
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        component="img"
        src="/images/kazniisa/history-full.webp"
        alt="Полная история КазНИИСА"
        onClick={() => openLightbox('/images/kazniisa/history-full.webp', 'Полная история КазНИИСА')}
        sx={{ width: '100%', borderRadius: 2, mb: 5, objectFit: 'cover', maxHeight: 400, cursor: 'zoom-in' }}
      />

      <Divider sx={{ mb: 5 }} />

      {/* Spheres */}
      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#fff',
            mb: 1,
          }}
        >
          Сфера деятельности
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 3 }} />
        {spheres.map((s, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: BLUE,
                mt: '10px',
                flexShrink: 0,
              }}
            />
            <Typography sx={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.9 }}>
              {s}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
