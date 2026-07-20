'use client';
import { Typography, Box, Grid, Divider, Chip } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import ComputerIcon from '@mui/icons-material/Computer';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SensorsIcon from '@mui/icons-material/Sensors';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const directions = [
  {
    icon: ComputerIcon,
    title: 'Цифровизация (ТИМСО/BIM)',
    text: 'Разработка и внедрение стандартов, аудит, внедрение и сопровождение BIM-проектов, участие в инициативах openBIM и buildingSMART.',
  },
  {
    icon: ScienceIcon,
    title: 'Научные исследования',
    text: 'Прикладные и фундаментальные НИР, аналитика и автоматизация, издание журнала по Цифровому строительству, научные исследования и публикации.',
  },
  {
    icon: EngineeringIcon,
    title: 'Техническая экспертиза',
    text: 'Обследование зданий и сооружений, расчёты конструкций, разработка специальных технических условий и рекомендаций по усилению и восстановлению.',
  },
  {
    icon: SensorsIcon,
    title: 'Инженерно-сейсмометрическая служба',
    text: 'Инструментальный мониторинг, анализ сейсмоданных, подготовка отчётов по сейсмобезопасности.',
  },
  {
    icon: StorageIcon,
    title: 'Информационные системы',
    text: 'Сопровождение отраслевых ИТ-платформ (в том числе e-qurylys).',
  },
  {
    icon: SchoolIcon,
    title: 'Обучение и коммуникации',
    text: 'Международные курсы и тренинги по цифровому строительству, программы сертификации (включая buildingSMART Foundation), PR-сопровождение, сотрудничество с вузами, госорганами и бизнесом.',
  },
];

const services = [
  'Разработка специальных технических условий',
  'Оценка готовности организации к внедрению ТИМСО',
  'Научно-техническое сопровождение',
  'Обучение и сертификация',
  'Сопровождение отраслевых ИТ-проектов',
  'Аудит BIM-проектов',
];

const advantages = [
  { title: 'Международная экспертиза', text: 'членство в buildingSMART International и разработка национальных BIM-стандартов.' },
  { title: 'Интеграция с нормативной системой РК', text: 'участие в актуализации АГСК-1 и разработке СТУ.' },
  { title: 'Команда профессионалов', text: 'кандидаты наук, аттестованные эксперты, сертифицированные BIM-менеджеры.' },
];

export default function InformationModelingCenterPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Центр науки и цифровизации строительства
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Центр науки и цифровизации строительства — это новое подразделение АО «КазНИИСА», которое
        объединяет экспертизу в области научных исследований, нормативно-технического регулирования
        и цифровых технологий. Центр сопровождает проекты на всех стадиях жизненного цикла объектов:
        от фундаментальной науки и разработки стандартов до внедрения информационного моделирования
        (ТИМСО/BIM) и управления данными.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, border: '1px solid ' + BORDER, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 2.5, mb: 3 }}>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.05em', mb: 0.5 }}>
          Руководитель
        </Typography>
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>
          Косым Ансатбаев
        </Typography>
        <Typography sx={{ color: GRAY_TEXT, fontSize: '0.85rem', mt: 0.5 }}>
          Заместитель директора — Центр информационного моделирования
        </Typography>
      </Box>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5 }}>
        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
          Внедрение ТИМСО осуществляется в рамках «Плана мероприятий по внедрению технологии
          информационного моделирования в строительную отрасль Республики Казахстан», утверждённого
          приказом Министра индустрии и инфраструктурного развития Республики Казахстан от 11.04.2017 г.
          №197 (внесены дополнения приказом №139 от 27.02.2018 года).
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Основные направления деятельности центра
      </Typography>

      <Grid container spacing={2} sx={{ mb: 5 }}>
        {directions.map((d, i) => {
          const Icon = d.icon;
          return (
            <Grid item xs={12} sm={6} key={i}>
              <Box sx={{ p: 2.5, border: '1px solid ' + BORDER, borderRadius: '6px', height: '100%', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Icon sx={{ color: BLUE, fontSize: 20 }} />
                  <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{d.title}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: GRAY_TEXT }}>{d.text}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Компетенции и услуги центра
      </Typography>
      <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 5 }}>
        {services.map((s, i) => (
          <Chip
            key={i}
            label={s}
            sx={{ bgcolor: BLUE_LIGHT, color: NAVY, fontWeight: 600, fontSize: '0.82rem', px: 1, py: 2.2, borderRadius: '6px' }}
          />
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Преимущества центра
      </Typography>
      {advantages.map((a, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
          <VerifiedIcon sx={{ color: BLUE, fontSize: 18, mt: '3px', flexShrink: 0 }} />
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
            <strong>{a.title}</strong> — {a.text}
          </Typography>
        </Box>
      ))}

      <Divider sx={{ my: 4 }} />

      <Box sx={{ bgcolor: BLUE_LIGHT, border: '1px solid ' + BORDER, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: BLUE, textTransform: 'uppercase', letterSpacing: '0.05em', mb: 1 }}>
          Наша миссия
        </Typography>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, color: NAVY, fontStyle: 'italic' }}>
          «Способствовать цифровизации объектов промышленного и гражданского назначения, чтобы
          сократить риски при реализации проектов»
        </Typography>
      </Box>

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Контакты центра</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Email: cim@kazniisa.kz</Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>Тел.: 8 (727) 226 94 10 (вн. 118)</Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>3 микрорайон, 44А, г. Алматы</Typography>
      </Box>

      <Link href="/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
        ← Все центры
      </Link>
    </Box>
  );
}
