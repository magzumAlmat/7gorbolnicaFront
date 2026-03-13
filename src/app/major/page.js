"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserProjectsAction,
  addProjectAction,
  logout,
} from "../../store/slices/authSlice";
import { Modal, Box, TextField, Button, Typography, Grid, AppBar, Toolbar, IconButton, Divider } from "@mui/material";
import leftArrow from "@/../../public/icons/arrow-left-solid.svg";
import Image from "next/image";

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
const ProjectRender = dynamic(() => import('../../components/projectrender'), { ssr: false });
const ProjectDetails = dynamic(() => import('../../components/projectdetails'), { ssr: false });

import jwt_decode from "jwt-decode";

export default function Page() {
  const allUserProjects = useSelector((state) => state.auth.allProjects);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [decoded, setDecoded] = useState(null);
  const router = useRouter();

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
  };

  useEffect(() => {
    dispatch(getAllUserProjectsAction());
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken = jwt_decode(token);
          setDecoded(decodedToken);
        } catch (e) {
          console.error("Invalid token:", e);
          dispatch(logout());
          router.push('/');
        }
      } else {
        router.push('/');
      }
    }
  }, [dispatch, router]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const Logout = () => {
    dispatch(logout());
    router.push('/');
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateProject = async () => {
    if (newProjectName.trim() === "") {
      return;
    }
    await dispatch(addProjectAction(newProjectName));
    setNewProjectName("");
    handleCloseModal();
  };

  const handleBackClick = () => {
    setSelectedProjectId(null);
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={12} md={2.5} sx={{
        display: 'flex', flexDirection: 'column', 
        bgcolor: 'background.paper',
        borderRight: { md: 1 }, borderColor: 'divider'
      }}>
        <Box sx={{ p: 2, textAlign: 'center', borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6" component="h1" sx={{ fontWeight: 'bold' }}>KazNIISA Editor</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
            {/* Can add a list of main navigation items here if needed */}
        </Box>
        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>{decoded ? decoded.email : 'Loading...'}</Typography>
          <Button fullWidth variant="outlined" color="error" onClick={Logout} sx={{ mt: 1 }}>Выход</Button>
        </Box>
      </Grid>
      
      <Grid item xs={12} md={9.5}>
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Toolbar>
            {selectedProjectId ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={handleBackClick} edge="start">
                  <Image src={leftArrow} alt="Back" width={16} height={16} />
                </IconButton>
                <Typography variant="h6">Документы</Typography>
              </Box>
            ) : (
              <Typography variant="h6">Проекты</Typography>
            )}
            <Box sx={{ flexGrow: 1 }} />
             {!selectedProjectId && (
                <Button variant="contained" color="primary" onClick={handleOpenModal}>
                    + Создать Проект
                </Button>
             )}
          </Toolbar>
        </AppBar>
        
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="create-project-modal-title"
        >
          <Box sx={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)", width: { xs: '90%', sm: 400 },
            bgcolor: "background.paper", boxShadow: 24, p: 4, borderRadius: 2
          }}>
            <Typography id="create-project-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
              Новый проект
            </Typography>
            <TextField
              autoFocus margin="dense" id="name" label="Название проекта"
              type="text" fullWidth variant="outlined"
              value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)}
            />
            <Button onClick={handleCreateProject} color="primary" sx={{ mt: 3 }} variant="contained" fullWidth>
              Создать
            </Button>
          </Box>
        </Modal>

        <Box sx={{ p: { xs: 2, md: 3 }, height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
          {selectedProjectId ? (
            <ProjectDetails projectId={selectedProjectId} />
          ) : (
            <ProjectRender
              allProjects={allUserProjects}
              onProjectClick={handleProjectClick}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}