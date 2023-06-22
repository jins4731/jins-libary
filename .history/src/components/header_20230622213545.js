const Header = () => {
    const [open, setOpen] = useState(false);

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
                    <ListItemButton>
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