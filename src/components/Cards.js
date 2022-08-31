import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const CardBox = styled.div`
  text-align: center;
  width: 250px;
  height: 250px;
  margin: 1rem;
  padding: 1rem;
  background: #D8D8D8;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 

  p{
    font-size: 0.8rem;
  }
`

const Cards = ({results}) => {
  return (
    <CardContainer>
      {
      results && results.map(result => (
        <CardBox>
        <h1>{ result.id }</h1>
        <h3>{ result.title }</h3>
        <p>{ result.body }</p>
        </CardBox>
      )) 
      }
    </CardContainer>
  )
}

export default Cards