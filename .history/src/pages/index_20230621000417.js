import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, CardContent, CardMedia, Container, Grid, Paper } from "@mui/material"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <Grid 
        container
        justifyContent={"center"}
      >
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Grid item md={5} key={post.fields.slug} style={{border: "1px solid black"}}>
              <Card
                elevation={8}
              >
                <CardMedia
                  sx={{ height: 120 }}
                  image={"../images/Life-cycle.jpg"}
                  title="green iguana"
                />
                <CardContent>
                  <h5>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h5>
                  <small>{post.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
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
        }
      }
    }
  }
`
