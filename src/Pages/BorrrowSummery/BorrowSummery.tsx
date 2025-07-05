
import type { IBorrowSummary } from "@/interfaces/Borrow";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

const BorrowSummary = () => {
    const { data, isLoading, error } = useGetBorrowSummaryQuery(undefined);
    const summaryData = data?.data || [];
    console.log(summaryData);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">📚 Borrow Summary</h2>

            <div className="overflow-x-auto m-10">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book Title</th>
                            <th>ISBN</th>
                            <th>Total Borrowed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {summaryData.map((borrow: IBorrowSummary, index: number) => (
                            <tr key={borrow.book.isbn + index}>
                                <td>{index + 1}</td>
                                <td>{borrow.book.title}</td>
                                <td>{borrow.book.isbn}</td>
                                <td>{borrow.totalQuantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BorrowSummary;
