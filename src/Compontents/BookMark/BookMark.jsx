import PropTypes from "prop-types";
const BookMark = ({bookMarks}) => {
    const {title} =bookMarks;
    console.log(title)
    return (
        <div className="bg-slate-300 p-5 mb-2">
            <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
    );
};

BookMark.propTypes ={
    bookMarks:PropTypes.object.isRequired
}

export default BookMark;