import React from 'react';
import { FaPlay, FaRedo } from 'react-icons/fa';

const Project = ({
  title,
  imageSrc,
  description,
  tags,
  demo,
  code,
  ProjectStyle,
  ProjectTitleStyle,
  ProjectImageStyle,
  ProjectActionsStyle,
  ActionButtonStyle,
  ProjectDescriptionStyle,
  ProjectTagsStyle
}) => {
  return (
    <ProjectStyle>
      <ProjectTitleStyle className="project-title">{title}</ProjectTitleStyle>
      <ProjectImageStyle className="project-image" src={imageSrc} alt={title} />
      <ProjectActionsStyle>
        <ActionButtonStyle onClick={() => window.open(demo, '_blank')}>
          <FaPlay />
        </ActionButtonStyle>
        <ActionButtonStyle onClick={() => window.open(code, '_blank')}>
          <FaRedo />
        </ActionButtonStyle>
      </ProjectActionsStyle>
      <ProjectDescriptionStyle className="project-description">
        {description}
      </ProjectDescriptionStyle>
      <ProjectTagsStyle className="project-tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </ProjectTagsStyle>
    </ProjectStyle>
  );
};

export default Project;
