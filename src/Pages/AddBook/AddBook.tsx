"use client";

import background from '../../assets/images/addbook.png'
import AddBookModal from './Components/AddBookModal';


const AddBook = () => {





    return (
        <div className="relative h-screen flex items-center justify-center text-white">
            {/* Background image */}
            <img
                src={background} // Replace with your actual path
                alt="Library Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 bg-opacity-60 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">📚 Add a New Book</h1>
                <p className="text-lg mb-6">
                    Easily manage your library collection by adding new books to the system.
                </p>

                <AddBookModal />

            </div>

            {/* Modal */}

        </div>
    );
};

export default AddBook;
