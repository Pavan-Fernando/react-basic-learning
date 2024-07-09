import React from 'react';
import logo from '../../assets/react.svg';
import MenuLink from '../MenuLink/MenuLink';
import './HeaderContent.css';

function HeaderContent() {
  return (
    <div className='navcontent'>
      <a href="http://www.react.dev"><img src={logo} alt="React" /></a>
      <div>
        <MenuLink linkName="Home" url="#home"/>
        <MenuLink linkName="About" url="#about"/>
        <MenuLink linkName="Contact" url="#contact"/>
        <MenuLink linkName="Login" url="#login"/>
      </div>
    </div>
  )
}

export default HeaderContent
