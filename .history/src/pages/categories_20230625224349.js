import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import Bio from "../components/bio";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Card from '@mui/material/Card';
import { CardHeader, Grid } from "@mui/material";
import Seo from "../components/seo";

const Categories = ({ data, location }) => {
    const posts = data.allMarkdownRemark.nodes
    let categories = [];

    return (
        <Layout location={location}>
            <Bio/>            
            <Grid
                container                
                flexEnd
            >
                <Grid
                    item
                    md={6}
                >
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
                                                <ListItemButton component="a" href={category}>
                                                <ListItemText primary={category} />
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    }
                                })
                            }
                        </List>       
                    </Card>
                </Grid>        
            </Grid>
        </Layout>       
    )
}

export  const Head = () => <Seo title="All posts" />

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

export default Categories;