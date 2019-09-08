import React, { Component } from 'react'

import Section3 from '../components/section-3';
import Layout from '../components/layout';


class About extends Component {
  render() {
    return (
      <div>
        <Layout>
        <div className="container text-center">
        <a type="button" href="/section-4" className="btn btn-primary m-2 ">Next Section</a>
        </div>
        
       <Section3/>

        </Layout>
        
       
       
      </div>
    )
  }
}
export default About
