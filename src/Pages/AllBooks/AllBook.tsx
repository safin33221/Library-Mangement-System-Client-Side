import { useDeleteBookMutation, useGetBooksQuery } from "../../redux/api/baseApi";
import type { IBook } from '../../interfaces/Book';
import { FaEdit, FaTrash } from "react-icons/fa";
import BorrowBookModal from "@/Components/BorrowBookModal";
import toast from "react-hot-toast";
import UpdateBookModal from "@/Components/UpdateBookModal";


const AllBook = () => {
    const { data } = useGetBooksQuery(undefined);
    const books = data?.data;
    const [deleteBooks] = useDeleteBookMutation()



    const handleEdit = (book: IBook) => {
        console.log("Edit book:", book.title);
    };

    const handleDelete = (book: IBook) => {
        try {
            console.log("Delete book:", book.title);
            deleteBooks(book._id)
            toast.success(`${book.title} is Deleted successfully `)
        } catch (error) {
            toast.error(`somethings is wrong${error} `)

        }
    };

    return (
        <div className="overflow-x-auto p-5">
            <h2 className="text-2xl font-bold mb-4">All Books</h2>
            <table className="min-w-full bg-white border border-gray-300 shadow overflow-x-auto">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Author</th>
                        <th className="px-4 py-2 border">Genre</th>
                        <th className="px-4 py-2 border">ISBN</th>
                        <th className="px-4 py-2 border">Copies</th>
                        <th className="px-4 py-2 border">Available</th>
                        <th className="px-4 py-2 border">Created At</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books?.map((book: IBook) => (
                            <tr key={book._id} className="text-center">
                                <td className="px-4 py-2 border">{book.title}</td>
                                <td className="px-4 py-2 border">{book.author}</td>
                                <td className="px-4 py-2 border">{book.genre}</td>
                                <td className="px-4 py-2 border">{book.isbn}</td>
                                <td className="px-4 py-2 border">{book.copies}</td>
                                <td className="px-4 py-2 border">
                                    {book.available ? "Yes" : "No"}
                                </td>
                                <td className="px-4 py-2 border">
                                    {new Date(book.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-2 border space-x-2">
                                    <button
                                        disabled={!book.available}
                                        className={`text-black font-bold btn btn-sm ${book.available ? "text-green-500" : "text-red-500"}`}

                                    >
                                        <BorrowBookModal

                                            book={book}

                                        />
                                    </button>
                                    <button
                                        onClick={() => handleEdit(book)}
                                        className="text-yellow-600 hover:text-yellow-800"
                                        title="Edit Book"
                                    >
                                        <UpdateBookModal book={book} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(book)}
                                        className="text-red-600 hover:text-red-800"
                                        title="Delete Book"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllBook;
