import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import Bio from "../components/bio";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Card from '@mui/material/Card';
import { CardHeader } from "@mui/material";
import Seo from "../components/seo";

const Category = ({ data, location }) => {
    const posts = data.allMarkdownRemark.nodes
    let categories = [];

    return (
        <Layout location={location}>
            <Bio/>
            <Card>
                <CardHeader
                    title="카테고리"            
                /> 
                    {
                        posts.map(post => {
                            const category = post.frontmatter.category

                            if(!categories.includes(category)){
                                return (                                         
                                    <List>                                
                                        <ListItem disablePadding>
                                            <ListItemButton component="a" href="#simple-list">
                                            <ListItemText primary={category} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>                                
                                )
                            }
                        })
                    }
                </Card>        
        </Layout>       
    )
}

export const Head = () => <Seo title="All posts" />

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