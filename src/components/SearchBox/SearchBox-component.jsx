import React from 'react';
import { SearchBoxContainer } from './SearchBox-styles';

const SearchBox = ({placeholder,handleChange}) =>(
 
  <div>

     <SearchBoxContainer
     type="search"
     placeholder={placeholder}
     onChange={handleChange}
     autoFocus />
     
   </div>
  
)

export default SearchBox