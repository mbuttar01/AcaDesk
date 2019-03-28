import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1><span style={{color: '#e8491d', fontWeight:'lighter'}}>Bathroom</span>Queue</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">FAQ's</Link>
    </header>
  )
}

const headerStyle = {
  fontFamily: 'montserrat',
  background: '#fff',
  textAlign: 'center',
  padding: '10px',
  font: '15px/1.6',
  color: 'black',
  fontWeight: 'lighter'
}


const linkStyle = {
  color: 'black',
  textDecoration: 'none'
}

export default Header;