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
import Category from "../components/category";

const Categories = ({ data, location }) => {
    const posts = data.allMarkdownRemark.nodes

    return (
        <Layout location={location}>
            <Bio/>            
            <Grid
                container                                
            >
                <Grid
                    item
                    md={8}
                >
                    <Category posts={posts} />
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