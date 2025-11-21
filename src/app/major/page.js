"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserProjectsAction,
  addProjectAction,
  getAllAdminTemplateAction,
  logout,
} from "../../store/slices/authSlice";
import { Modal, Box, TextField, Button, Typography, Grid, Divider, IconButton, AppBar, Toolbar } from "@mui/material";
import leftArrow from "@/../../public/icons/arrow-left-solid.svg";
import Image from "next/image";

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const ProjectRender = dynamic(() => import('../../components/projectrender'), { ssr: false });
// const ProjectDetails = dynamic(() => import('../../components/projectdetails'), { ssr: false }); // ProjectDetails is no longer directly used here for document display

import ProjectDocumentsList from '../../components/ProjectDocumentsList'; // New import
import DocumentDetails from '../../components/DocumentDetails'; // New import

import jwt_decode from "jwt-decode";

export default function MajorPage() { // Renamed to MajorPage for clarity
  
  const allUserProjects = useSelector((state) => state.auth.allProjects);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null); // New state for document selection
  const [decoded, setDecoded] = useState(null);


  console.log('1 allUserProjects= ',allUserProjects)
  console.log('2 currentUser= ',currentUser)
  

  const router = useRouter();
  console.log(decoded);

  useEffect(() => {
    // Проверяем токен при загрузке
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/"); // Перенаправляем на логин
    }
  }, [router]);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
    setSelectedDocumentId(null); // Reset document selection when a new project is selected
  };

  const handleDocumentClick = (documentId) => {
    setSelectedDocumentId(documentId);
  };

  useEffect(() => {
    dispatch(getAllUserProjectsAction());
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwt_decode(token);
        setDecoded(decodedToken);
        console.log(decodedToken);
      }
    }
  }, []);

  const handleOpenModal = () => {
    
    setOpenModal(true);
  };

  if (typeof window !== 'undefined') {
    // Browser-specific code
  }

  const Logout=()=>{
    dispatch(logout());
    router.push('/')
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateProject = async () => {
    // Add your validation logic here if needed
    if (newProjectName.trim() === "") {
      // Handle error
      return;
    }
    await dispatch(addProjectAction(newProjectName));
    handleCloseModal();
  };

  const handleBackClick = () => {
    if (selectedDocumentId) {
      setSelectedDocumentId(null); // Go back from document details to project documents list
    } else if (selectedProjectId) {
      setSelectedProjectId(null); // Go back from project documents list to all projects
    }
    // If neither is selected, do nothing or handle global back if needed
  };

  const getNavbarTitle = () => {
    if (selectedDocumentId) {
      return "Детали новости";
    } else if (selectedProjectId) {
      return "Новость";
    }
    return "Проекты";
  };

  return (
    <Grid container>
      <Grid item xs={2} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'background.paper', // Equivalent to bg-light
        minHeight: '100vh', // Equivalent to min-vh-100
        borderRight: 1,
        borderColor: 'divider'
      }} className="noprint">
        <Typography variant="h5" sx={{ p: 3, textAlign: 'center' }}>Новости</Typography>
        <Divider sx={{ width: '80%' }} />
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="body1">{decoded ? decoded.email : 'Loading...'}</Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={Logout}
            sx={{ mt: 1 }}
          >
            Выход
          </Button>
        </Box>
      </Grid>
      <Grid item xs={10}>
        <AppBar position="static" color="default" elevation={1} sx={{ mb: 2 }} className="noprint">
          <Toolbar>
            {(selectedProjectId || selectedDocumentId) ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  onClick={handleBackClick}
                  color="warning"
                  aria-label="back"
                >
                  <Image
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                    src={leftArrow}
                    alt="Back"
                  />
                </IconButton>
                <Typography variant="subtitle1">{getNavbarTitle()}</Typography>
              </Box>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleOpenModal}
                >
                  + Создать Категорию новости
                </Button>
                <Modal
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Новая категория новости
                    </Typography>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Название проекта"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={newProjectName}
                      onChange={(e) => setNewProjectName(e.target.value)}
                    />
                    <Button onClick={handleCreateProject} color="primary" sx={{ mt: 2 }}>
                      Создать
                    </Button>
                  </Box>
                </Modal>
              </>
            )}
          </Toolbar>
        </AppBar>

        <Grid container>
          {selectedDocumentId ? (
            <DocumentDetails documentId={selectedDocumentId} />
          ) : selectedProjectId ? (
            <ProjectDocumentsList projectId={selectedProjectId} onDocumentClick={handleDocumentClick} />
          ) : (
            <ProjectRender
              allProjects={allUserProjects}
              onProjectClick={handleProjectClick}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
