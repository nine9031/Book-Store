import JournalCard from "./JournalCard";

const JournalsShow = ({ journal }) => {
    if (!Array.isArray(journal) || journal.length === 0) {
        return (
            <div className="flex justify-center items-center h-64 text-gray-500">
                ไม่พบข้อมูลวารสาร
            </div>
        );
    }

    return (
        <div className="flex">
            <div className="flex flex-wrap justify-center gap-4">
                {journal.map((journal) => (
                    <JournalCard
                        key={journal.id}
                        title={journal.title}
                        itemId={journal.itemId}
                        author={journal.author}
                        category={journal.category}
                        publishYear={journal.publishYear}
                        issn={journal.issn}
                        volume={journal.volume}
                        issue={journal.issue}
                        description={journal.description}
                        publicationFrequency={journal.publicationFrequency}
                        itemType={journal.itemType}
                        edition={journal.edition}
                        publisher={journal.publisher}
                        pageCount={journal.pageCount}
                        language={journal.language}
                        genre={journal.genre}
                    />
                ))}
            </div>
        </div>
    );
};
export default JournalsShow;