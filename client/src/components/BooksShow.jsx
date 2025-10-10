import BookCard from "./BookCard";

const BooksShow = ({ books }) => {
    if (!Array.isArray(books) || books.length === 0) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500">
                ไม่พบข้อมูลหนังสือ
            </div>
        );
    }

    return (
        <div className="flex">
            <div className="flex flex-wrap justify-center gap-4">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        itemId={book.itemId}
                        author={book.author}
                        category={book.category}
                        publishYear={book.publishYear}
                        isbn={book.isbn}
                        status={book.status}
                        coverImage={book.coverImage}
                        description={book.description}
                        location={book.location}
                        addedDate={book.addedDate}
                        itemType={book.itemType}
                        edition={book.edition}
                        publisher={book.publisher}
                        pageCount={book.pageCount}
                        language={book.language}
                        genre={book.genre}
                    />
                ))}
            </div>
        </div>
    );
};

export default BooksShow;   