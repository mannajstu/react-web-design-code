import React, { Component } from 'react'
import Nav from '../components/nav'
import { Button } from 'react-bootstrap';
class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        About
        <Button variant="primary">Primary</Button>
      </div>
    )
  }
}
export default About
