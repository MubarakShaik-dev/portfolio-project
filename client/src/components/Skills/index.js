import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {
  SkillsContainer,
  SkillsH1,
  SkillsSubheading,
  FlexWrapper, // Import the new flex wrapper
  CategoryWrapper,
  CategoryTitle,
  SkillsWrapper,
  SkillCard,
  SkillIcon,
  SkillName,
  SkillDescription,
  CertificateButton,
} from './styles';
import * as FaIcons from 'react-icons/fa';

const Skills = () => {
  const { skills } = useContext(AppContext);

  if (!skills) {
    return null; // Or a loading state
  }

  const renderIcon = (iconName) => {
    const IconComponent = FaIcons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  // Separate the categories for custom layout
  const frontendSkills = skills.find(cat => cat.category === "Frontend");
  const backendSkills = skills.find(cat => cat.category === "Backend");
  const toolsSkills = skills.find(cat => cat.category === "Tools & Databases");

  // Reusable function to render a single category's content
  const renderCategoryContent = (category) => {
    if (!category) return null;
    return (
      <SkillsWrapper>
        {(category.items || []).map((skill) => (
          <SkillCard key={skill.id}>
            <div>
              <SkillIcon>{renderIcon(skill.icon)}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillDescription>{skill.description}</SkillDescription>
            </div>
            <CertificateButton
              href={skill.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certificate for ${skill.name}`}
            >
              View Certificate
            </CertificateButton>
          </SkillCard>
        ))}
      </SkillsWrapper>
    );
  };

  return (
    <SkillsContainer id="skills">
      <SkillsH1>Technical Skills</SkillsH1>
      <SkillsSubheading>
        A collection of my certified skills. Click the button on any skill to view the verified certificate.
      </SkillsSubheading>
      
      {/* Render Frontend skills on its own */}
      {frontendSkills && (
        <CategoryWrapper standalone>
            <div style={{ textAlign: 'center' }}>
                <CategoryTitle>{frontendSkills.category}</CategoryTitle>
            </div>
            {renderCategoryContent(frontendSkills)}
        </CategoryWrapper>
      )}

      {/* Render Backend and Tools side-by-side inside the FlexWrapper */}
      <FlexWrapper>
        {backendSkills && (
            <CategoryWrapper>
                <div style={{ textAlign: 'center' }}>
                    <CategoryTitle>{backendSkills.category}</CategoryTitle>
                </div>
                {renderCategoryContent(backendSkills)}
            </CategoryWrapper>
        )}
        {toolsSkills && (
            <CategoryWrapper>
                <div style={{ textAlign: 'center' }}>
                    <CategoryTitle>{toolsSkills.category}</CategoryTitle>
                </div>
                {renderCategoryContent(toolsSkills)}
            </CategoryWrapper>
        )}
      </FlexWrapper>

    </SkillsContainer>
  );
};

export default Skills;
