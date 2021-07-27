import React, { useState,useEffect } from "react"
import MonsterList from "./components/MonsterList/MonsterList-component"
import SearchBox from "./components/SearchBox/SearchBox-component"

import {GlobalStyle} from "./Global-Style";
import { AppContainer,Title } from './App-styles';


export default function App() {

  const [monster,setMonster] = useState([])
  const [search,setSearch] = useState("")
  
  const filteredMonsters = monster.filter(monster =>
    monster.name.toLowerCase().includes(search.toLowerCase()))

  const  handleChange = e =>{
    setSearch(e.target.value)
  }

  useEffect(() =>
      {
    const fetchData = async() => { 
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const newData = await(response.json())
        setMonster(newData)
      }
     fetchData()

  },[])
 
  return (
   
    <AppContainer>
      <GlobalStyle/>
      <Title>Meet Monsters!</Title>
      <SearchBox 
      placeholder = "Search Monsters..."
      handleChange={handleChange}/>

      <MonsterList monster = {filteredMonsters}/>
      

    </AppContainer>
   
  );
}
