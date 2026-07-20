'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const services = [
  'баға белгілеу және сметалар бойынша нормативтік құжаттарды әзірлеу;',
  'құрылыс-монтаждау, жөндеу-құрылыс жұмыстарына сметалық нормаларды қалыптастыру;',
  'құрылыс-монтаждау жұмыстарына технологиялық карталарды дайындау;',
  'құрылыс материалдарына, бұйымдар мен конструкцияларына және инженерлік жабдықтарға сметалық бағалар жинағын әзірлеу;',
  'құрылыс машиналарын салу және пайдалану үшін жүктерді тасымалдауға арналған сметалық бағалар жинағын қалыптастыру;',
  'сметалық баға белгілеу бойынша әдістемелік құжаттарды әзірлеу;',
  'ведомстволық (салалық) сметалық нормативтерді әзірлеу;',
  'жеке сметалық нормативтік құжаттарды дайындау',
  'Қазақстан Республикасының құрылыс саласын техникалық реттеу жүйесін реформалауды іске асыруға және құрылыстың нормативтік базасын одан әрі жетілдіруге бағытталған сәулет, қала құрылысы және құрылыс саласындағы нормативтік – құқықтық және нормативтік-техникалық құжаттарды әзірлеу және қайта өңдеу;',
  'құрылыс саласындағы техникалық нормалауды дамытудың негізгі бағыттарын талдауды орындау;',
  '«ҚазҚСҒЗИ» АҚ құзыретіне кіретін сәулет, қала құрылысы және құрылыс қызметінің проблемалық мәселелері бойынша ұсыныстар дайындау;',
  'еуропалық стандарттарға сәйкес келетін объектілерді (Еурокодтарды) жобалау мен салудың еуропалық нормаларын енгізуді техникалық қамтамасыз ету және сүйемелдеу;',
  'құрылыс саласындағы техникалық реттеу мәселелерінде құрылыс және тұрғын үй-коммуналдық шаруашылық істері жөніндегі уәкілетті мемлекеттік органның құрылымдық бөлімшелерімен өзара іс-қимыл жасау.',
];

export default function RegulationCenterPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Құрылыстағы нормалау орталығы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Құрылыс және тұрғын үй-коммуналдық шаруашылық істері комитетінің «Қазақ құрылыс және сәулет ғылыми-зерттеу институты»
        акционерлік қоғамы Астана филиалының Құрылыстағы нормалау орталығы 2011 жылы құрылған және «ҚазҚСҒЗИ» АҚ құрылымдық
        бөлімшесі болып табылады.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Құрылыстағы нормалау орталығы нормативтік техникалық құжаттарды, құрылыста, энергетикада және тұрғын
        үй-коммуналдық шаруашылықта сметалық баға белгілеу бойынша жинақтарды әзірлеуді жүргізеді, сондай-ақ
        құрылыс саласының нормативтік базасын реформалаумен, оның ішінде инновациялық зерттеулерді практикалық
        қолдануға енгізумен айналысады.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5, fontStyle: 'italic' }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Астана қ., Бейбітшілік к-сі 14, 1510-кеңсе, «MARDEN» БО. Тел.: 8 (7172) 57-53-24, 57-53-25.
          Email: smeta@kazniisa.kz.
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Орталықтың қызметтері
      </Typography>
      {services.map((s, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: BLUE, minWidth: 24, mt: 0.2 }}>
            {String(i + 1).padStart(2, '0')}
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>{s}</Typography>
        </Box>
      ))}

      <Divider sx={{ my: 5 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Құрылыс материалдары бағасының динамикасы</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.8 }}>
          Баға мониторингіне қатысатын өндірушілер мен жеткізушілердің тізбесі.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Link href="/qaz/centres/center-for-regulation-in-construction/document-submission-procedure" style={{ color: BLUE, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BLUE, paddingBottom: 1 }}>
          Порядок представления документов в КСР и СНБ РК →
        </Link>
        <Link href="/qaz/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
          ← Орталықтар
        </Link>
      </Box>
    </Box>
  );
}
