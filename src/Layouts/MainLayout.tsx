import { Outlet } from "react-router";
import Navbar from "../components/Common/Navbar";

import { Toaster } from 'react-hot-toast';
import Footer from "@/components/Common/Footer";
const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main className="min-h-screen">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;