import React from 'react'
import Nav from '../components/nav'
import GlobalHeader from '../components/globalheader';



const Home = () => (
  <div>
     <GlobalHeader title="Home"/>
    <Nav/>
    
    
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
        <a type="button" href="/section-1" className="btn btn-primary m-2">Section 1</a>
    <a type="button" href="/section-2" className="btn btn-primary m-2">Section 2</a>
        </div>
      
      </div>
    
    
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
