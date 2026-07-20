'use client';
import { Typography, Box, Grid, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const services = [
  { title: 'Ғимараттар мен құрылыстардың конструкцияларын эксперименттік және теориялық зерттеу', desc: 'Статикалық және вибродинамикалық сынақтар.' },
  { title: 'Жер сілкінісінен зардап шеккен объектілерді жедел тексеру', desc: 'Жер сілкінісі, техногендік зілзалалар мен апаттар салдарынан зардап шеккен ғимараттар мен құрылыстарды жедел тексеру.' },
  { title: 'Қолданыстағы ғимараттардың сейсмикаға төзімділігін зерттеу', desc: 'Ғимараттар мен құрылыстарды нығайту бойынша ұсынымдар әзірлей отырып, қолданыстағы құрылыс ғимараттарының сейсмикаға төзімділігін зерттеу және бағалау.' },
  { title: 'Есептеу және жаңа құрылымдық шешімдер әзірлеу', desc: 'Ғимараттарды есептеу және ғимараттар мен құрылыстардың жаңа құрылымдық шешімдерін әзірлеу.' },
  { title: 'Нормативтік-техникалық құжаттарды әзірлеу', desc: 'Нормативтік-техникалық құжаттарды әзірлеу және жетілдіру.' },
  { title: 'Жоғары объектілер үшін техникалық шарттар', desc: 'Жоғары қабатты объектілерді, сондай-ақ сейсмикалық 9 және одан жоғары балл алаңдарында орналасқан объектілерді жобалауға Техникалық Шарттарды әзірлеу.' },
];

const docTemplates = [
  { label: 'Доступ – на каз для юр. лиц (ОТЛИЧАЮТСЯ ОТ РУСС ЗАЯВЛ)', href: 'https://docs.google.com/document/d/17MASuI3cDh8GKfwqDZQYDVxDtUblX9D6/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – на каз о возм-ти переп-ки кв-ры (ПО ДОВЕР)', href: 'https://docs.google.com/document/d/1n6T95Q85tMvetugfUj5s3ctS0neykCK7/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – на каз о возм-ти переп-ки нежилого помещения (ПО ДОВЕР)', href: 'https://docs.google.com/document/d/1IiHEQxNo1Jd-ZG74fHeJGPuRDMNr64Cg/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – на каз о возм-ти устр. пристройки (ПО ДОВЕР)', href: 'https://docs.google.com/document/d/1IBQKMH2Y2uHUuaOLowjLoUovHEG8MccZ/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – на каз о т-с дачного дома (ПО ДОВЕР)', href: 'https://docs.google.com/document/d/1IgyZFqeP82OePaY9SOc_fZUiaxZoNgoy/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – на каз о т-с жилого дома', href: 'https://docs.google.com/document/d/1hPmo7aAfkM1Da6Dx1QiQwdi3dLjAD_Y4/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – на каз о т-с пристройки (ПО ДОВЕР)', href: 'https://docs.google.com/document/d/1lMFLwHXWDAzQxMgBH_H4pH-w6PWCCceF/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – на каз по выпол. переп-ке кв-ры (ПО ДОВЕР)', href: 'https://docs.google.com/document/d/1Az_J2ynL6alFl5kJBNf3aRs7DVidVASJ/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – на каз по выпол. переп-ке нежилого помещения (ПО ДОВЕР)', href: 'https://docs.google.com/document/d/16u7XGhqzI4sL2OXCOd6HRaZL0C2Hg8AO/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о возм. переп-ки кв-ры (от хозяина)', href: 'https://docs.google.com/document/d/14RQq0x7FYulhVT_gaJvzOXxv1VgLczCc/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о возм. переп-ки кв-ры (по довер-ти)', href: 'https://docs.google.com/document/d/1X55MeD4ue1f6Vu3nRRjpemEK37o5Ykjm/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о возм. переп-ки нежилого помещения (от хозяина)', href: 'https://docs.google.com/document/d/1K_2fLEsp8i5Mp34PyMQXtoKO--5g6VNJ/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о возм. переп-ки нежилого помещения (по довер-ти)', href: 'https://docs.google.com/document/d/1Ix7HmLzwg2mE9bbzzOdwvvYsH10PJac2/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о возм. устр. пристройки (от хозяина).', href: 'https://docs.google.com/document/d/1lY6hmr5ecxChihrxPF0bjVpXKp7DbuaO/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о возм. устр. пристройки (по довер-ти)', href: 'https://docs.google.com/document/d/1CCUHGTPR3a5_Gn5E4UjHzgPiVWfgWa3F/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о т-с дачного дома (от хозяина)', href: 'https://docs.google.com/document/d/1qvRJ6YiJxijO4AIWwHKGVogsyrGbW_6p/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о т-с дачного дома (по довер-ти)', href: 'https://docs.google.com/document/d/1HfaSFdSRaqsxmv-1lWmJnCOdvUUfcuyl/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о т-с жилого дома (от хозяина)', href: 'https://docs.google.com/document/d/1-MsRYqZkfey6sPpsWmdDIILe5t-39gON/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о т-с жилого дома (по довер-ти)', href: 'https://docs.google.com/document/d/10U6g-1VYfmfYewxCRRRsYbzhqanuwPzb/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о т-с нежилого помещения (от хозяина).', href: 'https://docs.google.com/document/d/1_HS-JVsIuiXM3AadotM5-qhRxUfVIP-S/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о т-с нежилого помещения (по довер-ти)', href: 'https://docs.google.com/document/d/18xf_LLK3gcvX_Mn862fgATxVepPib298/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – о т-с пристройки (по довер-ти)', href: 'https://docs.google.com/document/d/1rMNn7TH4EKCSdf9aOx3jR0iwYJV-Npr2/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – по выпол. переп-ке кв-ры (от хозяина)', href: 'https://docs.google.com/document/d/1vwKD_XHHSa_pZpFOhmUHzqJUUUaM4wlq/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – по выпол. переп-ке кв-ры (по довер-ти).', href: 'https://docs.google.com/document/d/1vSoPjH9AmaceOFb9Kc6YCEocvPGFbuYx/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – по выпол. переп-ке нежилого помещения (от хозяина)', href: 'https://docs.google.com/document/d/19ChOE0ndGli1XDS_sSDpJPpXKsPUibcQ/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
  { label: 'Доступ – по выпол. переп-ке нежилого помещения (по довер-ти)', href: 'https://docs.google.com/document/d/1r3ZIPHlQEkCZpjVlJipJiTW0xmtydbPm/edit?usp=sharing&ouid=106836340272140290365&rtpof=true&sd=true' },
];

export default function SeismicCenterPage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Сейсмикаға төзімділік, ғимараттар мен құрылыстарды тексеру орталығы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        СҒҚТО тарихи тұрғыдан сейсмикаға төзімді құрылыс саласындағы үздік қазақстандық ғалымдар мен ғылыми
        зерттеулердің орталығына айналды.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Біздің институт инженерлік сейсмологияға, құрылыс динамикасына, басқару теориясына, кибернетикаға, механикаға негізделген сейсмикаға төзімді құрылыс ғылымының дамуымен кеңінен танымал.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Бүгінгі таңда институтта бұрын жинақталған ғылыми тәжірибе үнемі жетілдіріліп отырады, жаңа зерттеулер жүргізілуде, СҒҚТО-ның нақты сейсмикаға төзімді құрылысқа қосқан үлесі артып келеді.
      </Typography>

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Орталық 2010 жылы сейсмикаға төзімді құрылыс саласындағы жұмыстарды үйлестіру мақсатында құрылды.
      </Typography>

      <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.98rem', mb: 1 }}>
        СҒҚТО қызметкерлерінің орташа тізімдік саны:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        <Typography component="li" sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 0.5 }}>
          4 зертхана және 10 сектор, штатта 55 адам, 9 адам ғылыми дәрежеге ие.
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 0.5 }}>
          Аттестованных экспертов по техническому обследованию зданий и сооружений имеют — 29 сотрудников.
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 0.5 }}>
          Аттестованных экспертов по осуществлению экспертизы градостроительной, предпроектной и проектно-сметной документации) по конструктивной части — 1 сотрудник.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, p: 2, bgcolor: BLUE_LIGHT, borderRadius: '6px', borderLeft: '4px solid ' + BLUE }}>
        <PersonIcon sx={{ color: BLUE, fontSize: 22 }} />
        <Box>
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem' }}>Алдахов Еркен Серикович</Typography>
          <Typography sx={{ fontSize: '0.82rem', color: GRAY_TEXT }}>Директор – сейсмикалық төзімділік, ғимараттар мен құрылыстарды тексеру орталығы</Typography>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 3 }}>
        Орталық қызметтері
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {services.map((s, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Box sx={{ p: 2.5, border: '1px solid ' + BORDER, borderRadius: '6px', height: '100%', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.06)' } }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', mb: 1 }}>{s.title}</Typography>
              <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155' }}>{s.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ bgcolor: NAVY, borderRadius: '6px', p: 4, mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Байланыстар:</Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
        <Typography sx={{ color: '#CBD5E1', fontSize: '0.92rem' }}>050046, Ул.Сатпаева 88Г г. Алматы</Typography>
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 1 }}>
        Оқу
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 2 }} />
      <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.95rem', mb: 2 }}>
        Техникалық есептерді шығаруға арналған өтінімдердің үлгілері
      </Typography>
      <Box component="ol" sx={{ pl: 3, mb: 5 }}>
        {docTemplates.map((d, i) => (
          <Typography component="li" key={i} sx={{ fontSize: '0.88rem', lineHeight: 1.9, mb: 0.5 }}>
            <Box
              component="a"
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: BLUE, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              {d.label}
            </Box>
          </Typography>
        ))}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.15rem', mb: 0.5 }}>
        Экспериментальные работы
      </Typography>
      <Typography sx={{ fontSize: '0.85rem', color: GRAY_TEXT, mb: 1 }}>
        Натурные вибродинамические испытания высотных зданий
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mb: 3 }} />

      <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 1 }}>
        В период с 2005 по 2019 года, на экспериментальном стенде, было выполнено более 60 экспериментальных вибродинамических испытаний:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          фрагментов ненесущих ограждающих стеновых конструкций и перегородок;
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          фасадных систем «Алюгал» с фасадными элементами «Алюкотте», «Натуральный камень», «Керамическая натуральная плитка»;
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          навесных фасадных систем «СИАЛ» с каменными и керамическими плитами;
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          несущих конструкций из местных материалов (саман), газобетоных блоков, финблоки;
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          навесные фасады из хризотилцементных листов;
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          фиброцементные панели японской компании KMEW и многое другое.
        </Typography>
      </Box>

      <Box sx={{ p: 2, mb: 3, border: '1px solid #F87171', borderRadius: '6px', bgcolor: '#FEF2F2' }}>
        <Typography sx={{ fontSize: '0.92rem', color: '#B91C1C', fontWeight: 600 }}>
          Не пытайтесь повторить это дома.
        </Typography>
      </Box>

      <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        На сегодняшний день специалистами ЦСОЗС АО «КазНИИСА» проведено 17 натурных вибродинамических испытаний построенных в городах Алматы, Шымкент и Капшагай.
      </Typography>

      <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Все экспериментальные исследования, были выполнены на специальном экспериментальном стенде, представляющем собой ячейку двухэтажного стального каркаса.
      </Typography>

      <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 1 }}>
        Экспериментальный стенд, был построен в 2004 году и представляет собой каркасное сооружение, размерами в плане 6,0×6,0 метра, высотой 6,6 метра и включает:
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 3 }}>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          4 угловые колонны (К-1) коробчатого сечения (2Гн[280×140×8);
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          ригели покрытия и нижнего яруса, двутаврового сечения Р1 (полка 2-120×8, стенка 300×5);
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          ригели промежуточного яруса, двутаврового сечения Р2 (полка 2-120×12, стенка 340×8);
        </Typography>
        <Typography component="li" sx={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#334155', mb: 0.5 }}>
          промежуточные стойки, двутаврового сечения СП (полка 2-120×10, стенка 200×5), расположенные по внешнему контуру фрагмента.
        </Typography>
      </Box>

      <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Конструктивные элементы опытного фрагмента изготовлены из стали марки С345.
      </Typography>
      <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#334155', mb: 5 }}>
        Перекрытия – монолитные железобетонные плиты толщиной 150 мм, объединенные арматурными выпусками с ригелями каркаса. В уровне покрытия, на отм. 6,6 метра, толщина плиты составляла 200 мм.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link href="/qaz/centres" style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BLUE, paddingBottom: 1 }}>
          ← Орталықтар
        </Link>
      </Box>
    </Box>
  );
}
