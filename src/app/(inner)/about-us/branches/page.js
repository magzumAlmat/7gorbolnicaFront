'use client';
import { Typography, Box, Divider, Table, TableBody, TableCell, TableRow } from '@mui/material';

const NAVY = '#0F172A';
const AMBER = '#F59E0B';

const branches = [
  {
    num: '01',
    name: 'Южно-Казахстанский филиал',
    city: 'Тараз',
    address: 'г. Тараз, ул. Сулейманова, 19Б',
    phone: '+7 (7262) 43-63-99',
    email: 'yko@kazniisa.kz',
    hours: 'Пн–Пт: 9:00 – 18:30, обед 13:00 – 14:30',
    contact: 'Пак Наталия Александровна',
    desc: 'Филиал обеспечивает научно-техническое сопровождение строительных проектов на юге Казахстана. Выполняет технические обследования, нормативные и проектные работы для предприятий и государственных заказчиков Жамбылской, Туркестанской и Кызылординской областей.',
    officePhoto: '/images/kazniisa/office-taraz.jpg',
    directorPhoto: '/images/kazniisa/begimkhanova.jpg',
  },
  {
    num: '02',
    name: 'Восточно-Казахстанский филиал',
    city: 'Усть-Каменогорск',
    address: 'г. Усть-Каменогорск, ул. М. Горького, 21, оф. 203',
    phone: '8 (7232) 26-16-90',
    email: 'vko@kazniisa.kz',
    hours: 'Пн–Пт: 9:00 – 18:30, обед 13:00 – 14:30',
    desc: 'Обслуживает восток страны: техническое обследование промышленных и гражданских объектов, сейсмическая паспортизация, консультационная поддержка строительного комплекса Восточно-Казахстанской области.',
    officePhoto: '/images/kazniisa/office-vko.jpg',
    directorPhoto: '/images/kazniisa/baytemirov.jpg',
  },
  {
    num: '03',
    name: 'Астанинский филиал',
    city: 'Астана',
    address: 'г. Астана, р-н Сарыарқа, ул. Бейбітшілік, 14, оф. 1406',
    phone: '8 (7172) 57-53-03',
    email: 'crn@kazniisa.kz',
    hours: 'Пн–Пт: 9:00 – 18:30, обед 13:00 – 14:30',
    desc: 'Столичный филиал работает в тесном взаимодействии с государственными органами и крупными застройщиками. Специализируется на нормировании, экспертизе проектной документации и сопровождении строительных проектов в г. Астана и Акмолинской области.',
    officePhoto: '/images/kazniisa/office-astana.jpg',
    directorPhoto: '/images/kazniisa/khasen.jpg',
  },
];

export default function BranchesPage() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Exo 2", sans-serif',
          fontWeight: 800,
          color: NAVY,
          mb: 1,
        }}
      >
        Филиалы
      </Typography>
      <Box sx={{ width: 64, height: 4, bgcolor: AMBER, borderRadius: 2, mb: 2 }} />

      <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 4, maxWidth: 760 }}>
        АО «КазНИИСА» располагает тремя региональными филиалами, обеспечивающими охват
        научно-исследовательских и проектных услуг по всей территории Республики Казахстан.
        Каждый филиал является полноценным структурным подразделением института и ведёт
        самостоятельную производственную деятельность.
      </Typography>

      <Box
        component="img"
        src="/images/kazniisa/branches-map.webp"
        alt="Карта филиалов КазНИИСА"
        sx={{ width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 2, mb: 4 }}
      />

      <Box
        sx={{
          borderLeft: '4px solid #F59E0B',
          pl: 3,
          py: 2,
          bgcolor: '#FAFAFA',
          mb: 5,
          fontStyle: 'italic',
        }}
      >
        <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
          Филиалы КазНИИСА оказывают полный спектр услуг — от технического обследования зданий
          и сооружений до нормативно-технического консультирования — непосредственно на месте,
          без необходимости обращения в головной офис.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {branches.map((branch, i) => (
          <Box key={i}>
            <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, alignItems: 'flex-start' }}>
              <Typography
                sx={{
                  fontFamily: '"Exo 2", sans-serif',
                  fontWeight: 800,
                  fontSize: '2.5rem',
                  color: AMBER,
                  lineHeight: 1,
                  minWidth: 52,
                  flexShrink: 0,
                }}
              >
                {branch.num}
              </Typography>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Exo 2", sans-serif',
                    fontWeight: 700,
                    color: NAVY,
                    mb: 0.5,
                  }}
                >
                  {branch.name}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 600, mb: 2 }}>
                  {branch.city}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 2.5, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  <Box
                    component="img"
                    src={branch.officePhoto}
                    alt={`Офис ${branch.city}`}
                    sx={{ flex: 1, minWidth: 180, maxWidth: 340, borderRadius: 2, objectFit: 'cover', maxHeight: 180 }}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                    <Box
                      component="img"
                      src={branch.directorPhoto}
                      alt={`Директор филиала ${branch.city}`}
                      sx={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <Typography sx={{ fontSize: '0.78rem', color: '#64748B', textAlign: 'center' }}>
                      Директор филиала
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155', mb: 2.5 }}>
                  {branch.desc}
                </Typography>

                <Table size="small" sx={{ maxWidth: 620, '& td': { border: 'none', py: 0.6, px: 0 } }}>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ width: 140, color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600, verticalAlign: 'top' }}>
                        Адрес
                      </TableCell>
                      <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                        {branch.address}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                        Телефон
                      </TableCell>
                      <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                        <a
                          href={`tel:${branch.phone.replace(/[\s\-()]/g, '')}`}
                          style={{ color: NAVY, textDecoration: 'none', fontWeight: 600 }}
                        >
                          {branch.phone}
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                        E-mail
                      </TableCell>
                      <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                        <a
                          href={`mailto:${branch.email}`}
                          style={{ color: NAVY, textDecoration: 'none', fontWeight: 600 }}
                        >
                          {branch.email}
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                        Режим работы
                      </TableCell>
                      <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                        {branch.hours}
                      </TableCell>
                    </TableRow>
                    {branch.contact && (
                      <TableRow>
                        <TableCell sx={{ color: '#94A3B8', fontSize: '0.85rem', fontWeight: 600 }}>
                          Контакт
                        </TableCell>
                        <TableCell sx={{ fontSize: '1rem', lineHeight: 1.9, color: '#334155' }}>
                          {branch.contact}
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Box>
            </Box>
            {i < branches.length - 1 && <Divider sx={{ mt: 4 }} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
