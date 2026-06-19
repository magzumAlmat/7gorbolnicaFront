'use client';
import { Typography, Box, Grid, Table, TableBody, TableCell, TableRow } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function AntiCorruptionPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: NAVY,
          mb: 1,
        }}
      >
        Комплаенс и противодействие коррупции
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3, maxWidth: 760 }}>
        АО «КазНИИСА» проводит активную политику противодействия коррупции. Институт реализует
        комплекс организационных, правовых и воспитательных мер в соответствии с Законом
        Республики Казахстан «О противодействии коррупции» от 18 ноября 2015 года № 410-V.
        Руководство института обеспечивает неотвратимость ответственности за любые коррупционные
        проявления со стороны сотрудников или третьих лиц.
      </Typography>

      <Box
        sx={{
          bgcolor: BLUE_LIGHT,
          borderLeft: '4px solid ' + BLUE,
          borderRadius: '0 6px 6px 0',
          p: 3,
          mb: 5,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Если вы стали свидетелем коррупционного правонарушения или столкнулись с требованием
          взятки — немедленно сообщите об этом через горячую линию. Анонимность и
          конфиденциальность каждого обращения гарантируются.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Горячая линия для анонимных обращений
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Table size="small" sx={{ maxWidth: 600, mb: 5, '& td': { border: 'none', py: 0.8, px: 0 } }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: 180, color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Телефон горячей линии
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 700 }}>
              <a href="tel:+77272269411" style={{ color: NAVY, textDecoration: 'none' }}>
                8 (727) 226 94 11 (доб. 188)
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Режим работы
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              Пн–Пт: 9:00 – 18:30
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Письменное обращение
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              г. Алматы, 3 микрорайон, 44А — с пометкой «Антикоррупция»
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Служба антикоррупционного комплаенса
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Table size="small" sx={{ maxWidth: 600, mb: 5, '& td': { border: 'none', py: 0.8, px: 0 } }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: 180, color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Электронная почта
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 600 }}>
              <a href="mailto:anticor_comp@kazniisa.kz" style={{ color: NAVY, textDecoration: 'none' }}>
                anticor_comp@kazniisa.kz
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Телефон
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              <a href="tel:+77272269411" style={{ color: NAVY, textDecoration: 'none', fontWeight: 600 }}>
                +7 (727) 226 94 11 (доб. 188)
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Нормативные документы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Антикоррупционная деятельность института регулируется следующими документами:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 5 }}>
        {[
          'Закон Республики Казахстан «О противодействии коррупции» от 18 ноября 2015 года № 410-V',
          'Кодекс корпоративной этики АО «КазНИИСА»',
          'Антикоррупционная политика института',
          'Положение о конфликте интересов',
          'Правила внутреннего трудового распорядка (раздел «Этика»)',
          'Порядок рассмотрения обращений о коррупционных правонарушениях',
        ].map((doc, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Box
              sx={{
                mt: '10px',
                width: 8,
                height: 8,
                borderRadius: 0,
                bgcolor: BLUE,
                flexShrink: 0,
              }}
            />
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              {doc}
            </Typography>
          </Box>
        ))}
      </Box>

    </Box>
  );
}
