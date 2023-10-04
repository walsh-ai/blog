import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css"; 
import Quote from "../components/quote"; 

export default function Custom404() {
    return(
        <Layout hideFace>
            <h1 className = {utilStyles.HeadingXl}>404 - Page Not Found</h1>
            <br />
            <Quote />
        </Layout>
    ); 
}