import { Outlet } from "react-router";
import Navbar from "../Components/Common/Navbar";


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
        </div>
    );
};

export default MainLayout;