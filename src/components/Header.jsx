import React from 'react'
import troll from '../assets/troll-face.png'

const Header = () => {
  return (
    <div className='header'>
        <img className='header--image' src={troll} atl='troll-image' />
        <h1 className='header--title'>Meme Generator</h1>
        <h4 className='header--project'>React Course - Project 3</h4>

    </div>
  )
}

export default Header