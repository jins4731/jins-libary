import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, CardContent, Grid} from "@mui/material"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Categories from "./categories"
import Category from "../components/category"

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
        justifyContent={"space-between"}
      >
        <Grid 
          container
          alignItems={"center"}
          columnSpacing={2}
          rowSpacing={3}         
          md={10}
        >
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const thumbnail = getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData);

            return (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4}
                lg={4} 
                key={post.fields.slug}                
              >
                <a href={post.fields.slug} style={{textDecoration: "none"}}>
                  <Card
                    elevation={6}
                  >
                    <div style={{textAlign: "center"}}>
                      <GatsbyImage 
                        image={thumbnail} 
                      />
                    </div>
                    <CardContent>
                      <h5 style={{marginTop: "0.5rem"}}>
                        <span itemProp="headline">{title}</span>
                      </h5>
                      {/* <small>{post.frontmatter.date}</small> */}
                      <p style={{height:"50px", overflow:"hidden", marginBottom: "5px"}}
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            )
          })}
        </Grid>
        <Grid
          md={2}
        >
          <Category posts={posts} />
        </Grid>
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
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }      
    ) {
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
