'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportIcon from '@mui/icons-material/Report';
import GavelIcon from '@mui/icons-material/Gavel';

const principles = [
  'Нулевая терпимость к коррупционным проявлениям в любой форме',
  'Прозрачность при принятии управленческих и финансовых решений',
  'Соблюдение законодательства Республики Казахстан о противодействии коррупции',
  'Конфиденциальность обращений и защита лиц, сообщивших о нарушениях',
  'Независимость и беспристрастность при рассмотрении жалоб и обращений',
  'Регулярное обучение сотрудников антикоррупционным стандартам',
  'Проведение внутреннего мониторинга и аудита рисков коррупции',
];

const reportWays = [
  {
    icon: <PhoneIcon />,
    title: 'Телефон доверия',
    value: '8 (727) 226 94 10',
    desc: 'Работает в рабочее время. Анонимность гарантирована.',
  },
  {
    icon: <EmailIcon />,
    title: 'Электронная почта',
    value: 'anticorr@kazniisa.kz',
    desc: 'Обращения принимаются круглосуточно. Ответ — в течение 10 рабочих дней.',
  },
  {
    icon: <DescriptionIcon />,
    title: 'Письменное обращение',
    value: '3 микрорайон, 44А, Алматы',
    desc: 'Направьте письмо на имя руководителя в конверте с пометкой «Антикоррупция».',
  },
];

const docs = [
  'Кодекс корпоративной этики КазНИИСА',
  'Антикоррупционная политика института',
  'Положение о конфликте интересов',
  'Правила внутреннего трудового распорядка (раздел «Этика»)',
  'Порядок рассмотрения обращений о коррупционных правонарушениях',
];

export default function AntiCorruptionPage() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1e3a5f 100%)',
          color: '#fff',
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <ShieldIcon sx={{ fontSize: 40, color: '#F59E0B' }} />
          <Chip label="Противодействие коррупции" sx={{ bgcolor: '#F59E0B', color: '#0F172A', fontWeight: 700 }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Антикоррупционная политика
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 720 }}>
          КазНИИСА реализует комплексную политику противодействия коррупции в соответствии
          с Законом Республики Казахстан «О противодействии коррупции» от 18 ноября 2015 года № 410-V.
          Институт придерживается принципов честности, прозрачности и неотвратимости ответственности.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {/* Principles */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ borderRadius: 3, p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <GavelIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Принципы антикоррупционной политики
              </Typography>
            </Box>
            <List dense disablePadding>
              {principles.map((item, i) => (
                <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start' }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#0369A1', fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Reporting channels */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ borderRadius: 3, p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <ReportIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Сообщить о нарушении
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Если вы стали свидетелем коррупционного правонарушения или столкнулись
              с требованием взятки — сообщите об этом любым удобным способом. Анонимность
              заявителя гарантируется.
            </Typography>
            <Grid container spacing={2}>
              {reportWays.map((way, i) => (
                <Grid item xs={12} key={i}>
                  <Box
                    sx={{
                      display: 'flex', gap: 2, p: 2, borderRadius: 2,
                      bgcolor: '#F8FAFC', border: '1px solid #E2E8F0',
                    }}
                  >
                    <Box sx={{ color: '#0369A1', mt: 0.3 }}>{way.icon}</Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                        {way.title}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                        {way.value}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {way.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Ethics code */}
        <Grid item xs={12} md={5}>
          <Paper elevation={1} sx={{ borderRadius: 3, p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <DescriptionIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Нормативные документы
              </Typography>
            </Box>
            <List dense disablePadding>
              {docs.map((doc, i) => (
                <Box key={i}>
                  <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <DescriptionIcon sx={{ color: '#F59E0B', fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={doc}
                      primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                    />
                  </ListItem>
                  {i < docs.length - 1 && <Divider />}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Code of ethics summary */}
        <Grid item xs={12} md={7}>
          <Paper elevation={0} sx={{ borderRadius: 3, p: 3, bgcolor: '#FFFBEB', border: '1px solid #FDE68A', height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 1.5 }}>
              Кодекс корпоративной этики
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Кодекс корпоративной этики КазНИИСА устанавливает единые стандарты поведения
              для всех сотрудников института. Он определяет ценности, которыми руководствуются
              работники в профессиональной деятельности, и закрепляет механизмы предотвращения
              конфликта интересов.
            </Typography>
            <Grid container spacing={1.5}>
              {[
                { label: 'Честность', desc: 'Правдивость в профессиональной деятельности и отчётности' },
                { label: 'Уважение', desc: 'Корректное отношение к коллегам, партнёрам и заказчикам' },
                { label: 'Ответственность', desc: 'Соблюдение обязательств перед государством и обществом' },
                { label: 'Профессионализм', desc: 'Высокое качество работы и непрерывное развитие' },
              ].map((val, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box sx={{ p: 1.5, bgcolor: '#fff', borderRadius: 1.5, border: '1px solid #FDE68A' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#92400E' }}>{val.label}</Typography>
                    <Typography variant="caption" color="text.secondary">{val.desc}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
