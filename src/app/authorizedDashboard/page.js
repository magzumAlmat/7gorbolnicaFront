"use client";
import React, { useState } from 'react';
import AdministrationComponent from '../../components/AdministrationComponent/AdministrationComponent';
import AddVacancyComponent from '../../components/AddVacancy';
import IncomeAndExpensesComponent from '../../components/AddIncomeAndExpenses';
import FinancialReportsComponent from '../../components/FinancialReports';
import LicensesComponent from '../../components/Licenses';
import AntiCorruptionComponent from '../../components/Anticorruption';
import CertificateOfAccreditationComponent from '../../components/CertificateOfAccreditation';
import ReportOnPublicServicesRenderedComponent from '../../components/RerportOnPublicServiceRendered';
import CorporateDocumentComponent from '../../components/CorporateDocument';
import PricesComponent from '../../components/Prices';
import InformationMaterialsComponent from '../../components/InformationMaterials';
import PublicProcurementPlanComponent from '../../components/PublicProcurementPlan';
import PublicProcurementAnnouncementComponent from '../../components/PublicProcurementAnnouncement';
import PublicProcurementProtocolComponent from '../../components/PublicProcurementProtocol';
import MajorPage from '../major/page'; // Import the MajorPage
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GavelIcon from '@mui/icons-material/Gavel';
import GppGoodIcon from '@mui/icons-material/GppGood';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CampaignIcon from '@mui/icons-material/Campaign';
import NewspaperIcon from '@mui/icons-material/Newspaper'; // Import NewspaperIcon

const drawerWidth = 240;

const AuthorizedDashboardPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'administration':
        return <AdministrationComponent />;
      case 'vacancies':
        return <AddVacancyComponent />;
      case 'income-expenses':
        return <IncomeAndExpensesComponent />;
      case 'financial-reports':
        return <FinancialReportsComponent />;
      case 'licenses':
        return <LicensesComponent />;
      case 'anti-corruption':
        return <AntiCorruptionComponent />;
      case 'certificates':
        return <CertificateOfAccreditationComponent />;
      case 'public-services-reports':
        return <ReportOnPublicServicesRenderedComponent />;
      case 'corporate-documents':
        return <CorporateDocumentComponent />;
      case 'prices':
        return <PricesComponent />;
      case 'information-materials':
        return <InformationMaterialsComponent />;
      case 'public-procurement-plans':
        return <PublicProcurementPlanComponent />;
      case 'public-procurement-announcements':
        return <PublicProcurementAnnouncementComponent />;
      case 'public-procurement-protocols':
        return <PublicProcurementProtocolComponent />;
      case 'news-editing': // New case for news editing
        return <MajorPage />;
      default:
        return (
          <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4" color="text.secondary">
              Welcome to the Authorized Dashboard!
            </Typography>
          </Box>
        );
    }
  };

  if (activeComponent === 'news-editing') {
    return <MajorPage />;
  }

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
          <List>

            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('news-editing')}>
                <ListItemIcon>
                  <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="Редактирование Новостей" />
              </ListItemButton>
            </ListItem>

            
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('administration')}>
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Добавить администрацию" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('vacancies')}>
                <ListItemIcon>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Вакансии" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('income-expenses')}>
                <ListItemIcon>
                  <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText primary="Доходы и расходы" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('financial-reports')}>
                <ListItemIcon>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary="Финансовые отчеты" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('licenses')}>
                <ListItemIcon>
                  <VerifiedUserIcon />
                </ListItemIcon>
                <ListItemText primary="Лицензии" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('anti-corruption')}>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="Противодействие коррупции" />
              </ListItemButton>
            </ListItem>

   <ListItem disablePadding>
 <ListItemButton onClick={() => setActiveComponent('certificates')}>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="Cертификат об аккредитации" />
              </ListItemButton>
            </ListItem>


 <ListItem disablePadding>
 <ListItemButton onClick={() => setActiveComponent('public-services-reports')}>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="Отчеты о государственных услугах" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('corporate-documents')}>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="Корпоративные документы" />
              </ListItemButton>
            </ListItem>


             <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('prices')}>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="Прейскупант цен" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('information-materials')}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Информационные материалы" />
              </ListItemButton>
            </ListItem>

 <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('public-procurement-plans')}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Планы государственных закупок" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('public-procurement-announcements')}>
                <ListItemIcon>
                  <CampaignIcon />
                </ListItemIcon>
                <ListItemText primary="Объявления о государственных закупках" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveComponent('public-procurement-protocols')}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Протоколы государственных закупок" />
              </ListItemButton>
            </ListItem>

            {/* New menu item for News Editing */}
            


          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
        {renderComponent()}
      </Box>
    </Box>
  );
};

export default AuthorizedDashboardPage;
