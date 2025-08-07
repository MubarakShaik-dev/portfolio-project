import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  // State for theme
  const [theme, setTheme] = useState('dark');
  
  // State for projects data
  const [projects, setProjects] = useState(null);
  const [skills, setSkills] = useState(null); // New state for skills
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for experience tabs
  const [experienceTab, setExperienceTab] = useState('static');

  // State for project detail modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Modal functions
  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
  };

  // Add/remove class to body for modal open state to prevent background scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);


  const value = {
    theme,
    toggleTheme,
    projects,
    setProjects,
    skills, // Add skills to context
    setSkills, // Add setSkills to context
    loading,
    setLoading,
    error,
    setError,
    experienceTab,
    setExperienceTab,
    isModalOpen,
    selectedProjectId,
    openModal,
    closeModal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
