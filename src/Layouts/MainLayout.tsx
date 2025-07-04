import { Outlet } from "react-router";
import Navbar from "../Components/Common/Navbar";

import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <h1>this is footer</h1>
            </footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;