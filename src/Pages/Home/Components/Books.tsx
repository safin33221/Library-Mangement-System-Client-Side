
import BookCard from '../../../components/BookCard';
import type { IBook } from '../../../interfaces/Book';
import { useGetBooksQuery } from '../../../redux/api/baseApi';

const Books = () => {
    const { data } = useGetBooksQuery(undefined)
    const books = data?.data
  

    return (
        <div className='m-10'>
            <h1 className='text-center text-4xl font-bold my-2'>Our Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                {
                    books?.map((book: IBook) => (
                        <BookCard book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default Books;