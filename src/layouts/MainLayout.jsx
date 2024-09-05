import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-3 md:px-5 min-h-[calc(100vh-470px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;