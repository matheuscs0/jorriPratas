import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SearchInput.css'
import {Ri24HoursLine, RiSearch2Line} from 'react-icons/ri'

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search-results?query=${searchText}`);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className='formSearch'>
        <input type="text" value={searchText} onChange={handleSearchInputChange} placeholder="Digite sua pesquisa" />
        <button type="submit"><RiSearch2Line/></button>
      </form>
    </div>
  );
};

export default SearchInput;






