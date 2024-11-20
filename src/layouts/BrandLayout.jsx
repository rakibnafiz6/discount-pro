import { Helmet } from "react-helmet-async";
import BrandCard from "../components/BrandCard/BrandCard";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const BrandLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Discount PRO/Brands</title>
            </Helmet>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
            <section className="w-11/12 mx-auto">
                <BrandCard></BrandCard>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default BrandLayout;