import React from 'react'
import Layout from '../components/layout';

const Home = () => (
  <div>
       
    
    <Layout title="Home">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
        <a type="button" href="/section-1" className="btn btn-primary m-2">Section 1</a>
    <a type="button" href="/section-2" className="btn btn-primary m-2">Section 2</a>
    <a type="button" href="/section-3" className="btn btn-primary m-2">Section 3</a>
    <a type="button" href="/section-4" className="btn btn-primary m-2">Section 4 (Owl Slider)</a>
        </div>
      
      </div>
    
    
    </div>

        </Layout>

    
    

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
