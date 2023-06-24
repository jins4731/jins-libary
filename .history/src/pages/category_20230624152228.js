import { Grid } from "@mui/material"
import * as React from "react"
import Header from "../components/header";

const Category = ({children}) => {
    console.log(children);
    return (
        // <Grid>
        //     <h6>카테고리</h6>
        // </Grid>
    
        <div className="global-wrapper">
            <header className="global-header">
                <Header/>
            </header>
            {/* <main>{children}</main> */}
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    )
}

export default Category;