import * as React from "react"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Card from '@mui/material/Card';
import { CardHeader } from "@mui/material";

const Category = ({data}) => {
    const posts = data.allMarkdownRemark.nodes
    let categories = [];

    return (
        <Card>
            <CardHeader
                title="카테고리"            
            /> 
            <List> 
                <ListItem disablePadding>
                    <ListItemButton component="a" href={"/"}>
                    <ListItemText primary="전체" />
                    </ListItemButton>
                </ListItem>
                {
                    posts.map(post => {
                        const category = post.frontmatter.category

                        if(!categories.includes(category)){
                            categories.push(category)
                            return (                                                                                                        
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href={"/categories/" + category}>
                                    <ListItemText primary={category} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        }
                    })
                }
            </List>       
        </Card>
    )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`

export default Category;