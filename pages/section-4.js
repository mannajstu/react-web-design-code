import React, { Component } from 'react'

import Section4 from '../components/section-4';
import Layout from '../components/layout';


class Page extends Component {
  render() {
    return (
      <div>
        <Layout title="Section 4">
        <div className="container text-center">
        <a type="button" href="/section-4" className="btn btn-primary m-2 ">Next Section</a>
        </div>
        
       <Section4/>

        </Layout>
        
       
       
      </div>
    )
  }
}
export default Page
