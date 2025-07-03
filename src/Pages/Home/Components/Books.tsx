
import { useGetBooksQuery } from '../../../redux/api/baseApi';

const Books = () => {
    const { data } = useGetBooksQuery(undefined)
    const books = data.data
    console.log(books);

    return (
        <div>
            
        </div>
    );
};

export default Books;