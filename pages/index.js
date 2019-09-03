import React from 'react'
import Link from 'next/link'

import Nav from '../components/nav'
import GlobalHeader from '../components/globalheader';



const Home = () => (
  <div>
     <GlobalHeader title="Home"/>
    <Nav/>
    
    
    <div className="container mt-2">
    <a type="button" href="/section-1" className="btn btn-primary m-2">Section 1</a>
    <a type="button" href="/section-2" className="btn btn-primary m-2">Section 2</a>
    
    </div>


    
    

    <style jsx>
    
    {`
    
      .hero {
        width: 100%;
        color: #333;
      }
      
    `}</style>
  </div>
)

export default Home
