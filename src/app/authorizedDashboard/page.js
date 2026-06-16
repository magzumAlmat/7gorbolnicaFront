"use client";
import React, { useState } from 'react';
import NewsManager from '../../components/NewsManager'; // Полноценный модуль управления новостями
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const drawerWidth = 240;

const AuthorizedDashboardPage = () => {
  // Сейчас в панели только раздел «Новости». Остальные разделы удалены —
  // будут добавляться обратно как полноценные CRUD-модули по мере необходимости.
  const [activeComponent, setActiveComponent] = useState('news-editing');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'news-editing':
        return <NewsManager />;
      default:
        return <NewsManager />;
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
              <ListItemButton
                selected={activeComponent === 'news-editing'}
                onClick={() => setActiveComponent('news-editing')}
              >
                <ListItemIcon>
                  <NewspaperIcon />
                </ListItemIcon>
                <ListItemText primary="Редактирование Новостей" />
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
