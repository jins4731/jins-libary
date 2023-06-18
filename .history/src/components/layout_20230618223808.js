import * as React from "react"

import { Link } from 'theme-ui'
import { Flex } from 'theme-ui'
import { Alert } from 'theme-ui'
import { Box } from 'theme-ui'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Alert variant='primary'>
        Beep boop, this is an alert!
      </Alert>
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
