'use client';
import { Typography, Box, Link } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function UniformNormsModel() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        Бірыңғай нормалар моделі
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Қазақ құрылыс және сәулет ғылыми-зерттеу және жобалау институты (ҚазҚСҒЗИ) сейсмикаға
        төзімді құрылыста ТМД елдерінің бірыңғай нормалары моделінің жобасын ұсынды. Тұсаукесер
        Бішкекте сейсмикаға төзімді құрылыс бойынша III Халықаралық ғылыми-практикалық
        конференцияда өтті.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Жалпы қауіпсіздік мүддесі үшін бизнес-жоспардан тыс зерттеулер
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', mb: 1 }}>
        ҚР презентациясы
      </Typography>
      <Link
        href="https://kazniisa.kz/wp-content/uploads/2023/04/СП-РК-2.03-30-2017-Строительство-в-сейсмических-зонах-презентация.pptx"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-block',
          bgcolor: GRAY_BG,
          border: '1px solid ' + BORDER,
          borderRadius: '6px',
          px: 3,
          py: 1.75,
          mb: 4,
          color: BLUE,
          fontSize: '0.95rem',
          fontWeight: 600,
          textDecoration: 'none',
          '&:hover': { bgcolor: BLUE_LIGHT, borderColor: BLUE },
        }}
      >
        ҚР ЕЖ 2.03-30-2017 Сейсмикалық аймақтардағы құрылыс презентация
      </Link>

      <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', mb: 1 }}>
        ҚР презентациясы
      </Typography>
      <Link
        href="https://kazniisa.kz/wp-content/uploads/2023/04/Презентация_СН-КР-20-02-2018-Сейсмостойкое-строительство.pptx"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-block',
          bgcolor: GRAY_BG,
          border: '1px solid ' + BORDER,
          borderRadius: '6px',
          px: 3,
          py: 1.75,
          mb: 4,
          color: BLUE,
          fontSize: '0.95rem',
          fontWeight: 600,
          textDecoration: 'none',
          '&:hover': { bgcolor: BLUE_LIGHT, borderColor: BLUE },
        }}
      >
        ҚР ҚН 20-02-2018 «Сейсмикаға төзімді құрылыс» презентациясы
      </Link>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Қауіпсіздік торы және деректерді жинау
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Ерекше назар аударылды:
      </Typography>

      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {[
          'Орталық Азия елдерінің (Қазақстан, Қырғызстан, Тәжікстан) жер сілкіністерінің мұрағаттық акселерограммаларын өңдеу және цифрландыру',
          'кеңестік шкалалардың (MSK, Рихтер шкаласы) магнитудасы мен момент магнитудасына (Mw) тікелей аймақтық тәуелділігін дамыту',
          'жер сілкінісі каталогтарын біріктіруді орындау',
          'Орталық Азия елдерінің зерттелген өңірлерінде әзірленген тәуекел картасы түріндегі жұмыстың алдын ала қорытындылары',
        ].map((item) => (
          <Box component="li" key={item} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{item}</Typography>
          </Box>
        ))}
      </Box>

      <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.9, color: GRAY_TEXT, mb: 4, fontStyle: 'italic' }}>
        Барлық қатысушылар ТМД елдерінің сейсмикаға төзімді құрылысындағы бірыңғай нормалардың
        үлгілері Туна Онур мен оның командасы Орталық Азия елдерінің сейсмикалық қауіптілігін
        ықтималды бағалау бөлігінде жүргізіп жатқан жұмыстардың қисынды жалғасы екендігімен
        бірауыздан келісті.
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Оқиғалар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[
          {
            title: '1-НШІ ОТЫРЫС',
            date: 'Қараша 13, 2019',
            time: '09:00 - 19:00',
            venue: 'Алматы қаласы, Қажымұқан көшесі, 49 үй ("Shera Inn Hotel" қонақ үйі)',
          },
          {
            title: '2-НШІ ОТЫРЫС',
            date: 'Желтоқсан 25, 2020',
            time: '14:00 - 19:00',
            venue: '3 шағынауданы 44а Алматы қ.',
          },
        ].map((event) => (
          <Box
            key={event.title}
            sx={{
              bgcolor: GRAY_BG,
              border: '1px solid ' + BORDER,
              borderRadius: '8px',
              p: 3,
            }}
          >
            <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.05rem', mb: 1 }}>
              {event.title}
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: GRAY_TEXT, lineHeight: 1.8 }}>
              {event.date} · {event.time}
            </Typography>
            <Typography sx={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.8 }}>
              {event.venue}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
