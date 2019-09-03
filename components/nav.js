import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <a type="button" href="/" className="btn btn-danger btn-lg btn-block">Home</a>

    <style jsx>{`
      
      nav {
        text-align: center;
      }
      
    `}</style>
  </nav>
)

export default Nav
