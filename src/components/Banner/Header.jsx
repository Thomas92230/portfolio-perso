import React, { useState } from 'react'
import styled from 'styled-components';
import { FiFlag } from 'react-icons/fi';

const Header = () => {
    const [bar, setBar] = useState(false);
    
    return (
        <Container bar={bar}>
            <Logo>
                <span className='green'><FiFlag/></span>
                <h1>Portfolio</h1>
            </Logo>
            <Nav bar={bar}>
                <span><a href="#home" onClick={() => setBar(false)}>Accueil</a></span>
                <span><a href="#service" onClick={() => setBar(false)}>Services</a></span>
                <span><a href="#project" onClick={() => setBar(false)}>Projets</a></span>
                <span><a href="#footer" onClick={() => setBar(false)}>Contact</a></span>
            </Nav>
            <div onClick={() => setBar(!bar)} className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;

    @media(max-width: 840px){
        width: 90%;
    }

    .bars {
        display: none;
    }

    @media(max-width:640px){
        .bars {
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            
            .bar {
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;

                :before, :after {
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before {
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after {
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
        font-size: 1.8rem;
    }

    h1 {
        font-weight: 600;
        font-size: 1.2rem;
    }
`;

const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        top: 10%;
        right: ${props => props.bar ? "5%" : "-100%"};
        width: 70%;
        padding: 1.5rem;
        border-radius: 10px;
        font-size: 1.5rem;
        gap: 1.5rem;
        font-weight: 700;
        transition: right 400ms ease-in-out;
        z-index: 99;
    }

    span {
        margin-left: 1rem;

        a {
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;

            :before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }

            :hover:before {
                transform: scale(1);
                transform-origin: left;
            }

            :hover {
                opacity: 0.7;
            }
        }
    }
`;
