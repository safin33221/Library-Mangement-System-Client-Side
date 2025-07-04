import BookCard from "../../Components/BookCard";
import { useGetBooksQuery } from "../../redux/api/baseApi";
import type { IBook } from '../../interfaces/Book';

const AllBook = () => {
    const { data } = useGetBooksQuery(undefined)
    const books = data?.data
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-10">
                {
                    books?.map((book: IBook) => (
                        <BookCard book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllBook;