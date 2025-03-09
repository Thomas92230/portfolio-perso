import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Bonjour, <span className="green"> je suis </span>
          </h4>
          <h1 className="green">Icham BOUDEHANE</h1>
          <h3>développeur front et concepteur d’applications</h3>
          <p>
            Je suis développeur spécialisé dans les applications React, mais je
            maîtrise également divers autres langages. Actuellement concepteur
            d'applications au sein de l'entreprise Dawan, je suis ouvert à toute
            opportunité professionnelle. Passionné, créatif et curieux, je
            souhaite continuer à évoluer dans ce métier qui me passionne. Le
            travail d'équipe ne m'effraie pas, et je suis mobile dans toute la
            région parisienne.
          </p>
          <ButtonsContainer>
            <a href="#footer" className="button">Contact</a>
            <a href="/cv.pdf" className="button">Télécharger CV</a>
          </ButtonsContainer>
          <Social>
            <p>Jetez un coup d'œil à mon</p>
            <div className="social-icons">
              <span>
                <a href="https://www.linkedin.com/in/icham-boudehane-sport/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="https://images.wakelet.com/resize?id=xD7IqHyYsfA3I_Nog7OUz&h=1024&w=768&q=85#"
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Texts = styled.div`
  flex: 1;
  max-width: 600px;
  
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }

  h1 {
    font-size: 3rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }

  h3 {
    font-weight: 500;
    font-size: 1.1rem;
    padding-bottom: 1.2rem;
    text-transform: lowercase;
  }

  h3::first-letter {
    text-transform: uppercase;
  }

  p {
    font-weight: 300;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  a.button {
    padding: 0.7rem 2rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    filter: drop-shadow(0px 10px 10px #01be9551);
    transition: filter 400ms ease-in-out;

    &:hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;

    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;

      &:hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: flex-end; 
  width: 185%; 
  

  img {
    width: 23rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    border-radius: 20%;

    @media (max-width: 790px) {
      width: 22rem;
    }

    @media (max-width: 660px) {
      width: 20rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  &:hover img {
    transform: translateY(-10px);
  }
`;
