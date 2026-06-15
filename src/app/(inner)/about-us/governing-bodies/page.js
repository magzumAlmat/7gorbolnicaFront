'use client';
import {
  Typography,
  Box,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const board = [
  {
    name: 'Бесимбаев Ерик Турашович',
    role: 'Председатель Совета директоров',
    since: '29.07.2024',
    note: 'Профессор КазНИТУ, род. 22.11.1958',
    chair: true,
    photo: '/images/kazniisa/besimbaev.webp',
  },
  {
    name: 'Рысдавлетов Мурат Булатович',
    role: 'Заместитель председателя Комитета строительства',
    since: '12.02.2026',
    note: 'Род. 30.09.1982',
    chair: false,
    photo: '/images/kazniisa/rysdavletov.jpeg',
  },
  {
    name: 'Карибаева Мамыр Куанышовна',
    role: 'Главный эксперт',
    since: '29.07.2024',
    note: 'Род. 31.08.1970',
    chair: false,
    photo: '/images/kazniisa/karibaeva.webp',
  },
  {
    name: 'Кульбаев Бегман Бахитович',
    role: 'Генеральный директор АО «КазНИИСА»',
    since: '29.07.2024',
    note: 'Род. 10.01.1982',
    chair: false,
    photo: '/images/kazniisa/kulbaev-400.webp',
  },
  {
    name: 'Есенова Куралай Еркебековна',
    role: 'Независимый директор',
    since: '29.07.2024',
    note: 'Род. 21.04.1971',
    chair: false,
    photo: '/images/kazniisa/esenova.webp',
  },
  {
    name: 'Сатжанов Кенжебай Сатжанович',
    role: 'Представитель акционера',
    since: '29.07.2024',
    note: 'Род. 19.08.1955',
    chair: false,
    photo: '/images/kazniisa/satzhanov.webp',
  },
];

export default function GoverningBodiesPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, color: NAVY, mb: 1, fontFamily: '"Exo 2", sans-serif' }}
      >
        Органы управления
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 4 }} />

      {/* Единственный акционер */}
      <Box
        sx={{
          p: 3,
          border: `2px solid ${AMBER}`,
          borderRadius: 3,
          bgcolor: `${AMBER}08`,
          mb: 5,
          display: 'flex',
          gap: 3,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box
          component="img"
          src="/images/kazniisa/ministry-logo.webp"
          alt="Министерство промышленности и строительства РК"
          sx={{ height: 72, objectFit: 'contain', flexShrink: 0 }}
        />
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              color: AMBER,
              fontSize: '0.82rem',
              textTransform: 'uppercase',
              letterSpacing: 1,
              mb: 1,
              fontFamily: '"Exo 2", sans-serif',
            }}
          >
            Единственный акционер — 100% акций
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 600 }}>
            Комитет по делам строительства и жилищно-коммунального хозяйства Министерства
            промышленности и строительства Республики Казахстан
          </Typography>
        </Box>
      </Box>

      {/* Совет директоров */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, mb: 2.5, fontFamily: '"Exo 2", sans-serif' }}
      >
        Совет директоров
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, mb: 5 }}>
        {board.map((m, i) => (
          <Box
            key={i}
            sx={{
              width: { xs: '100%', sm: 'calc(50% - 10px)', md: 'calc(33.33% - 14px)' },
              p: 2.5,
              border: `1px solid ${m.chair ? AMBER : '#E2E8F0'}`,
              borderRadius: 3,
              bgcolor: m.chair ? `${AMBER}08` : '#F8FAFC',
              boxSizing: 'border-box',
            }}
          >
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              <Box
                component="img"
                src={m.photo}
                alt={m.name}
                sx={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <Box>
                <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', lineHeight: 1.4, mb: 0.5, fontFamily: '"Exo 2", sans-serif' }}>
                  {m.name}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: '#64748B', mb: 0.5 }}>{m.note}</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>{m.role}</Typography>
                <Typography sx={{ fontSize: '0.78rem', color: AMBER, fontWeight: 600, mt: 0.5 }}>с {m.since}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 5 }} />

      {/* Руководство */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, mb: 2.5, fontFamily: '"Exo 2", sans-serif' }}
      >
        Исполнительное руководство
      </Typography>

      {/* Executive photos */}
      <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
        {[
          { name: 'Шокбаров Ералы Мейрамбекович', photo: '/images/kazniisa/shokbarov-400.jpg', label: 'Упр. директор по производству' },
          { name: 'Шахнович Александр Юльевич', photo: '/images/kazniisa/shakhnovitch-400.webp', label: 'Упр. директор по развитию и цифровизации' },
        ].map((exec, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box
              component="img"
              src={exec.photo}
              alt={exec.name}
              sx={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <Box>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', lineHeight: 1.4, fontFamily: '"Exo 2", sans-serif' }}>
                {exec.name}
              </Typography>
              <Typography sx={{ fontSize: '0.82rem', color: '#64748B' }}>{exec.label}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 5 }}>
        {[
          { label: 'Генеральный директор', value: 'Кульбаев Бегман Бахитович', note: 'в должности с 19.09.2017' },
          { label: 'Управляющий директор по производству', value: 'Шокбаров Ералы Мейрамбекович', note: '' },
          { label: 'Управляющий директор по развитию и цифровизации', value: 'Шахнович Александр Юльевич', note: '' },
          { label: 'Корпоративный секретарь-омбудсмен', value: 'Суханкулов Нуркен Кунанбаевич', note: '' },
          { label: 'Внутренний аудитор', value: 'Ермекбаев Берик Серикович', note: 'тел. 226-94-10, +7 778 705 43 65' },
        ].map((row, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 0.5, sm: 3 },
              alignItems: 'baseline',
              borderBottom: '1px solid #E2E8F0',
              pb: 1.5,
            }}
          >
            <Typography
              sx={{
                color: '#64748B',
                fontSize: '0.88rem',
                minWidth: { sm: 280 },
                flexShrink: 0,
              }}
            >
              {row.label}
            </Typography>
            <Box>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem', lineHeight: 1.6 }}>
                {row.value}
              </Typography>
              {row.note && (
                <Typography sx={{ color: '#64748B', fontSize: '0.82rem' }}>{row.note}</Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Org structure */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, color: NAVY, mb: 2.5, fontFamily: '"Exo 2", sans-serif' }}
      >
        Организационная структура
      </Typography>
      <Box
        component="img"
        src="/images/kazniisa/org-structure-2025-full.webp"
        alt="Организационная структура КазНИИСА 2025"
        sx={{ width: '100%', borderRadius: 2, mb: 2 }}
      />
    </Box>
  );
}
