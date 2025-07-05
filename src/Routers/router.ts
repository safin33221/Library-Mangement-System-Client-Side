import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AllBook from "../Pages/AllBooks/AllBook";
import AddBook from "../Pages/AddBook/AddBook";
import BorrowSummery from "@/Pages/BorrrowSummery/BorrowSummery";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/books",
                Component: AllBook
            }, {
                path: "/create-book",
                Component: AddBook
            },
            {
                path: '/borrow-summary',
                Component: BorrowSummery
            }
        ]
    }
])
export default router