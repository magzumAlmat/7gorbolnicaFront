"use client";
import React, { useState } from 'react';
import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  ListSubheader, Toolbar, Divider,
} from '@mui/material';

// Новости (полноценный CRUD)
import NewsManager from '../../components/NewsManager';
// Особые формы (текст / люди)
import AddVacancyComponent from '../../components/AddVacancy';
import AdministrationComponent from '../../components/AdministrationComponent/AdministrationComponent';
import ContactsManager from '../../components/ContactsManager';
// Единый компонент для файловых реестров + конфиги ресурсов
import FileRegistry from '../../components/FileRegistry';
import { REGISTRIES } from '../../components/FileRegistry/configs';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import FeedIcon from '@mui/icons-material/Feed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppGoodIcon from '@mui/icons-material/GppGood';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CampaignIcon from '@mui/icons-material/Campaign';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const drawerWidth = 280;

// «Новости БОСС» — тот же NewsManager, раздел 'boss'.
const BossNewsManager = () => <NewsManager section="boss" />;
// Файловый реестр по ключу конфига (стабильная ссылка на компонент).
const registry = (key) => () => <FileRegistry {...REGISTRIES[key]} />;

const GROUPS = [
  {
    title: null,
    items: [
      { key: 'news', label: 'Новости', icon: <NewspaperIcon />, Component: NewsManager },
      { key: 'boss-news', label: 'Новости БОСС', icon: <FeedIcon />, Component: BossNewsManager },
    ],
  },
  {
    title: 'Tier 1 · Контент',
    items: [
      { key: 'vacancies', label: 'Вакансии', icon: <WorkOutlineIcon />, Component: AddVacancyComponent },
      { key: 'prices', label: 'Прейскурант цен', icon: <AttachMoneyIcon />, Component: registry('prices') },
      { key: 'information-materials', label: 'Информационные материалы', icon: <InfoIcon />, Component: registry('information-materials') },
    ],
  },
  {
    title: 'Tier 2 · Документы и реестры',
    items: [
      { key: 'administration', label: 'Руководство', icon: <GroupsIcon />, Component: AdministrationComponent },
      { key: 'contacts', label: 'Контакты и филиалы', icon: <ContactPhoneIcon />, Component: ContactsManager },
      { key: 'licenses', label: 'Лицензии', icon: <VerifiedUserIcon />, Component: registry('licenses') },
      { key: 'certificates', label: 'Сертификат об аккредитации', icon: <GppGoodIcon />, Component: registry('certificates') },
      { key: 'corporate-documents', label: 'Корпоративные документы', icon: <DescriptionIcon />, Component: registry('corporate-documents') },
      { key: 'anti-corruption', label: 'Противодействие коррупции', icon: <GavelIcon />, Component: registry('anti-corruption') },
    ],
  },
  {
    title: 'Tier 3 · Раскрытие (закупки / финансы)',
    items: [
      { key: 'pp-plans', label: 'Планы госзакупок', icon: <ShoppingCartIcon />, Component: registry('pp-plans') },
      { key: 'pp-announcements', label: 'Объявления о госзакупках', icon: <CampaignIcon />, Component: registry('pp-announcements') },
      { key: 'pp-protocols', label: 'Протоколы госзакупок', icon: <ReceiptLongIcon />, Component: registry('pp-protocols') },
      { key: 'income-expenses', label: 'Доходы и расходы', icon: <AccountBalanceWalletIcon />, Component: registry('income-expenses') },
      { key: 'financial-reports', label: 'Финансовые отчёты', icon: <AssessmentIcon />, Component: registry('financial-reports') },
      { key: 'public-services', label: 'Отчёты о госуслугах', icon: <SupportAgentIcon />, Component: registry('public-services') },
    ],
  },
];

const ALL_ITEMS = GROUPS.flatMap((g) => g.items);

const AuthorizedDashboardPage = () => {
  const [active, setActive] = useState('news');

  const ActiveComponent = (ALL_ITEMS.find((i) => i.key === active) || ALL_ITEMS[0]).Component;

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          {GROUPS.map((group, gi) => (
            <React.Fragment key={gi}>
              {group.title && (
                <ListSubheader
                  disableSticky
                  sx={{ fontWeight: 700, color: '#0C2340', lineHeight: 2.4, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}
                >
                  {group.title}
                </ListSubheader>
              )}
              <List dense disablePadding>
                {group.items.map((item) => (
                  <ListItem key={item.key} disablePadding>
                    <ListItemButton
                      selected={active === item.key}
                      onClick={() => setActive(item.key)}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.9rem' }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              {gi < GROUPS.length - 1 && <Divider sx={{ my: 0.5 }} />}
            </React.Fragment>
          ))}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
        <ActiveComponent />
      </Box>
    </Box>
  );
};

export default AuthorizedDashboardPage;
