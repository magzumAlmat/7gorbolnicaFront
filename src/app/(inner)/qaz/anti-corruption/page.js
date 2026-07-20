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
        Сәйкестік және сыбайлас жемқорлыққа қарсы іс-қимыл
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

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
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 700, mb: 1 }}>
          ЕГЕР СІЗ:
        </Typography>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          сыбайлас жемқорлық, алаяқтық және жымқыру фактілері туралы; мемлекеттік сатып алуды
          өткізу кезіндегі бұзушылықтар туралы; қызметтік жағдайды теріс пайдалану және
          лауазымды тұлғалардың өкілеттіктерін асыра пайдалану туралы; «ҚазҚСҒЗИ» АҚ-ның
          іскерлік беделіне материалдық залал келтіретін немесе зиян келтіруі мүмкін өзге де
          іс-әрекеттер жасау туралы білсеңіз, дереу телефон/сенім поштасы арқылы хабарлауды
          сұраймыз.
        </Typography>
      </Box>

      <Table size="small" sx={{ maxWidth: 600, mb: 5, '& td': { border: 'none', py: 0.8, px: 0 } }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ width: 180, color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Телефон
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 700 }}>
              <a href="tel:+77272269411" style={{ color: NAVY, textDecoration: 'none' }}>
                8 (727) 226 94 11 (ішкі. 188)
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Электрондық пошта
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontWeight: 600 }}>
              <a href="mailto:anticor_comp@kazniisa.kz" style={{ color: NAVY, textDecoration: 'none' }}>
                anticor_comp@kazniisa.kz
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
              Мекенжайы
            </TableCell>
            <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
              Алматы қ., 3 шағынауданы, 44А
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Жоспарлау және стратегия
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 5 }}>
        {[
          { title: 'Бұйрық', href: 'https://drive.google.com/open?id=10KNdKv4WfhiOzDgnJAizgvJ0u2DymD3c' },
          { title: 'Сыбайлас жемқорлыққа қарсы комплаенс-қызмет туралы', href: 'https://drive.google.com/file/d/14mIl0y1S-YhirmVKSsnw017ww99gNzda/view?usp=sharing' },
          { title: 'Сыбайлас жемқорлыққа қарсы саясат', href: 'https://drive.google.com/file/d/1IP-tzh7GdS0WZc-suLS7CLdMlIp9GDKE/view?usp=sharing' },
          { title: 'Сыбайлас жемқорлыққа қарсы іс-қимыл мониторингі', href: 'https://drive.google.com/drive/folders/14g5HjY0nlTvlLC5xr9tHMJt-M-U6AkBN?usp=sharing' },
          { title: 'Сыбайлас жемқорлыққа қарсы іс-қимыл жөніндегі комплаенс-офицері туралы ереже', href: 'https://drive.google.com/drive/folders/1Ju9X3UZJQt1XkVbbOitcRNih2JeAncMD' },
          { title: 'ҚазҚСҒЗИ АҚ Сыбайлас жемқорлыққа қарсы комплаенс', href: 'https://docs.google.com/document/d/1ZhYSjnvhd9uLVqWPJI2rObXgDdsEMrK1/edit?usp=sharing&ouid=111328382613332232084&rtpof=true&sd=true' },
          { title: 'Сыбайлас жемқорлық құқық бұзушылықтардың түрлері', href: 'https://docs.google.com/document/d/1aH7oXfQf3QmzczCotjygks-JArpQ8yns/edit?usp=sharing&ouid=111328382613332232084&rtpof=true&sd=true' },
          { title: 'Сыбайлас жемқорлық ұғымы', href: 'https://docs.google.com/document/d/1vZFZWHHUwW8mrSkt4ieCBLnsdi9kuyfY/edit?usp=sharing&ouid=111328382613332232084&rtpof=true&sd=true' },
          { title: 'Қызметкерлердің мінез-құлық (іс-қимыл) ережелері', href: 'https://docs.google.com/document/d/1_YEgGLhmG0zBQEbRs30Us0b137PIbCjH/edit?usp=sharing&ouid=111328382613332232084&rtpof=true&sd=true' },
          { title: 'Мақсаттар мен міндеттер', href: 'https://docs.google.com/document/d/1lD6KpOPGQuHzcqjH7mQ6AZ-YX6PkaT7B/edit?usp=sharing&ouid=111328382613332232084&rtpof=true&sd=true' },
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
            <Typography
              component="a"
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: BLUE } }}
            >
              {doc.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
