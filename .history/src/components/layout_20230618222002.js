import * as React from "react"
import { NavLink } from 'theme-ui'
import { Link } from 'theme-ui'
import { Flex } from 'theme-ui'
import { Message } from 'theme-ui'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Flex>
  <Box p={2} bg="primary" color="white" sx={{ flex: '1 1 auto' }}>
    Flex
  </Box>
  <Box p={2} bg="muted">
    Box
  </Box>
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
