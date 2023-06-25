import { Card, CardContent, Grid } from "@mui/material";
import Bio from "../components/bio";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";

const CategoryList = ({
    data: {},
    location,
}) => {
    return(
        <Layout location={location} title={siteTitle}>
            <Bio />
            <Grid 
                container
                alignItems={"center"}
                columnSpacing={2}
                rowSpacing={3}         
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
                        lg={3} 
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
        </Layout>
    )
}

export default CategoryList

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {frontmatter: {category: {eq: $path}}}
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