'use client';
import { Typography, Box, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const DOCUMENTS = [
  {
    num: '01',
    title: 'Баға прейскуранты',
    desc: 'Прайс-лист с подписью, печатью и указанием периода действия, с учетом доставки до регионов (согласно форме заполнения ценовой информации);',
  },
  {
    num: '02',
    title: 'Сәйкестік сертификаты',
    desc: 'Сертификат соответствия (РК или ЕАЭС), декларация о соответствии, протоколы испытаний, техническая или нормативная документация, согласно законодательству о техническом регулировании в Республике Казахстан.',
  },
  {
    num: '03',
    title: 'Каталог',
    desc: 'Өнімнің техникалық сипаттамаларын егжей-тегжейлі сипаттайтын каталог (мемлекеттік және/немесе орыс тілінде).',
  },
  {
    num: '04',
    title: 'Қоса берілетін хат',
    desc: 'Сопроводительное письмо в Акционерное общество «Казахский научно-исследовательский и проектный институт строительства и архитектуры»;',
  },
  {
    num: '05',
    title: 'Реквизиттер',
    desc: 'Кәсіпорынның реквизиттері мен байланыс деректері.',
  },
];

export default function DocumentSubmissionPage() {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Порядок представления документов в КСР и СНБ РК
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Комитет по делам строительства и жилищно-коммунального хозяйства Министерства промышленности и строительства
        Республики Казахстан сообщает, что во исполнение предписания Агентства по защите и развитию конкуренции
        Республики Казахстан от 31 июля 2025 года «Об исключении наименований торговых марок и брендов из
        сметно-нормативной базы» в настоящее время проводятся работы по инвентаризации номенклатуры строительных
        материалов, изделий, оборудования, в том числе включенных в АГСК-3 (Архитектурный, градостроительный и
        строительный каталог) «Перечень строительных конструкций, изделий и строительных материалов».
      </Typography>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          mb: 4,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Құрылыс материалдары, бұйымдары, конструкциялары және инженерлік жабдықтар бойынша бағалық және техникалық
          ақпарат өндірушіден (жеткізушіден) «Қазақ құрылыс және сәулет ғылыми-зерттеу және жобалау институты»
          акционерлік қоғамына жолданады.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Link
          href="https://docs.google.com/spreadsheets/d/1H2TrbA5XkzRDWVqBwpUBSg7dXePCu3op/edit?usp=drive_link&ouid=108381839499248604918&rtpof=true&sd=true"
          target="_blank"
          style={{
            color: BLUE,
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
            borderBottom: '2px solid ' + BLUE,
            paddingBottom: 1,
          }}
        >
          Баға ақпаратын толтыру нысаны
        </Link>
      </Box>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}
      >
        Перечень документов для включения строительных материалов, изделий, конструкций и инженерного оборудования
        в классификатор строительных ресурсов и сметно-нормативную базу Республики Казахстан
      </Typography>

      {DOCUMENTS.map((doc, i) => (
        <Box key={i} sx={{ display: 'flex', gap: { xs: 2, md: 3 }, mb: 3, alignItems: 'flex-start' }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: '1.5rem',
              color: BLUE,
              lineHeight: 1,
              minWidth: 36,
              flexShrink: 0,
            }}
          >
            {doc.num}
          </Typography>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', mb: 0.5 }}>
              {doc.title}
            </Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              {doc.desc}
            </Typography>
          </Box>
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 2 }}>
          Центр нормирования в строительстве АО «КазНИИСА»
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 3 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <EmailIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ color: '#CBD5E1', fontSize: '1rem' }}>
            info@kazniisa.kz
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {['8 (7172) 57-53-13', '8 (7172) 57-53-16', '8 (7172) 57-53-19', '8 (7172) 57-53-21', '8 (7172) 57-53-03'].map(
            (phone, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ color: BLUE, fontSize: 20 }} />
                <Typography sx={{ color: '#CBD5E1', fontSize: '1rem' }}>{phone}</Typography>
              </Box>
            )
          )}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Link
          href="/qaz/centres/center-for-regulation-in-construction"
          style={{
            color: NAVY,
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            borderBottom: '2px solid ' + BLUE,
            paddingBottom: 1,
          }}
        >
          ← Құрылыстағы нормалау орталығы
        </Link>
      </Box>
    </Box>
  );
}
