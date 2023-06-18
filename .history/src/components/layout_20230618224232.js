import * as React from "react"

import { Link } from 'theme-ui'
import { Flex } from 'theme-ui'
import { NavLink } from 'theme-ui'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Flex as="nav">
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
        <NavLink href="#!" p={2}>
          About
        </NavLink>
      </Flex>
    )
  } else {
    header = (
      <div>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
