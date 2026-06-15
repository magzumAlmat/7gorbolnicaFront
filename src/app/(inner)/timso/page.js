'use client';
import { Typography, Box, Grid, Divider, Table, TableBody, TableRow, TableCell } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const meetings = [
  { date: 'Август 2018', location: 'Алматы', desc: 'Первое заседание комиссии СНГ по нормативному регулированию BIM. Обсуждение концепции межгосударственного сотрудничества в сфере ТИМСО.' },
  { date: 'Октябрь 2018', location: 'Москва', desc: 'Второе заседание. Согласование подходов к разработке единых стандартов информационного моделирования для стран СНГ.' },
  { date: 'Март 2019', location: 'Москва', desc: 'Третье заседание. Рассмотрение проектов межгосударственных стандартов (ГОСТ) и планов работ комиссии.' },
  { date: 'Май 2019', location: 'Минск', desc: 'Четвёртое заседание. Утверждение дорожной карты по гармонизации BIM-нормативной базы в странах Содружества.' },
];

export default function TimsoPage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 800, color: NAVY, mb: 0 }}>
        ТИМСО — Технология информационного моделирования строительных объектов
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, mt: 1, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        ТИМСО (Технология информационного моделирования строительных объектов) — казахстанское
        обозначение технологии BIM (Building Information Modeling). Это процесс создания и управления
        цифровыми данными о строительном объекте на протяжении всего его жизненного цикла: от
        концепции и проектирования до строительства, эксплуатации и сноса. КазНИИСА является
        национальным центром компетенций по разработке нормативной базы ТИМСО.
      </Typography>

      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA', mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          Внедрение ТИМСО позволяет сократить затраты на строительство и эксплуатацию зданий,
          снизить количество ошибок в проектной документации, улучшить координацию между
          участниками строительного процесса и повысить качество принимаемых решений на всех
          этапах жизненного цикла объекта.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Standards */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Открытые стандарты openBIM
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        ТИМСО базируется на открытых нейтральных форматах и стандартах, разработанных buildingSMART
        International. Применение открытых форматов обеспечивает совместимость между различными
        программными платформами и исключает зависимость от конкретного поставщика ПО.
      </Typography>
      <Table sx={{ mb: 4, border: '1px solid #E2E8F0' }}>
        <TableBody>
          {[
            ['IFC', 'Industry Foundation Classes — открытый формат хранения и обмена данными о строительном объекте. Основной стандарт обмена BIM-данными между различными программами.'],
            ['IDS', 'Information Delivery Specification — спецификация требований к составу и качеству информации, передаваемой между участниками проекта.'],
            ['BCF', 'BIM Collaboration Format — формат для фиксации замечаний, вопросов и задач в процессе совместной работы над BIM-моделью.'],
            ['bSDD', 'buildingSMART Data Dictionary — единый международный словарь строительных терминов, свойств и классификаторов.'],
            ['UCM', 'Use Case Management — методология управления сценариями применения BIM на различных этапах жизненного цикла объекта.'],
          ].map(([std, desc], i) => (
            <TableRow key={i} sx={{ '&:nth-of-type(odd)': { bgcolor: '#F8FAFC' } }}>
              <TableCell sx={{ fontWeight: 700, color: NAVY, width: '15%', verticalAlign: 'top', py: 1.5 }}>{std}</TableCell>
              <TableCell sx={{ color: '#334155', fontSize: '0.97rem', lineHeight: 1.8, py: 1.5 }}>{desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Divider sx={{ mb: 4 }} />

      {/* KazNIISA role */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Роль КазНИИСА в развитии ТИМСО
      </Typography>
      <Box component="ul" sx={{ pl: 3, m: 0, mb: 4 }}>
        {[
          'Разработка национальной нормативной базы в области ТИМСО и BIM',
          'Участие в межгосударственной комиссии СНГ по формированию нормативно-правовой базы BIM',
          'Организация обучения специалистов по программе buildingSMART Professional Certification-Foundation «Basic»',
          'Адаптация международных стандартов IFC и openBIM к условиям казахстанского рынка',
          'Научно-методическое сопровождение внедрения ТИМСО в проектных и строительных организациях',
          'Координация взаимодействия между государственными органами, вузами и бизнесом в сфере BIM',
        ].map((r, i) => (
          <Box component="li" key={i} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{r}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* International cooperation */}
      <Typography variant="h5" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Международное сотрудничество — Комиссия СНГ
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        КазНИИСА принимает активное участие в работе межгосударственной комиссии СНГ по
        формированию нормативно-правовой базы BIM. Комиссия объединяет представителей России,
        Казахстана, Беларуси и других стран Содружества для гармонизации стандартов
        информационного моделирования.
      </Typography>

      <Typography variant="h6" sx={{ fontFamily: '"Exo 2", sans-serif', fontWeight: 700, color: NAVY, mb: 2 }}>
        Заседания комиссии СНГ
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {meetings.map((m, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ borderLeft: `3px solid ${i === 0 ? AMBER : '#CBD5E1'}`, pl: 2, py: 1 }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>
                {m.date} — {m.location}
              </Typography>
              <Typography sx={{ fontSize: '0.97rem', lineHeight: 1.8, color: '#334155', mt: 0.5 }}>
                {m.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ borderLeft: '4px solid #F59E0B', pl: 3, py: 2, bgcolor: '#FAFAFA' }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          В начале 2024 года официально создан казахстанский чаптер buildingSMART International —
          профессиональное сообщество, объединяющее экспертов, проектировщиков и строителей
          вокруг задач внедрения ТИМСО в строительную отрасль страны.
        </Typography>
      </Box>
    </Box>
  );
}
