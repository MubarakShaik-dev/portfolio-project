import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {
  ExperienceContainer,
  ExperienceH1,
  TabContainer,
  TabButton,
  ExperienceWrapper,
  ExperienceCard,
  ExperienceIcon,
  ExperienceH2,
  ExperienceP,
} from './styles';

const Experience = () => {
  const { projects, experienceTab, setExperienceTab, openModal } = useContext(AppContext);

  if (!projects) {
    return null; // Or a loading state
  }

  const handleTabClick = (tab) => {
    setExperienceTab(tab);
  };

  const currentProjects = projects[experienceTab] || [];

  return (
    <ExperienceContainer id="experience">
      <ExperienceH1>My Experiences</ExperienceH1>
      <TabContainer>
        <TabButton
          isActive={experienceTab === 'static'}
          onClick={() => handleTabClick('static')}
        >
          Static
        </TabButton>
        <TabButton
          isActive={experienceTab === 'responsive'}
          onClick={() => handleTabClick('responsive')}
        >
          Responsive
        </TabButton>
        <TabButton
          isActive={experienceTab === 'dynamic'}
          onClick={() => handleTabClick('dynamic')}
        >
          Dynamic
        </TabButton>
      </TabContainer>
      <ExperienceWrapper>
        {currentProjects.map((project) => (
          <ExperienceCard key={project.id} onClick={() => openModal(project.id)}>
            <ExperienceIcon src={project.imageUrl} alt={project.title} />
            <ExperienceH2>{project.title}</ExperienceH2>
            <ExperienceP>{project.tech || project.tool}</ExperienceP>
          </ExperienceCard>
        ))}
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
