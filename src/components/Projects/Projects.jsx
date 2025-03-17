import React from 'react';
import styled, { keyframes } from 'styled-components';
import Project from './Project';
import { projectsData } from '../../components/data/projectsData';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0px, 20px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOutRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 2rem;
  margin-top: -1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem;
`;

const HeaderTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 3rem;
  font-family: var(--primaryFont);
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 2.5rem;
  width: 90%;
  max-width: 1400px;
  margin: auto;
`;

const ProjectStyle = styled.div`
  background-color: rgb(30, 31, 32);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  &:hover .project-description {
    animation: ${fadeIn} 1000ms both;
    opacity: 1;
    height: auto;
  }

  &:hover .project-title,
  &:hover .project-image {
    animation: ${fadeOut} 1000ms both;
  }

  &:hover .project-tags {
    animation: ${fadeInRight} 1000ms both;
    opacity: 1;
    height: auto;
  }
`;

const ProjectTitleStyle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 15px;
  color: white;
  transition: opacity 1000ms;
`;

const ProjectImageStyle = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: opacity 1000ms;
`;

const ProjectActionsStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ActionButtonStyle = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgb(4, 185, 146);
  }
`;

const ProjectDescriptionStyle = styled.div`
  background: #01be96;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  opacity: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
  top: 15%;
  right: 5%;
  transform: translate(-50%, -50%);
  width: calc(100% - 40px);
  text-align: center;
  max-height: 150px;
  overflow-y: auto;
`;

const ProjectTagsStyle = styled.div`
  background: #01be96;
  color: #fff;
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 1rem;
  opacity: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
  bottom: 20px;
  right: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 1000ms;
`;

const Projects = () => {
  return (
    <ProjectsContainer id ="project">
      <Header>
        <HeaderTitle>Projets</HeaderTitle>
      </Header>
      <Body>
        <BodyContainer>
          {projectsData.map((project) => (
            <Project
              key={project.id}
              title={project.projectName}
              imageSrc={project.image}
              description={project.projectDesc}
              tags={project.tags}
              demo={project.demo}
              code={project.code}
              ProjectStyle={ProjectStyle}
              ProjectTitleStyle={ProjectTitleStyle}
              ProjectImageStyle={ProjectImageStyle}
              ProjectActionsStyle={ProjectActionsStyle}
              ActionButtonStyle={ActionButtonStyle}
              ProjectDescriptionStyle={ProjectDescriptionStyle}
              ProjectTagsStyle={ProjectTagsStyle}
            />
          ))}
        </BodyContainer>
      </Body>
    </ProjectsContainer>
  );
};

export default Projects;