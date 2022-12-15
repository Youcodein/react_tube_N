import React, {useState} from 'react'

import { RiSearchLine } from 'react-icons/ri'

import { useNavigate } from 'react-router-dom';


const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onKeyPress = (e) => {
    if(e.charCode === 13){
      handleSearch()
    }
  }

  const handleSearch = () => {
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      searchTerm('')
    }
    console.log('dd')
  }

  return (
    <div className="search" onKeyPress={onKeyPress}>
        <label className="glass" htmlFor="searchInput">
          <RiSearchLine />
        </label>
        <input
          type="text"
          id="searchInput"
          className="input__search"
          placeholder="다양한 유튜버를 검색하세요!"
          title="검색"
          value={searchTerm || ''}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>
  )
}

export default SearchBar