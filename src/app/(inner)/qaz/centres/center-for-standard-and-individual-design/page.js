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

const quoteBoxSx = {
  borderLeft: '3px solid ' + BLUE,
  pl: 2,
  py: 0.5,
  mb: 3,
  fontStyle: 'italic',
  color: GRAY_TEXT,
  fontSize: '0.95rem',
  lineHeight: 1.9,
};

const bodyTextSx = { fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 2 };
const listItemSx = { fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 };
const subHeadingSx = { fontWeight: 700, color: NAVY, fontSize: '1.02rem', mb: 1.5 };
const yearHeadingSx = { fontWeight: 700, color: BLUE, fontSize: '0.9rem', mb: 1, mt: 3 };

export default function StandardDesignPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Үлгілік және индивидуалды жобалау орталығы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={quoteBoxSx}>
        Центр типового и индивидуального проектирования (далее — Центр) является структурным подразделением АО «КазНИИСА». Центр был образован в 2010 г.
      </Box>

      <Typography sx={bodyTextSx}>
        Орталық жобалау алдындағы құжаттаманы, үлгілік және жеке жобалау-сметалық құжаттаманы әзірлеуді,
        кез келген күрделілік деңгейіндегі ғимараттар мен құрылыстардың есептеулерін орындауды,
        әртүрлі үлгідегі ғимараттар мен құрылыстарды күшейту (қалпына келтіру) жөніндегі конструктивтік
        шешімдерді әзірлеуді, мемлекеттік сараптаманың айрықша құзыретіне жатпайтын құрылысқа арналған
        жобалау құжаттамасына сараптама жүргізуді, Қазақстан Республикасының жер сілкінісіне төзімді
        құрылыс нормаларының талаптарына сәйкес шетелдік фирмалар әзірлейтін әртүрлі үлгідегі ғимараттар
        мен инженерлік құрылыстардың жобаларын бейімдеуді жүзеге асырады.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 3 }}>
        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#334155' }}>
          Орталық қызметінің негізгі түрі тұрғын және қоғамдық ғимараттардың кейінгі құрылыста оларды
          бірнеше рет іске асыруға арналған үлгілік жобаларын әзірлеу болып табылады.
        </Typography>
      </Box>

      <Typography sx={bodyTextSx}>
        Жұмыстарды әртүрлі күрделіліктегі объектілерді жобалауда үлкен тәжірибесі бар бейінді білімі бар кәсіпқойлар ұжымы орындайды. Жобалау-сметалық құжаттаманы әзірлеу сәулет, қала құрылысы және құрылыс саласындағы қолданыстағы нормативтік құқықтық актілердің және нормативтік-техникалық құжаттардың талаптарына сәйкес орындалады.
      </Typography>

      <Typography sx={{ ...bodyTextSx, mb: 4 }}>
        Орталық барлық жұмыстарды жүргізудің жаңа технологиялары мен әдістерін пайдаланады, өңдеу мен бақылаудың автоматтандырылған жүйелері, сондай-ақ неғұрлым заманауи лицензиялық бағдарламалық қамтамасыз ету қолданылады.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <Typography sx={subHeadingSx}>Үлгілік жобалар (2010-2011)</Typography>
          <Typography sx={{ ...bodyTextSx, mb: 1 }}>
            2010-2011 жылдары Орталық мына үлгілік жобаларды әзірледі:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 2 }}>
            <Typography component="li" sx={listItemSx}>«20 жұмыс орнына салық органдарының ақпаратты қабылдау және өңдеу орталығы»</Typography>
            <Typography component="li" sx={listItemSx}>«5 құрамға арналған аудандық сот ғимараты»</Typography>
            <Typography component="li" sx={listItemSx}>«7 құрамға арналған аудандық сот ғимараты»</Typography>
            <Typography component="li" sx={listItemSx}>«1-разрядты су-құтқару станциясы»</Typography>
            <Typography component="li" sx={listItemSx}>«V типті 2 автомобильге арналған өрт сөндіру депосының кешені»</Typography>
            <Typography component="li" sx={listItemSx}>«1-қабатты 1-пәтерлі тұрғын үй»</Typography>
          </Box>
          <Box sx={quoteBoxSx}>
            Қалыпты геологиялық жағдайлары және сейсмикасы 7, 8, 9 балл болатын әртүрлі климаттық аймақтар үшін.
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography sx={subHeadingSx}>2012 Үлгілік жобалар</Typography>
          <Typography sx={{ ...bodyTextSx, mb: 1 }}>
            2012 жылы Орталық 189 үлгілік жобаны, оның ішінде мына үлгілік жобаларды әзірледі:
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <Typography component="li" sx={listItemSx}>«10 құрамға арналған аудандық сот ғимараты»</Typography>
            <Typography component="li" sx={listItemSx}>«Индустриялық үй құрылысы жүйесіндегі тұрғын үйлердің біріздендірілген 5, 7, 9 қабатты блок-секциялары»</Typography>
            <Typography component="li" sx={listItemSx}>«2-ші және 3-ші разрядтағы су-құтқару станциясы»</Typography>
            <Typography component="li" sx={listItemSx}>«1500 орындық мамандандырылған түзеу мекемелері»</Typography>
            <Typography component="li" sx={listItemSx}>«II типті 4 автомобильге арналған өрт сөндіру депосының кешені»</Typography>
            <Typography component="li" sx={listItemSx}>«300, 600, 900 орындық мектептер»</Typography>
            <Typography component="li" sx={listItemSx}>«140, 240, 280 орындық балабақшалар»</Typography>
            <Typography component="li" sx={listItemSx}>«Ауысымына 250, 500 келушіге арналған емханалар»</Typography>
            <Typography component="li" sx={listItemSx}>«Ауысымда 25, 50 келуге арналған дәрігерлік амбулаториялар»</Typography>
            <Typography component="li" sx={listItemSx}>«50, 100, 200 адамға арналған Азаматтық қорғаныстың қорғаныс құрылыстары (баспаналары)»</Typography>
            <Typography component="li" sx={listItemSx}>«Сыйымдылығы 100, 200 адам болатын азаматтық қорғаныс басқармасының қосалқы пункттері»</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 4, p: 2, bgcolor: BLUE_LIGHT, borderRadius: '6px', borderLeft: '4px solid ' + BLUE }}>
        <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155' }}>
          Орталық Астана қаласында «Абу ДАБИ ПЛАЗА» көпфункционалды кешенін жобалауға арнайы техникалық шарттар әзірледі.
        </Typography>
      </Box>

      <Typography sx={subHeadingSx}>Орталық мына үлгілік жобаларды әзірледі</Typography>

      <Typography sx={yearHeadingSx}>2013 жылы</Typography>
      <Box component="ul" sx={{ pl: 3, mb: 1 }}>
        <Typography component="li" sx={listItemSx}>«Центральная водно-спасательная станция»</Typography>
        <Typography component="li" sx={listItemSx}>«Сельский Дом культуры на 300 мест»</Typography>
        <Typography component="li" sx={listItemSx}>5-ти этажные жилые блок-секции в индустриальной домостроительной системе</Typography>
        <Typography component="li" sx={listItemSx}>«Унифицированная девятиэтажная поворотная секция жилого дома ТИП1, ТИП2»</Typography>
        <Typography component="li" sx={listItemSx}>«Унифицированная девятиэтажная блок-секция жилого дома ТИП3»</Typography>
        <Typography component="li" sx={listItemSx}>«Унифицированная семиэтажная поворотная секция жилого дома ТИП1, ТИП2»</Typography>
        <Typography component="li" sx={listItemSx}>«Унифицированная семиэтажная блок-секция жилого дома ТИП3»</Typography>
        <Typography component="li" sx={listItemSx}>«Унифицированная пятиэтажная поворотная секция жилого дома ТИП1»</Typography>
        <Typography component="li" sx={listItemSx}>«Унифицированная пятиэтажная блок-секция жилого дома ТИП3»</Typography>
      </Box>
      <Box sx={quoteBoxSx}>
        для пяти климатических районов РК. Все жилые блок-секции III класса комфортабельности.
      </Box>

      <Typography sx={yearHeadingSx}>2014 жылы</Typography>
      <Typography sx={{ ...bodyTextSx, mb: 1 }}>
        Центром были разработаны следующие типовые проекты для пяти климатических районов РК.
      </Typography>
      <Typography sx={{ ...bodyTextSx, mb: 1, fontWeight: 600 }}>
        Жилые блок-секции III класса комфортабельности:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        <Typography component="li" sx={listItemSx}>«Унифицированная девятиэтажная блок-секция жилого дома ТИП 3 в индустриальной домостроительной системе»</Typography>
        <Typography component="li" sx={listItemSx}>«Унифицированная пятиэтажная поворотная секция жилого дома ТИП 2 в индустриальной домостроительной системе»</Typography>
      </Box>
      <Typography sx={{ ...bodyTextSx, mb: 1, fontWeight: 600 }}>
        Жилые блок-секции IV класса комфортабельности:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        <Typography component="li" sx={listItemSx}>«Унифицированная пятиэтажная блок-секция жилого дома ТИП 4 в индустриальной домостроительной системе»</Typography>
        <Typography component="li" sx={listItemSx}>«Унифицированная девятиэтажная блок-секция жилого дома ТИП 4 в индустриальной домостроительной системе»</Typography>
      </Box>
      <Typography sx={{ ...bodyTextSx, mb: 1, fontWeight: 600 }}>
        Жилые дома III класса комфортабельности:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        <Typography component="li" sx={listItemSx}>«5-ти этажный жилой дом коридорного типа в индустриальной домостроительной системе»</Typography>
        <Typography component="li" sx={listItemSx}>«9-ти этажный жилой дом коридорного типа в индустриальной домостроительной системе»</Typography>
        <Typography component="li" sx={listItemSx}>12-ти этажный жилой дом башенного типа в индустриальной домостроительной системе»</Typography>
        <Typography component="li" sx={listItemSx}>«1-этажных блокированных жилых домов»</Typography>
        <Typography component="li" sx={listItemSx}>«2-х этажный блокированный жилой дом»</Typography>
      </Box>
      <Box sx={quoteBoxSx}>
        Детский сад (организация дошкольного воспитания и обучения) на 140, 240, 280 мест в сборно-монолитном каркасе по технологии универсальной домостроительной системы» с конструктивным решением наружных стен из трехслойной стеновой панели.
      </Box>

      <Typography sx={yearHeadingSx}>2015 жылы</Typography>
      <Typography sx={{ ...bodyTextSx, mb: 1 }}>
        Центром были разработаны типовые проекты для пяти климатических районов РК.
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        <Typography component="li" sx={listItemSx}>«Встроенно-пристроенная амбулатория на первом этаже 9-ти этажного жилого дома секционного типа»</Typography>
        <Typography component="li" sx={listItemSx}>«Встроенно-пристроенная поликлиника на первом этаже 9-ти этажного жилого дома секционного типа»</Typography>
        <Typography component="li" sx={listItemSx}>«Встроенно-пристроенный детский сад на первом этаже 9-ти этажного жилого дома секционного типа»</Typography>
        <Typography component="li" sx={listItemSx}>«Детский сад (организация дошкольного воспитания и обучения) на 140, 240, 280 мест в сборно-монолитном каркасе по технологии универсальной домостроительной системы» с заполнением наружных стен из штучных материалов</Typography>
        <Typography component="li" sx={listItemSx}>«Комплекс зданий и сооружений пограничной заставы (комендатуры)»</Typography>
      </Box>

      <Typography sx={yearHeadingSx}>2016 жылы</Typography>
      <Box component="ul" sx={{ pl: 3, mb: 5 }}>
        <Typography component="li" sx={listItemSx}>Экспериментальный типовой проект «9-этажный жилой дом по новой нормативной базе и ресурсным сметно-нормативным документам для пяти климатических подрайонов»</Typography>
        <Typography component="li" sx={listItemSx}>Специальный приемник для арестованных лиц с лимитом наполнения 50 мест</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

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
