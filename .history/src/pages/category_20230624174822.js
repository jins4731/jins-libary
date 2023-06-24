import * as React from "react"
import Layout from "../components/layout";
import Bio from "../components/bio";
import { Grid } from "@mui/material";

const Category = ({ location }) => {
    return (
        <Layout location={location}>
            <Bio/>
            <Grid>
                <h6>카테고리</h6>
            </Grid>            
        </Layout>       
    )
}

export default Category;