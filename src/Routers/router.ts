import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: '/home',
                Component: Home
            }
        ]
    }
])
export default router