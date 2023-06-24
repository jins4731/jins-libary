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
    console.log(data);
    return (
        <Layout location={location}>
            <Bio/>
            <Card>
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

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Category;