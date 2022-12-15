import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import {Videos} from './';
const SearchConts = () => {


  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams()

  useEffect(()=>{
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>
    setVideos(data.items)
    )
  },[searchTerm])
  return (
    <>
      <div className='result'><em>{searchTerm}</em> 검색 결과</div>
      <div className='result__cont'>
        <Videos videos={videos} />
      </div>
    </>
  )
}

export default SearchConts