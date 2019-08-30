import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'


const Home = () => (
  <div>
     <Head>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"  />
     </Head>
    
    <Nav />
    <button type="button" className="btn btn-primary btn-lg btn-block">Large button</button>
<button type="button" className="btn btn-primary btn-lg btn-block">Large button</button>

    
    

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
