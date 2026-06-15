'use client';
import { Typography, Box, Paper, Grid, Chip, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Link from 'next/link';

const sections = [
  { icon: <ScienceIcon sx={{ color: '#0369A1' }} />, title: 'Инновационные исследования', href: '/science/research', desc: 'Разработки в области сейсмостойкого строительства, новые технологии мониторинга и маркирования подземных коммуникаций.' },
  { icon: <ArticleIcon sx={{ color: '#0369A1' }} />, title: 'Вестник КазНИИСА', href: '/science/vestnik', desc: 'Научный журнал, издаётся с 2011 года. Публикует теоретические и экспериментальные исследования по строительству и сейсмологии.' },
  { icon: <PeopleIcon sx={{ color: '#0369A1' }} />, title: 'Учёный совет', href: '/science/council', desc: 'Коллегиальный орган научного руководства института, рассматривающий ключевые исследовательские программы.' },
  { icon: <GroupsIcon sx={{ color: '#0369A1' }} />, title: 'Учёный секретарь', href: '/science/secretary', desc: 'Координация научной деятельности, подготовка материалов Учёного совета и организационная поддержка исследований.' },
];

export default function SciencePage() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#0F172A' }}>
        Научная деятельность
      </Typography>
      <Chip label="КазНИИСА" sx={{ bgcolor: '#0369A1', color: '#fff', mb: 3, fontWeight: 600 }} />

      <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', mb: 4 }}>
        Казахский научно-исследовательский институт строительства и архитектуры (КазНИИСА) ведёт фундаментальные
        и прикладные исследования в области сейсмостойкого строительства, нормирования, ценообразования и
        информационных технологий в строительной отрасли Казахстана. Институт является центром научной компетенции
        для разработки государственных строительных норм и стандартов.
      </Typography>

      <Paper sx={{ p: 3, mb: 4, bgcolor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <MenuBookIcon sx={{ color: '#0369A1' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
            Сборники научных трудов
          </Typography>
        </Box>
        <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>
          КазНИИСА регулярно выпускает сборники научных трудов по проблемам сейсмостойкого строительства.
          В сборниках публикуются результаты экспериментальных исследований, теоретические разработки
          и практические рекомендации по проектированию зданий и сооружений в сейсмически активных зонах Казахстана.
        </Typography>
      </Paper>

      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0F172A' }}>
        Разделы научной деятельности
      </Typography>

      <Grid container spacing={3}>
        {sections.map((s) => (
          <Grid item xs={12} sm={6} key={s.href}>
            <Link href={s.href} style={{ textDecoration: 'none' }}>
              <Paper
                sx={{
                  p: 3, height: '100%', borderRadius: 2,
                  border: '1px solid #E2E8F0',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': { boxShadow: 4, borderColor: '#0369A1' },
                  cursor: 'pointer',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  {s.icon}
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>{s.title}</Typography>
                </Box>
                <Typography sx={{ color: '#64748B', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
