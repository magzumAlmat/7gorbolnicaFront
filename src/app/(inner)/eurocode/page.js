'use client';
import { Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const eurocodes = [
  { code: 'EN 1990', title: 'Основы проектирования конструкций' },
  { code: 'EN 1991', title: 'Воздействия на конструкции' },
  { code: 'EN 1992', title: 'Проектирование железобетонных конструкций' },
  { code: 'EN 1993', title: 'Проектирование стальных конструкций' },
  { code: 'EN 1994', title: 'Проектирование сталежелезобетонных конструкций' },
  { code: 'EN 1995', title: 'Проектирование деревянных конструкций' },
  { code: 'EN 1996', title: 'Проектирование каменных конструкций' },
  { code: 'EN 1997', title: 'Геотехническое проектирование' },
  { code: 'EN 1998', title: 'Проектирование сейсмостойких конструкций' },
  { code: 'EN 1999', title: 'Проектирование алюминиевых конструкций' },
];

const activities = [
  'Перевод и адаптация текстов Еврокодов на русский и казахский языки',
  'Разработка Национальных приложений (National Annexes) с учётом климатических и сейсмических условий РК',
  'Гармонизация Еврокодов с действующими национальными нормами (СП РК)',
  'Участие в техническом комитете ТК 32 «Строительство» по внедрению EN-стандартов',
  'Подготовка специалистов и проведение семинаров по применению Еврокодов',
  'Сотрудничество с европейскими комитетами CEN/TC 250',
];

const goals = [
  {
    title: 'Единое техническое пространство',
    desc: 'Интеграция в общее нормативное пространство СНГ и Европы для свободного движения строительных технологий и специалистов.',
  },
  {
    title: 'Повышение качества строительства',
    desc: 'Применение передовых методов расчёта и проектирования, проверенных десятилетиями европейской практики.',
  },
  {
    title: 'Привлечение инвестиций',
    desc: 'Унификация норм снижает барьеры для иностранных инвесторов и международных строительных компаний в Казахстане.',
  },
  {
    title: 'Сейсмостойкость',
    desc: 'EN 1998 адаптируется с учётом высокой сейсмической активности территории Казахстана и накопленного отечественного опыта.',
  },
];

export default function EurocodePage() {
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
          <PublicIcon sx={{ fontSize: 40 }} />
          <Chip label="Международные стандарты" sx={{ bgcolor: '#F59E0B', color: '#0F172A', fontWeight: 700 }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Еврокоды в Казахстане
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 720 }}>
          КазНИИСА является ведущим научным центром по адаптации и внедрению европейских строительных
          стандартов (Еврокодов) в национальную нормативную базу Республики Казахстан.
          Работа ведётся в тесном взаимодействии с Комитетом по делам строительства и жилищно-коммунального
          хозяйства.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper elevation={1} sx={{ borderRadius: 3, p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <AccountBalanceIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Что такое Еврокоды
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Еврокоды — единый комплекс европейских норм проектирования строительных конструкций,
              разработанных Европейским комитетом по стандартизации (CEN). Они охватывают все основные
              аспекты строительного проектирования — от основ механики конструкций до сейсмостойкости
              и геотехники.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Внедрение Еврокодов в Казахстане позволяет строительной отрасли выйти на международный
              уровень, привлекать иностранных инвесторов и специалистов, а также применять передовые
              методы расчёта конструкций.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#0F172A' }}>
              Деятельность КазНИИСА в области Еврокодов:
            </Typography>
            <List dense disablePadding>
              {activities.map((item, i) => (
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

        <Grid item xs={12} md={5}>
          <Paper elevation={1} sx={{ borderRadius: 3, p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <ArticleIcon sx={{ color: '#0369A1' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                Серия стандартов EN 1990–1999
              </Typography>
            </Box>
            {eurocodes.map((ec, i) => (
              <Box key={i}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 1 }}>
                  <Chip
                    label={ec.code}
                    size="small"
                    sx={{ bgcolor: '#0369A1', color: '#fff', fontWeight: 700, minWidth: 80 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {ec.title}
                  </Typography>
                </Box>
                {i < eurocodes.length - 1 && <Divider />}
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={0} sx={{ borderRadius: 3, p: 3, bgcolor: '#F0F9FF', border: '1px solid #BAE6FD' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A', mb: 2 }}>
              Цели гармонизации строительного законодательства
            </Typography>
            <Grid container spacing={2}>
              {goals.map((card, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: 2, height: '100%' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0369A1', mb: 0.5 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{card.desc}</Typography>
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
