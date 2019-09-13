import React, { Component } from 'react'
import Nav from '../components/nav'

import GlobalHeader from '../components/globalheader';
import Head from 'next/head'
 class Layout extends Component {
  render() {
    return (
      <div >
        <Head>
        <title>{this.props.title} </title>
     </Head>
      <GlobalHeader />
        <Nav/>
  
      {this.props.children}
  
      
    </div>
    )
  }
}
export default Layout