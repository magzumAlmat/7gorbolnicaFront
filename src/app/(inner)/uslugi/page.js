'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CalculateIcon from '@mui/icons-material/Calculate';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import ArticleIcon from '@mui/icons-material/Article';
import ConstructionIcon from '@mui/icons-material/Construction';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const services = [
  {
    icon: <EngineeringIcon sx={{ fontSize: 36 }} />,
    title: 'Техническое обследование зданий',
    short: 'Диагностика конструктивной безопасности',
    color: '#0369A1',
    items: [
      'Визуальный и инструментальный осмотр конструкций',
      'Оценка технического состояния (категории: нормативное / ограниченно работоспособное / аварийное)',
      'Обследование после пожаров, стихийных бедствий и аварий',
      'Разработка заключений и рекомендаций по усилению',
      'Мониторинг деформаций и осадки оснований',
    ],
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 36 }} />,
    title: 'Проектные услуги',
    short: 'Типовые и индивидуальные проекты',
    color: '#0369A1',
    items: [
      'Разработка типовых проектов жилых и общественных зданий',
      'Индивидуальное проектирование объектов любой сложности',
      'Раздел «Конструктивные решения» и расчёты несущих систем',
      'Привязка типовых проектов к местным условиям строительства',
      'Авторский надзор за строительством',
    ],
  },
  {
    icon: <ViewInArIcon sx={{ fontSize: 36 }} />,
    title: 'BIM-консалтинг и внедрение',
    short: 'Цифровое моделирование зданий',
    color: '#7C3AED',
    items: [
      'Разработка BIM-моделей (Revit, Tekla, ArchiCAD)',
      'Формирование информационных требований заказчика (EIR)',
      'Разработка BIM-стандартов и регламентов для компании',
      'Обучение проектных команд работе в BIM-среде',
      'Интеграция BIM с системами управления строительством',
    ],
  },
  {
    icon: <CalculateIcon sx={{ fontSize: 36 }} />,
    title: 'Сметное дело',
    short: 'Стоимость строительства и экспертиза смет',
    color: '#059669',
    items: [
      'Составление сводных сметных расчётов по нормам РК',
      'Проверка и экспертиза проектно-сметной документации',
      'Расчёт укрупнённых нормативов цены строительства (УНЦС)',
      'Мониторинг стоимости строительных ресурсов',
      'Консультации по применению сметных нормативов',
    ],
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 36 }} />,
    title: 'Обучение и аттестация',
    short: 'Повышение квалификации специалистов',
    color: '#D97706',
    items: [
      'Курсы повышения квалификации для инженеров-строителей',
      'Семинары по применению новых строительных норм СП РК',
      'Подготовка к аттестации в сфере технического обследования',
      'Обучение методам расчёта конструкций по Еврокодам',
      'Корпоративное обучение по заказу строительных организаций',
    ],
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 36 }} />,
    title: 'Лабораторные услуги',
    short: 'Испытания строительных конструкций и материалов',
    color: '#0369A1',
    items: [
      'Испытания строительных конструкций на прочность и жёсткость',
      'Исследование физико-механических свойств строительных материалов',
      'Натурные испытания фрагментов зданий и узлов соединений',
      'Испытания на огнестойкость и сейсмостойкость',
      'Выдача протоколов испытаний установленного образца',
    ],
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 36 }} />,
    title: 'Разработка нормативных документов',
    short: 'СП РК, МГСН и национальные стандарты',
    color: '#0F172A',
    items: [
      'Разработка и актуализация Сводов правил РК (СП РК)',
      'Разработка межгосударственных строительных норм (МГСН)',
      'Адаптация международных стандартов (Еврокоды, ISO) для РК',
      'Разработка методических рекомендаций и руководящих документов',
      'Научно-техническое сопровождение нормотворческого процесса',
    ],
  },
  {
    icon: <ConstructionIcon sx={{ fontSize: 36 }} />,
    title: 'Специальные технические условия (СТУ)',
    short: 'Нестандартные и уникальные объекты',
    color: '#B91C1C',
    items: [
      'Разработка СТУ для уникальных и особо опасных зданий',
      'Разработка СТУ при отступлении от требований нормативных документов',
      'Научно-техническое обоснование применения нестандартных решений',
      'Экспертное сопровождение согласования СТУ в уполномоченных органах',
      'Разработка программ исследований для обоснования СТУ',
    ],
  },
];

export default function UslugiPage() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #0369A1 100%)',
          color: '#fff',
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <EngineeringIcon sx={{ fontSize: 40 }} />
          <Chip label={`${services.length} направлений`} sx={{ bgcolor: '#F59E0B', color: '#0F172A', fontWeight: 700 }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Услуги КазНИИСА
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 720 }}>
          Более 60 лет КазНИИСА оказывает полный комплекс научно-технических услуг в строительной
          отрасли Казахстана. От технического обследования до разработки национальных нормативов —
          мы сопровождаем каждый этап жизненного цикла объекта.
        </Typography>
      </Paper>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          { src: '/images/kazniisa/service-spec-tech.webp', alt: 'Специальные технические условия' },
          { src: '/images/kazniisa/service-bim-integration.webp', alt: 'BIM-интеграция' },
          { src: '/images/kazniisa/service-ai-tech.webp', alt: 'AI-технологии' },
          { src: '/images/kazniisa/service-certification.webp', alt: 'Сертификация' },
          { src: '/images/kazniisa/service-it-platform.webp', alt: 'IT-платформа' },
          { src: '/images/kazniisa/service-bim-audit.webp', alt: 'BIM-аудит' },
        ].map((img, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component="img"
              src={img.src}
              alt={img.alt}
              sx={{ width: '100%', maxWidth: 340, borderRadius: 1, display: 'block' }}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {services.map((svc, i) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={i}>
            <Paper
              elevation={1}
              sx={{
                borderRadius: 3,
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderTop: `3px solid ${svc.color}`,
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: 4 },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                <Box sx={{ color: svc.color }}>{svc.icon}</Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0F172A', lineHeight: 1.3 }}>
                    {svc.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: svc.color, fontWeight: 600 }}>
                    {svc.short}
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ mb: 1.5 }} />
              <List dense disablePadding sx={{ flex: 1 }}>
                {svc.items.map((item, j) => (
                  <ListItem key={j} disableGutters sx={{ alignItems: 'flex-start', py: 0.4 }}>
                    <ListItemIcon sx={{ minWidth: 22, mt: 0.4 }}>
                      <CheckCircleOutlineIcon sx={{ fontSize: 14, color: svc.color }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', fontSize: '0.8rem' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}

        {/* CTA */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ borderRadius: 3, p: 3, bgcolor: '#F0F9FF', border: '1px solid #BAE6FD' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1 }}>
              Заказать услугу
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Для получения коммерческого предложения или консультации свяжитесь с нами по телефону{' '}
              <strong>8 (727) 226 94 10</strong> или направьте заявку на электронную почту{' '}
              <a href="mailto:info@kazniisa.kz" style={{ color: '#0369A1', fontWeight: 600 }}>info@kazniisa.kz</a>.
              Наши специалисты ответят в течение одного рабочего дня.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
