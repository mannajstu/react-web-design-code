import React, { Component } from 'react'
import Head from 'next/head'

 class GlobalHeader extends Component {
  render() {
    return (
      <div>
        <Head >
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"  />
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"  />
     
     <title>{this.props.title} </title>
     </Head>
      </div>
    )
  }
}
export default GlobalHeader