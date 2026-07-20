'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

export default function AboutUsPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Біз туралы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2.5 }}>
        Қазақстандағы құрылыс саласын дамыту, соның ішінде аса күрделі инженерлік-геологиялық жағдайлары бар аудандар мен сейсмоқауіпті аймақтар бойынша мемлекеттік ғылыми-зерттеу және жобалау институты.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2.5 }}>
        АО «КазНИИСА» — признанный лидер ЕЭАС в области исследования и внедрения информационных технологий в строительство. Мы осуществляем проектирование зданий, сооружений и объектов любого уровня сложности. Институт выполняет полный комплекс научно-технических работ в области разработки градостроительной документации, от предпроектных исследований и обоснований до подготовки проектной документации и ведения авторского надзора. Проектная деятельность осуществляется специалистами, способными решать различные градостроительные, архитектурно-планировочные, землеустроительные и инженерные задачи с помощью современной технологической базы института.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.8, color: '#334155', fontStyle: 'italic' }}>
          «ҚазНИИСА» АҚ құрылыс саласына жаңа материалдар мен технологиялық инновацияларды енгізу бойынша озық ғылыми зерттеулер жүргізуге мүмкіндік беретін өз зертханалық және өндірістік базасына ие.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
            Біздің мансабымыз
          </Typography>
          <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', textAlign: 'justify' }}>
            Ғылыми-техникалық дамуды қолдау және құрылыс саласында озық технологияларды енгізу. Инновациялық даму үшін жағдайлар жасау арқылы өмір сүру сапасын арттыру, өңірлердің тұрақты даму принциптеріне сәйкес құрылыс саласында заманауи бағдарламалық-техникалық шешімдерді қолдану және әрбір объектінің өмірлік циклының барлық кезеңдерінде қауіпсіздікке толықтай commitment көрсету. Бұл мақсатқа жету үшін мемлекеттік-жекеменшік серіктестік механизмдерін дамытуға жәрдемдесу.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
            Как мы работаем
          </Typography>
          <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mt: 2, textAlign: 'justify' }}>
            Сейсмалық төзімді құрылыс үшін ғимараттар мен құрылыстардың сенімділігін қамтамасыз ету мақсатында ғылыми-зерттеу және жобалау жұмыстарын жүргізіп, консультациялық қызметтер көрсетеміз.
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mt: 2, textAlign: 'justify' }}>
            Құрылыс материалдарына баға мониторингін жүргізу, технологиялық карталарды және құрылыс саласындағы баға қалыптастыруды реттейтін басқа нормативтік-техникалық құжаттарды әзірлеу, құрылыс материалдары, бұйымдар мен конструкциялар бойынша сметалық бағалар жинақтарын дайындау және мүдделі ұйымдардың сұрауымен басқа аналитикалық материалдарды дайындау жұмыстарын жүзеге асырамыз.
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mt: 2, textAlign: 'justify' }}>
            Құрылыс саласында заманауи ақпараттық технологияларды зерттеу және енгізу.
          </Typography>
          <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mt: 2, textAlign: 'justify' }}>
            Қала құрылысы және архитектура саласында нормативтік-техникалық құжаттар мен нормативтік-құқықтық актілерді, соның ішінде мемлекетаралық және халықаралық стандарттар мен нормаларды әзірлеуге қатысамыз.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <Box
          component="img"
          src="/images/kazniisa/history-banner.webp"
          alt="ҚазНИИСА"
          sx={{ width: '100%', maxWidth: 560, borderRadius: '6px' }}
        />
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="overline" sx={{ color: GRAY_TEXT, fontWeight: 600, letterSpacing: 1.5 }}>
        Басшылық
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mt: 1.5 }}>
        <Box
          component="img"
          src="/images/kazniisa/kulbaev-director.webp"
          alt="Кульбаев Бегман Бахитұлы"
          sx={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
        />
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: NAVY }}>
            Кульбаев Бегман Бахитұлы
          </Typography>
          <Typography sx={{ color: GRAY_TEXT, fontSize: '0.9rem' }}>
            Бас директор
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
