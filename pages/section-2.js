import React, { Component } from 'react'
import Layout from '../components/layout';
import Section2 from '../components/section-2';

class About extends Component {
  render() {
    return (
      <div>
       <Layout>
       <a type="button" href="/section-3" className="btn btn-primary m-2 ">Next Section</a>      
       <Section2/>

        </Layout>
       
      </div>
    )
  }
}
export default About
