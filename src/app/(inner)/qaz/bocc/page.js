'use client';
import { Typography, Box } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';

export default function BoccPage() {
  return (
    <Box>
      <Box
        component="img"
        src="/images/kazniisa/logo.webp"
        alt="ҚазҚСҒЗИ"
        sx={{ height: 56, objectFit: 'contain', mb: 2, display: 'block' }}
      />
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 0 }}>
        СҚБҰ
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        ТМД сейсмикаға төзімді құрылыс саласында базалық ұйым құру шығындарды оңтайландыру
        қадамдарының бірі болды. Базалық ұйым эксперименттік және ғылыми зерттеулер жүргізуге
        мүмкіндік береді, оның нәтижелерін ТМД-ның барлық елдері пайдалана алады.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Эксперименттік зерттеулер өте қымбат, ал базалық ұйымның арқасында біз басқа
          мемлекеттердің сынақ базалары мен ғылыми зерттеулерінің нәтижелерін пайдалана аламыз,
          осылайша сапалы үйлер салу кезінде мемлекеттік ақшаны үнемдей аламыз.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Біздің мансабымыз
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Біздің танымал оқу бағдарламалары сізге мүмкіндік береді:
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0 }}>
        {[
          'Сейсмикаға төзімді құрылысты дамыту саласындағы бірыңғай тәсіл',
          'Күрделі инженерлік-геологиялық жағдайларда әртүрлі конструктивтік шешімдердің тұрақтылығына талдау жүргізу',
          'Сапаны жоғалтпай шығындарды азайтыңыз',
          'Аз уақыт ішінде көбірек үлгеру үшін уақытыңызды басқарыңыз',
          'Тиімді ынтымақтастық пен тәжірибе алмасуға арналған бірыңғай платформа',
        ].map((f, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{f}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
