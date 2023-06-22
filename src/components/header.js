import { Drawer, Grid, IconButton } from "@mui/material"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';

import * as React from "react"
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const onClick = () => {

    }
    return (
        <div>
        <Grid>
          <IconButton color="secondary" aria-label="add an alarm" onClick={() => setOpen(true)}>
            <DensityMediumOutlinedIcon/>      
          </IconButton>
          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
          >
            <Box width={'300px'}>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Trash" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton href="/">
                      <ListItemIcon>
                        <HouseOutlinedIcon fontSize="large"/>
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AssignmentIndOutlinedIcon fontSize="large"/>
                      </ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <CategoryIcon fontSize="large"/>
                      </ListItemIcon>
                      <ListItemText primary="Category" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Drawer>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
      </div>
    )
}

export default Header;