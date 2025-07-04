

import type { IBook } from '../interfaces/Book';
import BorrowBookModal from './BorrowBookModal';

const BookCard = ({ book }: { book: IBook }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl border   hover:shadow-2xl transition flex justify-between">
            <div className='p-4 '>
                <h2 className="text-xl font-semibold mb-2">{book?.title}</h2>
                <p className="text-gray-700 mb-1">
                    <span className="font-medium">Author:</span> {book?.author}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-medium">Genre:</span> {book?.genre}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-medium">ISBN:</span> {book?.isbn}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-medium">Copies:</span> {book?.copies}
                </p>
                <button
                    disabled={!book?.available}
                    className={`text-sm font-bold mt-2 btn  ${book?.available ? "text-green-600" : "text-red-600 "}`}>
                    {book?.available ? <BorrowBookModal book={book} /> : "Not Available"}
                </button>
            </div>

            {/* <div className='bg-orange-200 w-12 m-2 justify-between rounded-xl flex flex-col items-center p-2'>
                <Trash2 className='cursor-pointer hover:text-orange-500 duration-200 border p-1 rounded-full ' />
                <Plus className='cursor-pointer hover:text-orange-500 duration-200 border p-1 rounded-full ' />
                <Edit className='cursor-pointer hover:text-orange-500 duration-200 border p-1 rounded-full ' />
            </div> */}
        </div>
    );
};

export default BookCard;