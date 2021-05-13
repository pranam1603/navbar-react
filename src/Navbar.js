import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const refLinksContainer = useRef(null)
  const linksContainer = useRef(null)

  useEffect(() => {
    const linksHeight = linksContainer.current.getBoundingClientRect().height
    if (showLinks) {
      refLinksContainer.current.style.height = `${linksHeight}px`
    } else {
      refLinksContainer.current.style.height = `0px`
    }
  })

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
              <FaBars />
            </button>
          </div>

          <div className={showLinks ? 'links-container show-container' : 'links-container'} ref={refLinksContainer}>
            <ul className="links" ref={linksContainer}>
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {social.map((icons) => {
              const { id, url, icon } = icons
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
