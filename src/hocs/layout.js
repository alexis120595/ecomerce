import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from "../componets/navigation/NavBar";
import { Footer } from "../componets/navigation/Footer";

 const Layout = ( props ) => {

    return (
        <div>
        <NavBar />
        <ToastContainer autoClose={5000} />
        {props.children}
     
        <Footer />
        </div>
    );
    }

export default Layout;