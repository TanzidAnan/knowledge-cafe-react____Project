
const BookMarks = ({bookMarks}) => {
    console.log(bookMarks)
    return (
        <div className="w-1/3">
            <h2 className="text-3xl text-center">Book Marks {bookMarks.length}</h2>
        </div>
    );
};

export default BookMarks;