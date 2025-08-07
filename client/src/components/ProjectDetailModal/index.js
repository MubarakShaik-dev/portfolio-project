import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Spinner from '../common/Spinner';
import ErrorMessage from '../common/ErrorMessage';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ProjectImage,
  ProjectTitle,
  ProjectTech,
  ProjectDescription,
  LinkContainer,
  ProjectLink,
} from './styles';
import { Helmet } from 'react-helmet';

const ProjectDetailModal = () => {
  const { isModalOpen, selectedProjectId, closeModal } = useContext(AppContext);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedProjectId) {
      const fetchProjectDetails = async () => {
        setLoading(true);
        setError(null);
        try {
          const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
          const response = await fetch(`${apiUrl}/api/projects/${selectedProjectId}`);
          if (!response.ok) {
            throw new Error('Project details could not be found.');
          }
          const data = await response.json();
          setProject(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProjectDetails();
    }
  }, [selectedProjectId]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  
  // Handle escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <ModalOverlay isOpen={isModalOpen} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <ModalContent isOpen={isModalOpen}>
        <CloseButton onClick={closeModal} aria-label="Close project details">
          <FaTimes />
        </CloseButton>
        {loading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {project && (
          <>
            <Helmet>
                <title>{`${project.title} | Mubarak Shaik`}</title>
            </Helmet>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectTech>{project.tech || project.tool}</ProjectTech>
            <ProjectDescription>{project.fullDescription}</ProjectDescription>
            <LinkContainer>
              <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </ProjectLink>
              <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </ProjectLink>
            </LinkContainer>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectDetailModal;
