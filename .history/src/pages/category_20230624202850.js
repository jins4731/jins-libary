import * as React from "react"
import Layout from "../components/layout";
import Bio from "../components/bio";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';

const Category = ({ location }) => {
    return (
        <Layout location={location}>
            <Bio/>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="카테고리"            
                />          
                <List>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Trash" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                    </ListItemButton>
                </ListItem>
                </List>
            </Card>            
        </Layout>       
    )
}

export default Category;