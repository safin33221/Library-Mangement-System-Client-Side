import Navbar from "../Components/Common/Navbar";


const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <h1>this is main content</h1>
            </main>
            <footer>
                <h1>this is footer</h1>
            </footer>
        </div>
    );
};

export default MainLayout;