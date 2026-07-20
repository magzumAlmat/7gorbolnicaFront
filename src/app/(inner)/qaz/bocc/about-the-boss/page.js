'use client';
import { Typography, Box, Grid, Table, TableBody, TableRow, TableCell } from '@mui/material';

const NAVY = '#0F172A';
const BLUE = '#0369A1';
const BLUE_LIGHT = '#EFF6FF';
const GRAY_BG = '#F8FAFC';
const GRAY_TEXT = '#64748B';
const BORDER = '#E2E8F0';

const board = [
  ['1', 'Қазақстан Республикасы', 'Кульбаев Бегман Бахитұлы', 'Байқау кеңесінің төрағасы, ТМД-ға қатысушы мемлекеттердің Сейсмикаға төзімді құрылыс саласындағы базалық ұйымының басшысы, Қазақ құрылыс және сәулет ғылыми-зерттеу және жобалау институтының («ҚазҚСҒЗИ» АҚ) Бас директоры'],
  ['2', 'Қазақстан Республикасы', 'Бижанов Тимур Алиханұлы', 'ҚжТКШІК Мемлекеттік сәулет-құрылыс бақылау басқармасының басшысы'],
  ['3', 'Қазақстан Республикасы', 'Шоқбаров Ералы Мейрамбекұлы', 'Базалық ұйым басшысының орынбасары-базалық ұйымның үйлестірушісі, «ҚазҚСҒЗИ» АҚ өндіріс жөніндегі басқарушы директоры'],
  ['4', 'Қазақстан Республикасы', 'Темірәліұлы Ғани', 'Базалық ұйымның хатшысы, «ҚазҚСҒЗИ» АҚ Ғимараттар мен құрылыстардың сейсмикаға төзімділік секторының жетекші инженері'],
  ['5', 'Армения Республикасы', 'Адамян Рузан Мартуновна', 'АР Қала құрылысы комитетінің құрылыс және ғылыми-техникалық нормалау басқармасының бастығы'],
  ['6', 'Беларусь Республикасы', 'Чик Владимир Михайлович', '«С.С. Атаев атындағы ҚҒЗЖТИ - тұрғын үй институты» мемлекеттік кәсіпорнының директоры'],
  ['7', 'Қырғыз Республикасы', 'Акматалиев Мирбек Акматалиевич', 'Қырғызстан Мемқұрылыс директорының орынбасары'],
  ['8', 'Молдова Республикасы', 'Коропчан Иван Семенович', 'Молдова Республикасының Экономика және инфрақұрылым министрлігі'],
  ['9', 'Ресей Федерациясы', 'Гурьев Владимир Владимирович', '«ФСО» ФАМ ғылыми жетекшісі'],
  ['10', 'Ресей Федерациясы', 'Акбиев Рустам Тоганович', '«Ресей Құрылыс министрлігінің ОҒЗЖИ» ФМБМ Ғылыми-техникалық сараптамалық кеңесінің төрағасы'],
  ['11', 'Тәжікстан Республикасы', 'Саломов Муродбек Мухторович', 'Тәжікстан Республикасы Үкіметі жанындағы Сәулет және құрылыс комитетінің «Құрылыс және сәулет ғылыми-зерттеу институты» мемлекеттік унитарлық кәсіпорнының директоры'],
  ['12', 'Түрікменстан', 'Аннамуратов Байраммурат Авезмурадович', 'Түркіменстан Құрылыс және сәулет министрлігінің Сейсмикаға төзімді құрылыс ғылыми-зерттеу институты директорының ғылыми жұмыс жөніндегі орынбасары'],
  ['13', 'Өзбекстан Республикасы', 'Содиков Боходир Сабиржанович', 'Өзбекстан Республикасы Құрылыс министрлігі Нормалау, жаңа технологияларды енгізу басқармасының бастығы'],
];

export default function AboutTheBoss() {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: 800, color: NAVY, mb: 1 }}>
        СҚБҰ туралы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 4 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 3 }}>
        Ұйым ТМД елдерінің сейсмикалық қауіпті аумақтарында құрылыс кезінде қауіпсіздіктің
        жоғары деңгейін қамтамасыз ету үшін мемлекеттер арасындағы ынтымақтастықты
        дамытумен айналысады.
      </Typography>

      <Box sx={{ bgcolor: BLUE_LIGHT, borderLeft: '4px solid ' + BLUE, borderRadius: '0 6px 6px 0', p: 3, mb: 4 }}>
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', fontStyle: 'italic' }}>
          ТМД-ға қатысушы мемлекеттердің сейсмикаға төзімді құрылысы саласындағы базалық ұйым
          мәртебесі «ҚазҚСҒЗИ» АҚ-ға 2019 жылы берілді.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { name: 'Бегман Кульбаев', role: 'ТМД елдерінің Сейсмикаға төзімді құрылысы саласындағы базалық ұйымның төрағасы' },
          { name: 'Ералы Шокбаров', role: 'ТМД елдерінің сейсмикаға төзімді құрылысы саласындағы базалық ұйым төрағасының орынбасары' },
          { name: 'Гани Темиралиулы', role: 'ТМД елдерінің Сейсмикаға төзімді құрылыс саласындағы базалық ұйымның хатшысы' },
        ].map((person) => (
          <Grid item xs={12} sm={4} key={person.name}>
            <Box sx={{
              p: 2,
              border: '1px solid ' + BORDER,
              borderRadius: '6px',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
            }}>
              <Typography sx={{ fontWeight: 700, color: NAVY, fontSize: '1rem' }}>{person.name}</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: GRAY_TEXT, lineHeight: 1.6 }}>{person.role}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Құжаттар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {[
          'Решение Экономического совета СНГ от 21 июня 2019 года о Базовой организации',
          'Положение о Базовой организации',
          'План работы БОСС 2019-2020 г.',
          'План работы БОСС 2021 г.',
        ].map((doc) => (
          <Box component="li" key={doc} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{doc}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Базалық ұйымның байқау кеңесінің құрамы
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box sx={{ overflowX: 'auto', mb: 4 }}>
        <Table sx={{ border: '1px solid ' + BORDER, minWidth: 640 }}>
          <TableBody>
            {board.map(([num, country, name, position]) => (
              <TableRow key={num} sx={{ '&:nth-of-type(odd)': { bgcolor: GRAY_BG } }}>
                <TableCell sx={{ fontWeight: 700, color: NAVY, verticalAlign: 'top', py: 1.5, width: 32 }}>{num}</TableCell>
                <TableCell sx={{ fontWeight: 700, color: NAVY, verticalAlign: 'top', py: 1.5, width: '18%' }}>{country}</TableCell>
                <TableCell sx={{ color: '#334155', fontSize: '0.95rem', verticalAlign: 'top', py: 1.5, width: '22%' }}>{name}</TableCell>
                <TableCell sx={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.7, verticalAlign: 'top', py: 1.5 }}>{position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Мансабымыз
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2 }}>
        Базалық ұйымдар қызметінің негізгі бағыттары:
      </Typography>

      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {[
          'ынтымақтастықтың түрлі салаларында ТМД – ға қатысушы мемлекеттердің мамандарын даярлау, қайта даярлау және олардың біліктілігін арттыру',
          'ТМД – ға мүдделі қатысушы мемлекеттердің бірлескен ғылыми зерттеулерін жүргізу',
          'нормативтік базаны үйлестіру және біріздендіру бойынша ұсынымдар әзірлеу, тиісті жобаларды дайындау, нормативтік құқықтық актілермен алмасу',
          'халықаралық ғылыми-практикалық конференциялар, семинарлар мен симпозиумдар өткізу',
          'ғылыми, әдістемелік, ақпараттық-талдау материалдарын және басқаларын дайындау',
        ].map((item) => (
          <Box component="li" key={item} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{item}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 700, color: NAVY, fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
        Оқиғалар
      </Typography>
      <Box sx={{ width: 48, height: 3, bgcolor: BLUE, borderRadius: 1, mt: 1.5, mb: 3 }} />

      <Box component="ul" sx={{ pl: 3 }}>
        {[
          '1-нші отырыс — Қараша 13, 2019, 09:00 - 19:00, Алматы қаласы, Қажымұқан көшесі, 49 үй ("Shera Inn Hotel" қонақ үйі)',
          '2-нші отырыс — Желтоқсан 25, 2020, 14:00 - 19:00, 3 шағынауданы 44а Алматы қ.',
        ].map((event) => (
          <Box component="li" key={event} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>{event}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
