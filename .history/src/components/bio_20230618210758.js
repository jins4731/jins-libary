/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  console.log(data.site.siteMetadata);
  const title = data.site.siteMetadata?.title
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className={"bio"}>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/jsy-logo.png"
        width={200}
        height={200}
        quality={95}
        alt="Profile picture"
        placeItems: "center"
      />
      {
        
          <h2>
            {title}
          </h2>
        
      }
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
        </p>
      )} 
    </div>
  )
}

export default Bio
