import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
    const projects = [
      {
        img: 'project1.jpg',
        disc: 'Description du projet 1',
        githubLink: 'https://github.com/Thomas92230/bluelp6.git'
      },
      {
        img: 'project2.jpg',
        disc: 'Description du projet 2',
        githubLink: 'https://github.com/Utilisateur/Nom-du-projet.git'
      },
      // Ajout d'autres objets 
    ];
  
    return (
      <Container id='project'>
        <Zoom>
          <h1>Projets <span className="green">récents</span></h1>
          <p>Voici une sélection des projets sur lesquels j'ai travaillé : agence de voyage, site de location immobilière, restauration ou portfolio. Pour chaque projet, j'ai su m'adapter pour satisfaire aux demandes du client, en exploitant au mieux les différentes technologies : HTML, CSS, Figma et Javascript (React).</p>
        </Zoom>
        <Slide>
          <SliderComp projects={projects} />
        </Slide>
      </Container>
    );
  };
  
  export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``