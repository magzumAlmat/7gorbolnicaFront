'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const departments = [
  { title: 'Отдел архитектуры и генерального плана' },
  { title: 'Конструкторский отдел' },
  { title: 'Отдел инженерного проектирования. Теплоснабжение. Отопление, вентиляция и кондиционирование. Водоснабжение и канализация. Автоматическое пожаротушение.' },
  { title: 'Отдел по ЭС, ЭО и СС.' },
  { title: 'Сметный отдел' },
  { title: 'Отдел обработки информации и комплектации ПСД' },
];

export default function StandardDesignPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Үлгілік және индивидуалды жобалау орталығы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Орталық жобалау алдындағы құжаттаманы, үлгілік және жеке жобалау-сметалық құжаттаманы әзірлеуді,
        кез келген күрделіліктің деңгейіндегі ғимараттар мен құрылыстардың есептеулерін орындауды,
        әртүрлі үлгідегі ғимараттар мен құрылыстарды күшейту (қалпына келтіру) жөніндегі конструктивтік
        шешімдерді әзірлеуді, мемлекеттік сараптаманың айрықша құзыретіне жатпайтын құрылысқа арналған
        жобалау құжаттамасына сараптама жүргізуді, Қазақстан Республикасының жер сілкінісіне төзімді
        құрылыс нормаларының талаптарына сәйкес шетелдік фирмалар әзірлейтін әртүрлі үлгідегі ғимараттар
        мен инженерлік құрылыстардың жобаларын бейімдеуді жүзеге асырады.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 5 }}>
        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
          Орталық қызметінің негізгі түрі тұрғын және қоғамдық ғимараттардың кейінгі құрылыста оларды
          бірнеше рет іске асыруға арналған үлгілік жобаларын әзірлеу болып табылады.
        </Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Орталық құрамы
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {departments.map((d, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ p: 2.5, border: '1px solid ' + BORDER, borderRadius: '6px', height: '100%', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Typography sx={{ fontWeight: 800, fontSize: '0.8rem', color: BLUE }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>{d.title}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Байланыстар:</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>elvira_kazniisa@mail.ru</Typography>
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem', mb: 0.5 }}>8 (727) 338 30 22</Typography>
        <Typography sx={{ color: '#94A3B8', fontSize: '0.85rem' }}>Ул.Сатпаева 88Г г. Алматы</Typography>
      </Box>

      <Link href="/qaz/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}>
        ← Орталықтар
      </Link>
    </Box>
  );
}
