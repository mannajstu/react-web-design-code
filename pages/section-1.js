import React, { Component } from 'react'

import Section1 from '../components/section-1';
import Layout from '../components/layout';

class About extends Component {
  render() {
    return (
      <div>
        
        <Layout title="Setion 1">
        <div className="container text-center">
        <a type="button" href="/section-2" className="btn btn-primary m-2 ">Next Section</a>
        </div>
        
       <Section1 title="Hello Allah"/>

        </Layout>
        
       
       
      </div>
    )
  }
}
export default About
