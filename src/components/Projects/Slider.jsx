import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
      img: "https://images.wakelet.com/resize?id=T5nR1rHmkEY6G6u6qLhsY&h=362&w=768&q=85#",
      disc: "Site de location immobilère, pour voyager dans le monde entier avec Kasa",
      githubLink: "https://github.com/Thomas92230/Projet-8.git"
  },
  {
      img: "https://images.wakelet.com/resize?id=bKUVTeH2MObleP16eLsDw&h=348&w=768&q=85#",
      disc: "Un portfolio permettant de faire connaître son identité professionnelle, ses projets, ses compétences et ses coordonnées",
      githubLink: "https://github.com/Thomas92230/bluelp6.git"
  },
  {
      img: "https://images.wakelet.com/resize?id=EvH6Cy01UoG62tOspcK7n&h=361&w=768&q=85#",
      disc: "Ohmyfood, un site de restauration, sur lequel des centaines de restaurateurs proposent leurs menus",
      githubLink: "https://github.com/Utilisateur/Nom-du-projet3.git"
  },
  {
      img: "https://images.wakelet.com/resize?id=TXUVXGxVo40tsaEwey-Jk&h=341&w=768&q=85#",
      disc: "Site pour une agence d'évènementiel qui organise des prestations partout dans le monde",
      githubLink: "https://github.com/Thomas92230/724Events.git"
  },
  {
      img: "https://images.wakelet.com/resize?id=5iWgIF_aR8nr_abxId6ga&h=349&w=768&q=85#",
      disc: "Application bancaire pour une nouvelle banque en ligne, l'utilisateur peut accéder à son compte via l'interface de connexion",
      githubLink: "https://github.com/Thomas92230/ARGENT-Bank.git"
  }
];


var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`