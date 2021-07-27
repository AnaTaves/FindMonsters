import React from 'react';
import { CardContainer } from './MonsterCard-styles';

const MonsterCard = ({monster}) =>(
  
  <CardContainer>
    <img 
    alt="monster" 
    src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>

  <h1>{monster.name}</h1>
  <p>{monster.email}</p>

 
</CardContainer>
)

  
   
  


export default MonsterCard