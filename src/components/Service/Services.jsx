import React from "react";
import { Slide } from "react-awesome-reveal";
import styled, { keyframes, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  .iWgENy {
    background-color:rgb(30, 31, 32) !important;
  }
`;


const skills = [
  { name: "HTML", image: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", image: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "SCSS", image: "https://cdn.worldvectorlogo.com/logos/sass-1.svg" },
  { name: "JavaScript", image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "PHP", image: "https://cdn.worldvectorlogo.com/logos/php-1.svg" },
  { name: "Java", image: "https://cdn.worldvectorlogo.com/logos/java.svg" },
  { name: "Spring Boot", image: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
  { name: "Git", image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  { name: "Maven", image: "https://cdn.worldvectorlogo.com/logos/maven-3.svg" },
  { name: "Angular", image: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
  { name: "MongoDB", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" }
];

const marqueeAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
`;

const Header = styled.div`
  h4 {
    font-size: 1.25rem;
    color: white;
  }
  h1 {
    padding-top: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }
  .green {
    color: #10b981;
  }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const MarqueeContent = styled.div`
  display: flex;
  width: calc(200%);
  animation: ${marqueeAnimation} 20s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const Card = styled.div`
  background: white; 
  width: 150px;
  height: 150px;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  margin: 0 1rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }
`;

const SkillCard = ({ name, image }) => {
  return (
    <Card>
      <img src={image} alt={name} />
      <p>{name}</p>
    </Card>
  );
};

const SkillsMarquee = () => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        {/* Duplication du tableau pour un défilement continu */}
        {skills.concat(skills).map((skill, index) => (
          <SkillCard key={index} name={skill.name} image={skill.image} />
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

const SkillsSection = () => {
  return (
    <>
      <GlobalStyle />
      <Container id="service">
        <Slide direction="down">
          <Header>
            <h4>Compétences</h4>
            <h1>
              Technologies <span className="green">maîtrisées</span>
            </h1>
          </Header>
        </Slide>
        <Slide direction="up">
          <SkillsMarquee />
        </Slide>
      </Container>
    </>
  );
};

export default SkillsSection;
