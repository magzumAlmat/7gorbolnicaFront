"use client";
import React, { useState } from 'react';
import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  ListSubheader, Toolbar, Divider,
} from '@mui/material';

// Модуль новостей (полноценный CRUD)
import NewsManager from '../../components/NewsManager';

// Tier 1 — часто обновляемый контент
import AddVacancyComponent from '../../components/AddVacancy';
import PricesComponent from '../../components/Prices';
import InformationMaterialsComponent from '../../components/InformationMaterials';

// Tier 2 — документы и реестры
import AdministrationComponent from '../../components/AdministrationComponent/AdministrationComponent';
import LicensesComponent from '../../components/Licenses';
import CertificateOfAccreditationComponent from '../../components/CertificateOfAccreditation';
import CorporateDocumentComponent from '../../components/CorporateDocument';
import AntiCorruptionComponent from '../../components/Anticorruption';

// Tier 3 — раскрытие (закупки/финансы) — юридически значимые записи
import PublicProcurementPlanComponent from '../../components/PublicProcurementPlan';
import PublicProcurementAnnouncementComponent from '../../components/PublicProcurementAnnouncement';
import PublicProcurementProtocolComponent from '../../components/PublicProcurementProtocol';
import IncomeAndExpensesComponent from '../../components/AddIncomeAndExpenses';
import FinancialReportsComponent from '../../components/FinancialReports';
import ReportOnPublicServicesRenderedComponent from '../../components/RerportOnPublicServiceRendered';

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

const drawerWidth = 280;

// «Новости БОСС» — тот же модуль NewsManager, но раздел 'boss'.
const BossNewsManager = () => <NewsManager section="boss" />;

// Конфигурация разделов админ-панели, сгруппированных по тирам.
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
      { key: 'prices', label: 'Прейскурант цен', icon: <AttachMoneyIcon />, Component: PricesComponent },
      { key: 'information-materials', label: 'Информационные материалы', icon: <InfoIcon />, Component: InformationMaterialsComponent },
    ],
  },
  {
    title: 'Tier 2 · Документы и реестры',
    items: [
      { key: 'administration', label: 'Руководство', icon: <GroupsIcon />, Component: AdministrationComponent },
      { key: 'licenses', label: 'Лицензии', icon: <VerifiedUserIcon />, Component: LicensesComponent },
      { key: 'certificates', label: 'Сертификат об аккредитации', icon: <GppGoodIcon />, Component: CertificateOfAccreditationComponent },
      { key: 'corporate-documents', label: 'Корпоративные документы', icon: <DescriptionIcon />, Component: CorporateDocumentComponent },
      { key: 'anti-corruption', label: 'Противодействие коррупции', icon: <GavelIcon />, Component: AntiCorruptionComponent },
    ],
  },
  {
    title: 'Tier 3 · Раскрытие (закупки / финансы)',
    items: [
      { key: 'pp-plans', label: 'Планы госзакупок', icon: <ShoppingCartIcon />, Component: PublicProcurementPlanComponent },
      { key: 'pp-announcements', label: 'Объявления о госзакупках', icon: <CampaignIcon />, Component: PublicProcurementAnnouncementComponent },
      { key: 'pp-protocols', label: 'Протоколы госзакупок', icon: <ReceiptLongIcon />, Component: PublicProcurementProtocolComponent },
      { key: 'income-expenses', label: 'Доходы и расходы', icon: <AccountBalanceWalletIcon />, Component: IncomeAndExpensesComponent },
      { key: 'financial-reports', label: 'Финансовые отчёты', icon: <AssessmentIcon />, Component: FinancialReportsComponent },
      { key: 'public-services', label: 'Отчёты о госуслугах', icon: <SupportAgentIcon />, Component: ReportOnPublicServicesRenderedComponent },
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
