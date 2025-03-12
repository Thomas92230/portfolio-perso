import React from "react";
import styled from "styled-components";

const diplomas = [
  {
    year: "2024-2025",
    title: "POEI Concepteur d'applications Java",
    school: "Dawan", 
  },
  {
    year: "2022-2023",
    title: "Formation développeur front-end",
    school: "Openclassrooms",
  },
  {
    year: "2019-2022",
    title: "Bachelor commerce, management et communication",
    school: "ISEFAC Paris",
  },
  {
    year: "2018-2019",
    title: "Baccalauréat littérature, mention Assez Bien",
    school: "Lycée Isaac Newton",
  },
];

const Education = () => {
  return (
    <Container>
      <Title>Diplômes</Title>
      <DiplomaList>
        {diplomas.map((diploma, index) => (
          <DiplomaCard key={index}>
            <Icon>🎓</Icon>
            <DiplomaInfo>
              <Year>{diploma.year}</Year>
              <TitleText>{diploma.title}</TitleText>
              <School>{diploma.school}</School>
            </DiplomaInfo>
          </DiplomaCard>
        ))}
      </DiplomaList>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  text-align: center;
  padding: 3rem 0;
`;

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const DiplomaList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const DiplomaCard = styled.div`
  background-color: rgb(30, 31, 32);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  width: 60%;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: rgb(40, 42, 45);
  }
`;

const Icon = styled.div`
  background-color: #10b981;
  padding: 1rem;
  border-radius: 50%;
  font-size: 1.5rem;
`;

const DiplomaInfo = styled.div`
  text-align: left;
`;

const Year = styled.p`
  color: white;
  font-weight: bold;
`;

const TitleText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const School = styled.p`
  font-size: 0.9rem;
`;
