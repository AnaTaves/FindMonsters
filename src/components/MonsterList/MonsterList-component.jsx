import React from 'react';
import { MonsterListContainer } from './MonsterList-styles';
import MonsterCard from '../MonsterCard/MonsterCard-component';

const MonsterList = ({monster}) =>(

  
    <MonsterListContainer>
  
     {monster.map(monster =>(
       <MonsterCard key = {monster.id} monster = {monster}/>
      )
       )}

    </MonsterListContainer>
  
)

export default MonsterList