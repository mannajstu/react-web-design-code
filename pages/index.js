import React from 'react'
import Link from 'next/link'

import Nav from '../components/nav'
import GlobalHeader from '../components/globalheader';



const Home = () => (
  <div>
     <GlobalHeader title=""Home/>
    <Nav/>
    
    <a type="button" href="/section-1" className="btn btn-primary btn-lg btn-block">Section 1</a>
    <div className="container">
    <button type="button" className="btn btn-primary btn-block">Large button</button>
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
