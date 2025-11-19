"use client";
import React, { useState } from 'react';
import AdministrationComponent from '../../components/AdministrationComponent/AdministrationComponent';
import AddVacancyComponent from '../../components/AddVacancy';
import IncomeAndExpensesComponent from '../../components/AddIncomeAndExpenses';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

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
