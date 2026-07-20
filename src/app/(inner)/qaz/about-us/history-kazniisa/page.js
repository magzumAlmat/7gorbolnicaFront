'use client';
import { Typography, Box, Divider } from '@mui/material';
import ImageLightbox, { useImageLightbox } from '../../../../../components/ImageLightbox';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const timeline = [
  {
    date: '1931',
    text: 'Құрылыс материалдары және ғимараттарды ғылыми-зерттеу институты құрылды (ҚМжҒҒЗИ).',
  },
  {
    date: '1957',
    text: 'КСРО ҚжСА филиалының құрамына енді.',
  },
  {
    date: '1964',
    text: 'КСРО Мемқұрылыс Қазпромқұрылысжобаға берілді.',
  },
  {
    date: '1990',
    text: 'Қазақ сейсмикаға төзімді құрылыс және сәулет ғылыми-зерттеу және жобалау институты (ҚазҚСҒЗИ) болып қайта құрылды.',
  },
  {
    date: '2012',
    text: 'Мемлекет жүз пайыз қатысатын «ҚазҚСҒЗИ» АҚ болды.',
  },
];

const spheres = [
  'заманауи ақпараттық технологияларды зерттеу және құрылысқа енгізу, сондай-ақ BIM-технологияларын пайдалана отырып жобалау',
  'құрылыстағы баға белгілеу саласындағы мониторинг, құрылыстағы индивидуалды сметалық нормалар мен технологиялық карталарды әзірлеу',
  'сейсмикаға төзімді құрылыс саласында отандық және шетелдік ұйымдармен ғылыми-техникалық ынтымақтастық',
  'құрылыс саласының мамандарын оқыту және біліктілігін арттыру',
  'құрылыс-зертханалық қызметтерді көрсету',
  'ғимараттарды, құрылыстарды және кез келген күрделілік деңгейіндегі объектілерді жобалау',
  'ғимараттар мен құрылыстарды техникалық тексеру бойынша сараптамалық жұмыстар',
  'ғылыми зерттеулер, тәжірибелік-эксперименталдық, технологиялық және жобалау жұмыстарын жүргізу',
  'арнайы техникалық шарттар әзірлеу',
];

export default function HistoryPageQaz() {
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  return (
    <Box>
      <ImageLightbox {...lightbox} onClose={closeLightbox} />

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        ҚазҚСҒЗИ тарихы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <Box
          component="img"
          src="/images/kazniisa/history-left.png"
          alt="ҚазҚСҒЗИ тарихы — сол жақ"
          onClick={() => openLightbox('/images/kazniisa/history-left.png', 'ҚазҚСҒЗИ тарихы — сол жақ')}
          sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, flexShrink: 0, cursor: 'zoom-in' }}
        />
        <Box
          component="img"
          src="/images/kazniisa/history-kazniisa.webp"
          alt="ҚазҚСҒЗИ тарихы"
          onClick={() => openLightbox('/images/kazniisa/history-kazniisa.webp', 'ҚазҚСҒЗИ тарихы')}
          sx={{ flex: 1, minWidth: 200, maxWidth: '100%', width: '100%', borderRadius: 2, objectFit: 'cover', maxHeight: 320, cursor: 'zoom-in' }}
        />
        <Box
          component="img"
          src="/images/kazniisa/history-right.png"
          alt="ҚазҚСҒЗИ тарихы — оң жақ"
          onClick={() => openLightbox('/images/kazniisa/history-right.png', 'ҚазҚСҒЗИ тарихы — оң жақ')}
          sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1, flexShrink: 0, cursor: 'zoom-in' }}
        />
      </Box>

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
        alt="ҚазҚСҒЗИ толық тарихы"
        onClick={() => openLightbox('/images/kazniisa/history-full.webp', 'ҚазҚСҒЗИ толық тарихы')}
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
          «ҚазҚСҒЗИ» АҚ қызмет саласы
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
