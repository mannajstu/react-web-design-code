import React, { Component } from 'react'
import Nav from '../components/nav'

import GlobalHeader from '../components/globalheader';

const Layout = props => (
    <div >
      <GlobalHeader title="Section-1"/>
        <Nav/>
  
      {props.children}
  
      
    </div>
  );

export default Layout