import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const { disc, title } = props;
  return (
    <Container>
        
        <h1>{title}</h1>
        <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 3rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 2rem;
        padding-bottom: 7rem;
        margin-top: -1rem
    }

    p{
        font-size: 0.8rem;
    }
`