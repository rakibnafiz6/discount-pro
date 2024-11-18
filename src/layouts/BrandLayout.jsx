import BrandCard from "../components/BrandCard/BrandCard";
import Navbar from "../components/Navbar/Navbar";

const BrandLayout = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
            <section className="w-11/12 mx-auto">
                <BrandCard></BrandCard>
            </section>
        </div>
    );
};

export default BrandLayout;