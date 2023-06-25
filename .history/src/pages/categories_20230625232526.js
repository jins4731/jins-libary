import * as React from "react"

import Layout from "../components/layout";
import Bio from "../components/bio";

import { Grid } from "@mui/material";
import Seo from "../components/seo";
import Category from "../components/category";

const Categories = ({ location }) => {
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
                    <Category />
                </Grid>        
            </Grid>
        </Layout>       
    )
}

export  const Head = () => <Seo title="All posts" />

export default Categories;