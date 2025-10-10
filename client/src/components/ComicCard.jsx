import ComicService from "../services/comic.service";

const ComicCard = (props) => {
    const handleDelete = async (itemId) => {
        const isSubmitted = window.confirm(
            "Please Confirm To Delete Your Book!"
        );
        if (!isSubmitted) return;
        try {
            const response = await ComicService.deleteComic(itemId)
            if (response.status === 200) {
                alert("Comic deleted successfully!");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={props.coverImage
                    || "https://m.media-amazon.com/images/I/712pj+kPziL._UF1000,1000_QL80_.jpg"
                }  
                alt={props.itemType} />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{props.title}</h2>
                <p><strong>ผู้เขียน:</strong> {props.author}</p>
                <p><strong>นักวาดภาพประกอบ:</strong> {props.illustrator}</p>
                <p><strong>ชุดหนังสือ:</strong> {props.series}</p>
                <p><strong>เล่มที่:</strong> {props.volumeNumber}</p>
                <p><strong>ปีที่พิมพ์:</strong> {props.publishYear}</p>
                <p><strong>รหัส ISBN:</strong> {props.isbn}</p>
                <p><strong>หมวดหมู่:</strong> {props.category}</p>
                <p><strong>ประเภทสี:</strong> {props.colorType}</p>
                <p><strong>กลุ่มอายุเป้าหมาย:</strong> {props.targetAge}</p>
            <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDelete(props.itemId)}
                        className="btn btn-soft btn-error"
                    >
                        ลบ
                    </button>
                    <a
                        href={"/updateComic/" + props.itemId}
                        className="btn btn-soft btn-warning"
                    >
                        แก้ไข
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ComicCard;
