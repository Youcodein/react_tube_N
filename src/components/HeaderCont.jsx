import React from 'react'

import {SearchBar} from './'

import { SlSocialYoutube } from 'react-icons/sl'
import { Link } from 'react-router-dom'


const HeaderCont = () => {
  return (
    <div id="header">
      <h1 className="logo">
        <Link to="/">
        <SlSocialYoutube className="icon" />
        DecoTube
        </Link>
      </h1>
      <SearchBar />
    </div>
  )
}

export default HeaderCont
