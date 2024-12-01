import PropTypes from "prop-types";
const BookMark = ({bookMarks}) => {
    const {title} =bookMarks;
    console.log(title)
    return (
        <div className="bg-slate-300 p-5 m-4 rounded-md">
            <h3 className="text-2xl font-semibold text-green-500">{title}</h3>
        </div>
    );
};

BookMark.propTypes ={
    bookMarks:PropTypes.object.isRequired
}

export default BookMark;