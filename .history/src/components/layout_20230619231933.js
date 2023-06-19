import { Button, Container, Drawer, Grid, IconButton, Link } from "@mui/material"
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import * as React from "react"
import { useState } from "react";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [open, setOpen] = useState(false);
  const toggleDrawer = (value) => {
    setOpen(value);
  }
  let header

  if (isRootPath) {
    header = (
      <Container maxWidth="sm">
        <Grid>
        <IconButton color="secondary" aria-label="add an alarm" onClick={toggleDrawer(true)}>
          <DensityMediumOutlinedIcon/>
          
        </IconButton>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Container>
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
