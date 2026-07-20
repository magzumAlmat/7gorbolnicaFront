'use client';
import { Typography, Box, Link } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';
const TEXT = '#334155';

const sessions = [
  {
    title: 'Комиссияның бірінші отырысы',
    subtitle: 'Алматы қ., 15-16 тамыз 2018 ж.',
    items: [
      { text: 'Комиссия отырысының күн тәртібі', href: 'https://drive.google.com/open?id=1YpKXqkmb5D4AtuPcub31IQJCGkJuE1ir' },
      { text: 'Комиссия отырысының қарары', href: 'https://drive.google.com/open?id=1gFsNTCDz4n-etHFCN8ZzpC3i6oUPwAGM' },
      { text: 'Комиссия отырысын өткізу туралы есеп', href: null },
    ],
    materialsTitle: 'Комиссияның бірінші отырысының материалдары',
    materials: [
      { text: 'П. А. Миронов ТМД құрылыс саласындағы бірыңғай терминологиялық сөздік', href: 'https://drive.google.com/open?id=1MPPjRxiSOf2QV_uy00k4RYgpxnDd48cx' },
      { text: 'В. А. Волкодав Ақпараттық модельдерге автоматтандырылған тексерулер жүргізу тәжірибесі', href: 'https://drive.google.com/open?id=1aBkVY8usaiUcyepsw_zpeqJDQHjrGr15' },
      { text: 'А. А. Сидорин Ресей Федерациясындағы ақпараттық модельдеу саласындағы ҒТҚ жүйесі туралы ақпарат', href: 'https://drive.google.com/open?id=1TsdzDmRbp-biCpfy3ZJY1hPP0JUWVPM0' },
      { text: 'Е. О. Бурова БР ақпараттық модельдеу саласындағы ҒТҚ жүйесі туралы ақпарат', href: 'https://drive.google.com/open?id=1ACyULCy9memaX5cN9nCuO3Xg0AkPND8Q' },
      { text: 'Д. Ж. Тоқтыбаев ҚР ақпараттық модельдеу саласындағы ҒТҚ жүйесі туралы ақпарат', href: 'https://drive.google.com/open?id=1txaDeDUhO54xbrPGHGpTqT2TWYZBX3fr' },
      { text: 'К. Г. Бадашвили Құрылыстағы бірыңғай жіктеу және кодтау жүйесі', href: 'https://drive.google.com/open?id=1sfyqJjMrWh1RbRGE8Dm4cmjmvTYRO5Dm' },
    ],
  },
  {
    title: 'Комиссияның кеңейтілген отырысы',
    subtitle: 'Мәскеу қ., 16 қазан 2018 ж.',
    items: [
      { text: 'Комиссияның кеңейтілген отырысының қарары', href: null },
      { text: 'Комиссияның кеңейтілген отырысын өткізу туралы есеп', href: null },
    ],
  },
  {
    title: 'Комиссияның үшінші отырысы',
    subtitle: 'Мәскеу қ., 12 наурыз 2019 ж.',
    items: [
      { text: 'Комиссияның үшінші отырысының қарары', href: null },
      { text: 'Комиссияның үшінші отырысын өткізу туралы есеп', href: null },
    ],
  },
  {
    title: 'Комиссияның төртінші отырысы',
    subtitle: 'Минск қ. 16 мамыр 2019 ж.',
    items: [
      { text: 'Комиссияның төртінші отырысының қарары', href: null },
    ],
  },
];

function BulletItem({ text, href }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
      <Box sx={{ mt: '10px', width: 8, height: 8, borderRadius: 0, bgcolor: BLUE, flexShrink: 0 }} />
      {href ? (
        <Box
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, fontSize: '1rem', lineHeight: 1.9, color: TEXT, textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: BLUE } }}
        >
          {text}
        </Box>
      ) : (
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>{text}</Typography>
      )}
    </Box>
  );
}

function SessionBlock({ session }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem' }}>
        {session.title}
      </Typography>
      <Typography sx={{ fontSize: '0.9rem', color: GRAY_TEXT, mb: 2 }}>{session.subtitle}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: session.materials ? 3 : 0 }}>
        {session.items.map((it, i) => (
          <BulletItem key={i} text={it.text} href={it.href} />
        ))}
      </Box>
      {session.materials && (
        <>
          <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 2 }}>
            {session.materialsTitle}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {session.materials.map((it, i) => (
              <BulletItem key={i} text={it.text} href={it.href} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default function InternationalCooperationPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ fontWeight: 800, color: NAVY, mb: 1 }}
      >
        Халықаралық ынтымақтастық
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Үкіметаралық қатынастарды нығайту және интеграциялық процестерге байланысты
        мәселелерді шешу шеңберінде ТМД Экономикалық кеңесінің шешімімен техникалық реттеу
        саласында келісілген саясат жүргізу және құрылыс саласында бірыңғай нормативтік база
        құру мақсатында ТМД-ға қатысушы мемлекеттердің базалық ұйымы құрылды.
      </Typography>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          fontStyle: 'italic',
          mb: 4,
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT }}>
          «ТМД-ға мүше мемлекеттердің негізгі ұйымы.»
        </Typography>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Құрылыстағы ақпараттық модельдеу технологиясы саласындағы нормативтік-техникалық
        базаны дамыту жөніндегі комиссия
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        ТМД-ға қатысушы мемлекеттерде ақпараттық модельдеу саласындағы нормативтік-техникалық
        базаны дамыту саласында келісілген мемлекетаралық саясатты әзірлеу үшін жағдайларды
        қамтамасыз ету мақсатында ТМД-ға қатысушы мемлекеттердің құрылыс кешеніндегі
        техникалық реттеу мәселелері жөніндегі базалық ұйымының үшінші отырысында 2018 жылғы
        8 маусымда Душанбе қаласында нормативтік-техникалық базаны дамыту жөніндегі кіші
        комиссия құру туралы шешім қабылданды.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 3 }}>
        Деректерді аралас салалармен интеграциялау жөніндегі Кіші комиссияның міндеттерін
        кеңейтуге, мемлекетаралық деңгейде шешімдер қабылдау үшін сараптамалық негіз
        қалыптастыру қажеттілігіне байланысты Кіші комиссияны құрылыстағы ақпараттық модельдеу
        технологиясы саласындағы нормативтік-техникалық базаны дамыту жөніндегі комиссияға
        айналдыру туралы шешім қабылданды.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: TEXT, mb: 5 }}>
        2018 жылғы 15-16 тамызда ТМД-ға қатысушы мемлекеттердің құрылыс саласында ақпараттық
        модельдеу технологиясын қолданудың әдіснамалық аспектілері бойынша Кіші комиссияның
        кеңесі өтті.
      </Typography>

      {sessions.map((session, i) => (
        <SessionBlock key={i} session={session} />
      ))}
    </Box>
  );
}
