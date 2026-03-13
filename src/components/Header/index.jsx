// src/components/Header/index.jsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  AppBar, Toolbar, Container, IconButton, Drawer, List, ListItemButton,
  ListItemText, Box, Button, useTheme, alpha, Collapse, Typography,
  Grid, Paper, Divider, Menu, MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import * as React from 'react';

// === ДАННЫЕ ОФИСОВ ===
const officesData = [
  { id: 0, city: "Офис Алматы №1", address: "3 микрорайон 44-а", phone: "8 (727) 226 94 10", email: "info@kazniisa.kz", hours: "Пн-Пт 9:00-18:30, обед 13:00-14:30" },
  { id: 1, city: "Офис Алматы №2", address: "Ул.Сатпаева 88Г", phone: "8 (727) 338 30 22", email: "info@kazniisa.kz", hours: "Пн-Пт 9:00-18:30, обед 13:00-14:30" },
  { id: 2, city: "Офис Тараз", address: "ул. Сулейманова, 19 Б", phone: "+7 (7262) 43-63-99", email: "yko@kazniisa.kz", hours: "Пн-Пт 9:00-18:30, обед 13:00-14:30" },
  { id: 3, city: "Офис Усть-Каменогорск", address: "ул. М.Горького, 21", phone: "8 (7232) 26-16-90", email: "vko@kazniisa.kz", hours: "Пн-Пт 9:00-18:30, обед 13:00-14:30" },
  { id: 4, city: "Офис Астана", address: "р-н Сарыарқа, ул. Бейбітшілік 14", phone: "8 (7172) 57-53-03", email: "crn@kazniisa.kz", hours: "Пн-Пт 9:00-18:30, обед 13:00-14:30" },
];

// === ДАННЫЕ МЕНЮ (структура kazniisa.kz) ===
const menuData = [
  { title: "Главная", path: "/", icon: true },
  {
    title: "О нас", path: "/about-us",
    submenu: [
      { title: "Руководство", path: "/about-us/governing-bodies" },
      { title: "Контакты", path: "/about-us/contacts" },
      { title: "Филиалы", path: "/about-us/branches" },
      { title: "Корпоративные документы", path: "/about-us/corporate-documents" },
      { title: "История КазНИИСА", path: "/about-us/history-kazniisa" },
      { title: "Вакансии", path: "/about-us/vacancies" },
    ]
  },
  {
    title: "Центры", path: "/centres",
    submenu: [
      { title: "Центр науки и цифровизации", path: "/centres/center-for-science-and-digitalization-of-construction" },
      { title: "Центр нормирования", path: "/centres/center-for-regulation-in-construction" },
      { title: "Центр типового проектирования", path: "/centres/center-for-standard-and-individual-design" },
      { title: "Центр сейсмостойкости", path: "/centres/center-for-seismic-resistance-inspection-of-buildings-and-structures" },
      { title: "Корпоративный университет", path: "/centres/corporate-university" },
    ]
  },
  {
    title: "Наука", path: "/science",
    submenu: [
      { title: "Журнал «Вестник»", path: "/science/vestnik" },
      { title: "Ученый секретарь", path: "/science/secretary" },
      { title: "Ученый совет", path: "/science/council" },
      { title: "Научно-исследовательская работа", path: "/science/research" },
    ]
  },
  {
    title: "ТИМСО", path: "/timso",
    submenu: [
      { title: "Общая информация", path: "/timso" },
      { title: "Реестр участников", path: "/timso/registry" },
      { title: "Нормативные документы", path: "/timso/docs" },
    ]
  },
  {
    title: "БОСС", path: "/bocc",
    submenu: [
      { title: "Общая информация", path: "/bocc" },
    ]
  },
  {
    title: "BuildingSMART", path: "/buildingsmart",
    submenu: [
      { title: "Общая информация", path: "/buildingsmart" },
      { title: "Реестр участников", path: "/buildingsmart/registry" },
      { title: "Мероприятия", path: "/buildingsmart/events" },
    ]
  },
  { title: "Еврокоды", path: "/eurocode" },
  {
    title: "Противодействие коррупции", path: "/anti-corruption",
    submenu: [
      { title: "Антикоррупционная политика", path: "/anti-corruption" },
      { title: "Телефон доверия", path: "/anti-corruption#hotline" },
    ]
  },
];

// === СТИЛИ (точная копия kazniisa.kz) ===

const TopBarWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#002e5b',
  color: '#ffffff',
  fontSize: '13px',
  lineHeight: '40px',
  position: 'relative',
  zIndex: 1100,
}));

const TopBarInfo = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  alignItems: 'center',
  gap: '20px',
  '& li': {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    whiteSpace: 'nowrap',
  },
});

const NavItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$active'
})(({ theme, $active }) => ({
  position: 'relative',
  '& > a, & > button': {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '0 14px',
    height: '70px',
    lineHeight: '70px',
    fontSize: '14px',
    fontWeight: 600,
    color: $active ? '#2887B6' : '#333',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
    '&:hover': {
      color: '#2887B6',
    },
  },
}));

const DropdownMenu = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  minWidth: '260px',
  backgroundColor: '#ffffff',
  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
  borderTop: '3px solid #2887B6',
  zIndex: 1000,
  padding: '8px 0',
  '& a': {
    display: 'block',
    padding: '8px 20px',
    fontSize: '13px',
    color: '#333',
    textDecoration: 'none',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      color: '#2887B6',
      paddingLeft: '24px',
    },
  },
}));

// === МОБИЛЬНОЕ МЕНЮ ===
const MobileMenuItem = ({ item, depth = 0, toggleDrawer }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = pathname === item.path;

  return (
    <Box>
      <ListItemButton
        component={item.submenu ? 'div' : Link}
        href={item.submenu ? undefined : item.path}
        onClick={(e) => {
          if (item.submenu) { e.preventDefault(); setOpen(!open); }
          else { toggleDrawer(false)(); }
        }}
        sx={{
          pl: 2 + depth * 2, py: 1,
          color: active ? '#2887B6' : '#333',
          '&:hover': { bgcolor: '#f0f7fc' },
        }}
      >
        <ListItemText primary={item.title} primaryTypographyProps={{ fontSize: '14px', fontWeight: active ? 700 : 500 }} />
        {item.submenu && <KeyboardArrowDown sx={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s', fontSize: 20 }} />}
      </ListItemButton>
      {item.submenu && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ borderLeft: '2px solid #2887B6', ml: 2 }}>
            {item.submenu.map(sub => (
              <MobileMenuItem key={sub.path + sub.title} item={sub} depth={depth + 1} toggleDrawer={toggleDrawer} />
            ))}
          </List>
        </Collapse>
      )}
    </Box>
  );
};

// === ГЛАВНЫЙ КОМПОНЕНТ ===
export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(officesData[0]);
  const [officeOpen, setOfficeOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleDrawer = (open) => () => setMobileOpen(open);

  return (
    <>
      {/* === TOP BAR (тёмно-синяя полоса сверху) === */}
      <TopBarWrapper sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 40 }}>
            {/* Левая часть: офис-свитчер + инфо */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* Переключатель офиса */}
              <Box
                sx={{ position: 'relative', cursor: 'pointer' }}
                onMouseEnter={() => setOfficeOpen(true)}
                onMouseLeave={() => setOfficeOpen(false)}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '13px', fontWeight: 600 }}>
                  {selectedOffice.city}
                  <KeyboardArrowDown sx={{ fontSize: 18 }} />
                </Box>
                {officeOpen && (
                  <Box sx={{
                    position: 'absolute', top: '100%', left: 0, bgcolor: '#002e5b',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)', zIndex: 1200, minWidth: 200,
                    borderTop: '2px solid #2887B6',
                  }}>
                    {officesData.map(office => (
                      <Box
                        key={office.id}
                        onClick={() => { setSelectedOffice(office); setOfficeOpen(false); }}
                        sx={{
                          px: 2, py: 0.8, fontSize: '13px', cursor: 'pointer',
                          bgcolor: selectedOffice.id === office.id ? 'rgba(40,135,182,0.2)' : 'transparent',
                          '&:hover': { bgcolor: 'rgba(40,135,182,0.15)' },
                        }}
                      >
                        {office.city}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>

              {/* Контактная информация офиса */}
              <TopBarInfo>
                <li>
                  <LocationOnIcon sx={{ fontSize: 15, color: '#2887B6' }} />
                  <span>{selectedOffice.address}</span>
                </li>
                <li>
                  <AccessTimeIcon sx={{ fontSize: 15, color: '#2887B6' }} />
                  <span>{selectedOffice.hours}</span>
                </li>
                <li>
                  <EmailIcon sx={{ fontSize: 15, color: '#2887B6' }} />
                  <span>{selectedOffice.email}</span>
                </li>
                <li>
                  <PhoneIcon sx={{ fontSize: 15, color: '#2887B6' }} />
                  <span style={{ fontWeight: 600 }}>{selectedOffice.phone}</span>
                </li>
              </TopBarInfo>
            </Box>

            {/* Правая часть: соцсети + поиск + язык */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <IconButton size="small" sx={{ color: 'white', '&:hover': { color: '#2887B6' } }}>
                <FacebookIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton size="small" sx={{ color: 'white', '&:hover': { color: '#2887B6' } }}>
                <InstagramIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <IconButton size="small" onClick={() => setSearchOpen(!searchOpen)} sx={{ color: 'white', '&:hover': { color: '#2887B6' } }}>
                <SearchIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.2)', mx: 0.5 }} />
              {/* Языки */}
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {[{ code: 'RU', href: '/' }, { code: 'QAZ', href: '/qaz/' }, { code: 'ENG', href: '/eng/' }].map(lang => (
                  <Box
                    key={lang.code}
                    component={Link}
                    href={lang.href}
                    sx={{
                      fontSize: '12px', fontWeight: lang.code === 'RU' ? 700 : 400,
                      color: lang.code === 'RU' ? '#FDE428' : 'rgba(255,255,255,0.7)',
                      textDecoration: 'none', px: 0.5,
                      '&:hover': { color: '#FDE428' },
                    }}
                  >
                    {lang.code}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </TopBarWrapper>

      {/* === MAIN HEADER (белая навигация) === */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: '#ffffff',
          borderBottom: '1px solid #e8e8e8',
          zIndex: 1050,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', height: 70 }}>
            {/* Логотип */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', marginRight: '30px', flexShrink: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{
                  width: 50, height: 50,
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <Image src="/logo.png" alt="Logo" width={50} height={50} style={{ objectFit: 'contain' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '16px', color: '#002e5b', lineHeight: 1.2 }}>
                    КазНИИСА
                  </Typography>
                  <Typography sx={{ fontSize: '10px', color: '#666', lineHeight: 1.2 }}>
                    АО «КазНИИСА»
                  </Typography>
                </Box>
              </Box>
            </Link>

            {/* Навигация (десктоп) */}
            <Box
              sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', flexGrow: 1 }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {menuData.map((item) => (
                <NavItem
                  key={item.title}
                  $active={pathname === item.path || (item.path !== '/' && item.path !== '#' && pathname.startsWith(item.path))}
                  onMouseEnter={() => item.submenu ? setActiveDropdown(item.title) : setActiveDropdown(null)}
                >
                  {item.icon ? (
                    <Link href={item.path}>
                      <HomeIcon sx={{ fontSize: 20 }} />
                    </Link>
                  ) : (
                    <Link href={item.path}>
                      {item.title}
                      {item.submenu && <KeyboardArrowDown sx={{ fontSize: 16, ml: 0.25 }} />}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.submenu && activeDropdown === item.title && (
                    <DropdownMenu>
                      {item.submenu.map(sub => (
                        <Link key={sub.path + sub.title} href={sub.path} onClick={() => setActiveDropdown(null)}>
                          {sub.title}
                        </Link>
                      ))}
                    </DropdownMenu>
                  )}
                </NavItem>
              ))}
            </Box>

            {/* Мобильная кнопка */}
            <IconButton onClick={toggleDrawer(true)} sx={{ display: { lg: 'none' }, ml: 'auto' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      {/* === МОБИЛЬНОЕ МЕНЮ === */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: '85vw', maxWidth: 360 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, bgcolor: '#002e5b', color: 'white' }}>
          <Typography fontWeight={700} fontSize="15px">АО «КазНИИСА»</Typography>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 1.5, bgcolor: '#f5f5f5' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {officesData.map(o => (
              <Button
                key={o.id} size="small"
                variant={selectedOffice.id === o.id ? 'contained' : 'text'}
                onClick={() => setSelectedOffice(o)}
                sx={{
                  fontSize: '11px', px: 1, py: 0.25, minWidth: 0, textTransform: 'none',
                  bgcolor: selectedOffice.id === o.id ? '#2887B6' : 'transparent',
                  color: selectedOffice.id === o.id ? 'white' : '#333',
                }}
              >
                {o.city.replace('Офис ', '')}
              </Button>
            ))}
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
            📍 {selectedOffice.address} • 📞 {selectedOffice.phone}
          </Typography>
        </Box>
        <Divider />
        <List sx={{ pt: 0, flexGrow: 1, overflowY: 'auto' }}>
          {menuData.map(item => (
            <MobileMenuItem key={item.title} item={item} toggleDrawer={toggleDrawer} />
          ))}
        </List>
      </Drawer>
    </>
  );
}