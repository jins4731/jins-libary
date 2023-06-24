import { Grid } from "@mui/material"
import * as React from "react"
import Header from "../components/header";
import Layout from "../components/layout";
import Bio from "../components/bio";

const Category = ({ location }) => {
    return (
        // <Grid>
        //     <h6>카테고리</h6>
        // </Grid>
        <Layout location={location}>
            <Bio/>
        </Layout>       
    )
}

export default Category;