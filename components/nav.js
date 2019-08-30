import React from 'react'
import Link from 'next/link'
import About from '../pages/about';


const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    

    <style jsx>{`
      
      nav {
        text-align: center;
      }
      
    `}</style>
  </nav>
)

export default Nav
