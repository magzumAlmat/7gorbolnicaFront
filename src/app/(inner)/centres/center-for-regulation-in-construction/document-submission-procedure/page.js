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
    title: 'Прайс-лист',
    desc: 'С подписью, печатью и указанием периода действия (согласно форме заполнения ценовой информации).',
  },
  {
    num: '02',
    title: 'Сертификационные материалы',
    desc: 'Документы о соответствии (РК или ЕАЭС), декларации о соответствии, протоколы испытаний, техническая или нормативная документация согласно законодательству о техническом регулировании.',
  },
  {
    num: '03',
    title: 'Дилерское соглашение',
    desc: 'При наличии дилерских отношений с производителем.',
  },
  {
    num: '04',
    title: 'Каталог продукции',
    desc: 'С подробным описанием технических характеристик продукции (на государственном и/или русском языке).',
  },
  {
    num: '05',
    title: 'Сопроводительное письмо',
    desc: 'Официальное письмо в адрес АО «КазНИИСА» с указанием цели обращения.',
  },
  {
    num: '06',
    title: 'Реквизиты и контакты предприятия',
    desc: 'Полные юридические реквизиты, контактные данные ответственного лица.',
  },
];

export default function DocumentSubmissionPage() {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}
      >
        Порядок представления документов
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Для включения строительных материалов, изделий и конструкций в сметно-нормативную базу
        Республики Казахстан (КСР и СНБ РК) необходимо направить следующий пакет документов
        в АО «КазНИИСА».
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
          Документы принимаются от производителей и официальных дилеров строительных материалов,
          изделий и конструкций, зарегистрированных на территории Республики Казахстан и стран ЕАЭС.
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}
      >
        Перечень требуемых документов
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
          Контактная информация
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 3 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <EmailIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ color: '#CBD5E1', fontSize: '1rem' }}>
            crn@kazniisa.kz
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {['8 (7172) 57-53-03', '8 (7172) 57-53-13', '8 (7172) 57-53-16', '8 (7172) 57-53-19', '8 (7172) 57-53-21'].map(
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
          href="/centres/center-for-regulation-in-construction"
          style={{
            color: NAVY,
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            borderBottom: '2px solid ' + BLUE,
            paddingBottom: 1,
          }}
        >
          ← Вернуться к Центру нормирования
        </Link>
      </Box>
    </Box>
  );
}
