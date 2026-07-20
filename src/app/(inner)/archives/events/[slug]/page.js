'use client';
import { useParams } from 'next/navigation';
import { Typography, Box, Divider, Chip } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const EVENTS = {
  '1-st-meeting': {
    title: '1-е ЗАСЕДАНИЕ',
    subtitle: 'Базовая организация государств-участников СНГ в области сейсмостойкого строительства (БОСС)',
    date: '13–16 ноября 2019',
    time: '09:00 - 19:00',
    place: 'г. Алматы, ул. Кажымукана, д. 49 (отель «Shera Inn Hotel»)',
    phone: '8 (727) 226 94 10',
    body: [
      'Событие представляет собой четырёхдневное заседание Базовой организации государств-участников СНГ в области сейсмостойкого строительства (БОСС). На встречу приезжают представители различных стран СНГ.',
      'День 1 (13 ноября): Прибытие участников в Алматы и размещение в отеле.',
      'День 2 (14 ноября): Основной рабочий день с докладами руководителей и круглым столом, завершающийся официальным ужином.',
      'День 3 (15 ноября): Экскурсионная программа – посещение строящихся объектов, виброиспытательной базы ЦНИИЛ, горного курорта «Шымбулак» и парка «Кок Тобе».',
      'День 4 (16 ноября): Отъезд участников с индивидуальной программой.',
      'Доступны документы: состав участников, повестка от 14.11.2019 и подписанная резолюция.',
    ],
  },
  '2st-meeting': {
    title: '2-е ЗАСЕДАНИЕ',
    subtitle: 'Базовая организация государств-участников СНГ в области сейсмостойкого строительства (БОСС)',
    date: '25 декабря 2020',
    time: '14:00 - 19:00',
    place: '3 микрорайон 44А, г. Алматы',
    phone: '8 (727) 226 94 10',
    body: [
      'Программа заседания Базовой организации государств-участников СНГ в области сейсмостойкого строительства, проведённая в Алматы.',
      'Приветственное слово руководителя организации Кульбаева Бегмана Бахитовича с информацией об итогах деятельности.',
      'Приветственное слово руководителя секретариата Межправительственного совета.',
      'Доклад заместителя руководителя о целесообразности разработки единых норм строительства в сейсмических районах.',
      'Обмен мнениями учёных и специалистов СНГ.',
      'Утверждение плана работ на 2021 год.',
      'Подведение итогов и подписание резолюции.',
      'К событию прилагались документы: состав участников, повестка и резолюция заседания.',
    ],
  },
  'bim-club-of-central-asia': {
    title: 'BIM Клуб Центральной Азии',
    subtitle: null,
    date: '7 апреля 2025 года',
    time: '09:00 - 18:30',
    place: '3 микрорайон 44А, г. Алматы',
    phone: '8 (727) 226 94 10 (вн 118)',
    body: [
      'Профессиональное сообщество, объединяющее лидеров в области цифровизации строительной отрасли региона. Встреча пройдёт в онлайн и оффлайн форматах, с участием 25 участников из 13 организаций.',
      'Программа мероприятия:',
      '09:00 — 09:30 — Регистрация, приветственный кофе.',
      '09:30 — 10:30 — Налаживание сотрудничества между BIM-специалистами.',
      '10:30 — 11:30 — Обсуждение актуальных задач цифровизации.',
      '11:30 — 12:30 — Совместные шаги по развитию технологий информационного моделирования.',
      '12:30 — 13:30 — Обеденный перерыв.',
      '13:30 — 14:30 — Подтверждение статуса BIM-лидеров.',
      '14:30 — 15:30 — Присвоение статуса новым участникам.',
      '15:30 — 16:30 — Работа над обновлением BIM-шаблонов Autodesk Revit.',
      '16:30 — 17:30 — Обсуждение ключевых разделов шаблонов.',
      '17:30 — 18:30 — Открытая дискуссия, подведение итогов, неформальное общение.',
    ],
  },
  'buildingsmart-kazakhstan-conference-awards': {
    title: 'BuildingSMART Kazakhstan Conference & Awards',
    subtitle: 'Первая Национальная Премия и конференция, посвящённая цифровому строительству и openBIM',
    date: '23 октября 2025 года',
    time: '09:00 - 19:00',
    place: 'The Ritz-Carlton, Алматы (Ballroom), проспект Аль-Фараби 77/7, Алматы',
    phone: '+7 (747) 793 16 65, +7 (701) 816 74 81',
    body: [
      'Мероприятие объединяет лидеров цифровой трансформации строительства, экспертов, компании и профильные вузы для обсуждения практического внедрения технологий и стратегий цифровой трансформации строительной отрасли.',
      'В программе предусмотрены выступления международных экспертов, представителей министерств Республики Казахстан, лидеров строительных и девелоперских компаний Казахстана, тематические сессии и обмен опытом.',
      'Церемония вручения BuildingSMART Awards отметит наиболее успешные проекты и инициативы в области BIM в Казахстане.',
    ],
  },
  'jsc-kazniisa-at-the-summit-buildingsmart-2025-in-singapore': {
    title: 'АО «КазНИИСА» принимает участие в международном саммите buildingSMART International Summit – Singapore 2025',
    subtitle: 'Международный саммит по цифровизации строительства',
    date: '18–20 марта 2025',
    time: '09:00 - 18:30',
    place: 'Сингапур',
    phone: '8 (727) 226 94 10 (вн 118)',
    body: [
      'КазНИИСА участвует в международном саммите buildingSMART, проходящем совместно с BuildTech Asia Exhibition 2025.',
      'Основные темы включают: OpenBIM Mandate (обязательность использования открытых стандартов данных в строительстве), применение искусственного интеллекта в проектировании и строительстве, развитие формата IFC5 для обмена данными о строительных объектах, а также «стандарты и требования к информации о строительных компонентах».',
      'Представитель организации: Зарина Кабжан, начальник отдела менеджмента Центра информационного моделирования.',
      'Программа включает: церемонию открытия, сессии по обязательному использованию openBIM, панельные дискуссии, рабочие сессии, нетворкинг-мероприятия, экзамены профессиональной сертификации и заключительное пленарное заседание.',
    ],
  },
};

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const event = EVENTS[slug];

  if (!event) {
    return (
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
          Событие не найдено
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4 }}>
          Запрашиваемое событие отсутствует или было перемещено.
        </Typography>
        <Link
          href="/buildingsmart/events-buildingsmart"
          style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}
        >
          ← Все мероприятия
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        {event.title}
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 2 }} />

      {event.subtitle && (
        <Chip
          label={event.subtitle}
          sx={{
            bgcolor: BLUE_LIGHT,
            color: BLUE,
            fontWeight: 600,
            mb: 3,
            height: 'auto',
            py: 1,
            '& .MuiChip-label': { whiteSpace: 'normal', lineHeight: 1.4 },
          }}
        />
      )}

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <EventIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{event.date}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <AccessTimeIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{event.time}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
          <LocationOnIcon sx={{ color: BLUE, fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{event.place}</Typography>
        </Box>
        {event.phone && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1.5, bgcolor: BLUE_LIGHT, borderRadius: '6px' }}>
            <PhoneIcon sx={{ color: BLUE, fontSize: 20 }} />
            <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '0.9rem' }}>{event.phone}</Typography>
          </Box>
        )}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {event.body.map((p, i) => (
        <Typography key={i} sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
          {p}
        </Typography>
      ))}

      <Divider sx={{ my: 4 }} />

      <Link
        href="/buildingsmart/events-buildingsmart"
        style={{ color: NAVY, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid ' + BORDER, paddingBottom: 1 }}
      >
        ← Все мероприятия
      </Link>
    </Box>
  );
}
