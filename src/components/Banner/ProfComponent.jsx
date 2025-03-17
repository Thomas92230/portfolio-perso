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
            <a href="/CV_Icham_BOUDEHANE.pdf" className="button" download>Télécharger CV</a>

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
  
  h1 {
    font-size: 3rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;

    @media (max-width: 1080px) {
      font-size: 2.5rem;
    }

    @media (max-width: 840px) {
      font-size: 2rem;
    }

    @media (max-width: 640px) {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem; 

    @media (max-width: 1080px) {
      font-size: 1rem;
      margin-bottom: 0.9rem;
    }

    @media (max-width: 840px) {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }

    @media (max-width: 640px) {
      font-size: 0.85rem;
      margin-bottom: 0.7rem;
    }
  }

  p {
    font-size: 1rem;

    @media (max-width: 1080px) {
      font-size: 0.9rem;
    }

    @media (max-width: 840px) {
      font-size: 0.85rem;
    }

    @media (max-width: 640px) {
      font-size: 0.8rem;
    }
  }
`;


const ButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  a.button {
    padding: 0.7rem 2rem;
    font-size: 1rem; 

    @media (max-width: 1080px) {
      padding: 0.6rem 1.8rem;
      font-size: 0.9rem;
    }

    @media (max-width: 840px) {
      padding: 0.5rem 1.6rem;
      font-size: 0.85rem;
    }

    @media (max-width: 640px) {
      padding: 0.5rem 1.4rem;
      font-size: 0.8rem;
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
  width: 100%; 
  margin-left: 12rem;

  img {
    width: 21rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    border-radius: 20%;
    margin: 0;

    @media (max-width: 1120px) and (min-width: 790px) {
      width: 20rem;   
      margin-left: -8rem; 
    }

    @media (max-width: 790px) {
      width: 100%; 
      justify-self: center;
      margin: 0;
    }

    @media (max-width: 660px) {
      width: 17rem;
      justify-self: center; 
      margin-left: 3rem;
    }

    @media (max-width: 640px) {
      width: 17rem;
      justify-self: center; 
      margin-left: 3rem;
    }
  }

  
  @media (max-width: 790px) {
    justify-content: flex-start; 
    margin: 0;
    width: 100%;
  }

  @media (max-width: 660px) {
    justify-content: center; 
    margin: 0;
    margin: 13rem;
  }

  @media (max-width: 640px) {
    justify-content: center; 
    margin: 0;
    margin: 12 rem;
  }

  &:hover img {
    transform: translateY(-10px);
  }
`;

