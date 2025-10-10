import ComicCard from "./ComicCard";

const ComicsShow = ({ comics }) => {
    if (!Array.isArray(comics) || comics.length === 0) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500">
                ไม่พบข้อมูลการ์ตูน
            </div>
        );
    }

    return (
        <div className="flex">
            <div className="flex flex-wrap justify-center gap-4">
                {comics.map((comic) => (
                    <ComicCard
                        key={comic.id}
                        title={comic.title}
                        itemId={comic.itemId}
                        author={comic.author}
                        category={comic.category}
                        publishYear={comic.publishYear}
                        isbn={comic.isbn}
                        status={comic.status}
                        coverImage={comic.coverImage}
                        description={comic.description}
                        location={comic.location}
                        addedDate={comic.addedDate}
                        itemType={comic.itemType}
                        edition={comic.edition}
                        publisher={comic.publisher}
                        pageCount={comic.pageCount}
                        language={comic.language}
                        genre={comic.genre}
                        series={comic.series}
                        volumeNumber={comic.volumeNumber}
                        illustrator={comic.illustrator}
                        colorType={comic.colorType}
                        targetAge={comic.targetAge}
                    />
                ))}
            </div>
        </div>
    );
};
export default ComicsShow;