'use client';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DevicesIcon from '@mui/icons-material/Devices';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const benefits = [
  'OpenBIM саласындағы сараптамаңыз бен біліміңізді растаңыз',
  'Құрылыс индустриясында жетістіктеріңізбен ерекшеленіп, мойындалуға қол жеткізіңіз',
  'OpenBIM саласында жұмысқа орналасудың жаңа мүмкіндіктерін ашыңыз',
  'OpenBIM бойынша өзекті білімдеріңіз арқылы алдыңғы қатарда болыңыз',
  'OpenBIM жобаларында жұмыс істей отырып, алған білімдеріңізді тәжірибеде қолданыңыз',
  'OpenBIM әдіснамалары мен қағидаттарын өз жобаларыңызға енгізіп, олардың тиімділігі мен сапасын арттырыңыз',
];

const faqs = [
  {
    q: 'BuildingSMART дегеніміз не?',
    a: 'BuildingSMART – бұл құрылыс нысандарының ақпараттық модельдеу (BIM) саласындағы стандарттар мен технологияларды әзірлеумен және қолдаумен айналысатын халықаралық ұйым.',
  },
  {
    q: 'Курс қанша уақытқа созылады?',
    a: 'Оқу ұзақтығы әртүрлі болуы мүмкін, бірақ стандартты бағдарлама 2 аптаға созылады.',
  },
  {
    q: 'Оқу форматы қандай?',
    a: 'Қашықтан оқыту, күндізгі оқыту.',
  },
  {
    q: 'Құны нені қамтиды?',
    a: 'Құнына курсқа байланысты барлық шығындар және бір реттік емтихан алымы кіреді.',
  },
  {
    q: 'Егер бірінші рет тапсыра алмасам, емтиханды қайта тапсыра аламын ба?',
    a: 'Емтиханды бір рет қайта тапсыруға болады, тек бір реттік емтихан ақысын төлейді.',
  },
];

const testimonials = [
  {
    text: 'The course was at a high professional level. We are already actively applying the acquired knowledge in practice and promoting the use of BIM among our partners.',
    author: 'Madi Kenzhin',
    role: 'DCC Lead Engineer, Kazakhstan / Astana',
  },
  {
    text: 'Интересный курс, легкая и доступная подача материала. Все четко, понятно и по существу. Выражаю огромную благодарность преподавателям курса и организаторам курсов за плодотворное взаимодействие!',
    author: 'Aizhan Akhmetzhanova',
    role: 'Analytical Expert, Kazakhstan Fondation',
  },
];

export default function CertificationPage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        Профессиональная сертификация(Foundation)
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 2 }} />
      <Chip label="#openBIM" sx={{ bgcolor: BLUE, color: '#fff', fontWeight: 600, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        2024 жылдың наурыз айынан бастап Қазақстан құрылыс объектілерін ақпараттық модельдеу
        (BIM) саласындағы стандарттар мен технологияларды әзірлеу және қолдау бойынша жұмыс
        істейтін халықаралық ұйым buildingSmart-тың ресми өкілдігіне айналды. Орыс және қазақ
        тілдерінде сертификаттаудан өту мүмкіндігі «ҚазҚСҒЗИ» АҚ базасында қамтамасыз етілген.
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        buildingSmart Professional Certification – Foundation бағдарламасы әлемдік құрылыс
        индустриясындағы ең беделді бағдарламалардың бірі болып табылады. Аталған бағдарламадан
        сәтті өткен мамандар ғимараттар мен құрылыс объектілерін ақпараттық модельдеу саласындағы
        жоғары білім деңгейін растайды. Бұл базалық оқу бағдарламасы тыңдаушыларға ақпараттық
        модельдеудің негізгі қағидаттары, жетекші әлемдік тәжірибелер, сондай-ақ Қазақстан
        Республикасының құрылыс саласына BIM-ді енгізу және қолдану туралы білім береді. Курсты
        сәтті аяқтау қорытындысы бойынша қатысушылар халықаралық сертификат алады.
      </Typography>
      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
        Мамандардың халықаралық сертификаттаудан өтуі саланы дамытудағы және әлемдік
        қауымдастықта қабылданған стандарттарды нығайтудағы маңызды қадам болып табылады.
        Сонымен қатар, ол ақпараттық модельдеу саласындағы білім мен дағдыларды жетілдіруге,
        кәсіби біліктілікті арттыруға және өз қызмет саласында танылуға мүмкіндік береді.
        Foundation бағдарламасы құрылыс саласының мамандары үшін BIM және openBIM
        тәжірибелерін өз жұмысында түсінуге және қолдануға тамаша мүмкіндік ұсынады, бұл
        цифрлық құрылыстың жаңа перспективаларына есік ашады.
      </Typography>

      {/* Program details */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Параметры программы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { icon: <AccessTimeIcon sx={{ color: BLUE }} />, label: 'Курс қанша уақытқа созылады?', value: 'Стандартты бағдарлама 2 аптаға созылады' },
          { icon: <DevicesIcon sx={{ color: BLUE }} />, label: 'Оқу форматы қандай?', value: 'Қашықтан оқыту, күндізгі оқыту' },
          { icon: <SchoolIcon sx={{ color: BLUE }} />, label: 'Құны нені қамтиды?', value: 'Курсқа байланысты барлық шығындар және бір реттік емтихан алымы' },
        ].map((item) => (
          <Grid item xs={12} sm={4} key={item.label}>
            <Paper sx={{
              p: 3,
              borderRadius: '6px',
              border: '1px solid ' + BORDER,
              height: '100%',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}>
              <Box sx={{ mb: 1 }}>{item.icon}</Box>
              <Typography sx={{ fontSize: '0.8rem', color: GRAY_TEXT, fontWeight: 600, mb: 0.5 }}>{item.label}</Typography>
              <Typography sx={{ fontWeight: 700, color: NAVY }}>{item.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Емтиханды бір рет қайта тапсыруға болады, тек бір реттік емтихан ақысын төлейді.
          Қатысушылардың ғимараттарды жобалау, салу және пайдалану процестері туралы базалық
          білімі болғаны ұсынылады.
        </Typography>
      </Box>

      {/* Benefits */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Преимущества сертификации
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <List disablePadding sx={{ mb: 4 }}>
        {benefits.map((b) => (
          <ListItem key={b} sx={{ px: 0, py: 1, borderBottom: '1px solid #F1F5F9', '&:last-child': { borderBottom: 'none' } }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleIcon sx={{ color: BLUE, fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText
              primary={b}
              primaryTypographyProps={{ sx: { fontSize: '1rem', color: '#334155', lineHeight: 1.9 } }}
            />
          </ListItem>
        ))}
      </List>

      {/* Coordinator */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Координатор программы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Paper sx={{
        p: 3,
        borderRadius: '6px',
        border: '1px solid ' + BORDER,
        borderLeft: '4px solid ' + BLUE,
        mb: 4,
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
      }}>
        <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1.1rem', mb: 1 }}>Мадина Умирзакова</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ color: BLUE, fontSize: 18 }} />
            <Typography sx={{ color: '#334155' }}>+7 701 816 74 81 (WhatsApp)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ color: BLUE, fontSize: 18 }} />
            <Typography sx={{ color: '#334155' }}>mumirzakova@kazniisa.kz</Typography>
          </Box>
        </Box>
      </Paper>

      {/* FAQ */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Часто задаваемые вопросы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ mb: 4 }}>
        {faqs.map((faq) => (
          <Paper key={faq.q} sx={{
            p: 3,
            mb: 2,
            borderRadius: '6px',
            border: '1px solid ' + BORDER,
            transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
          }}>
            <Typography sx={{ fontWeight: 700, color: NAVY, mb: 1 }}>{faq.q}</Typography>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{faq.a}</Typography>
          </Paper>
        ))}
      </Box>

      {/* Testimonials */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Отзывы участников
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Grid container spacing={3}>
        {testimonials.map((t) => (
          <Grid item xs={12} sm={6} key={t.author}>
            <Paper sx={{
              p: 3,
              borderRadius: '6px',
              border: '1px solid ' + BORDER,
              height: '100%',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}>
              <FormatQuoteIcon sx={{ color: BLUE, fontSize: 32, mb: 1 }} />
              <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic', mb: 2 }}>
                {t.text}
              </Typography>
              <Typography sx={{ fontWeight: 700, color: NAVY }}>{t.author}</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: GRAY_TEXT }}>{t.role}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
