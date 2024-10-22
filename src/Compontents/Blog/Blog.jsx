
import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,hendleAddToBookMarks,hendleAddMarkAsRead }) => {
    const { id,title, cover, reading_time, author, author_img,posted_date,hashtags } = blog
    // console.log(blog)
    return (
        <div className='px-3'>
            <img className='w-full' src={cover} alt={`cover pictcher ${title}`} />
            <div className='flex justify-between items-center mt-5 mb-3'>
                <div className='flex gap-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-lg'>{author}</h4>
                        <p className='text-lg'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <h4>{reading_time} min read</h4>
                    <button onClick={() =>hendleAddToBookMarks(blog)}
                     className='text-red-500 text-2xl'

                     > <CiBookmark /></button>
                    
                </div>

            </div>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <p className='mb-4'>
                        {
                            hashtags.map((hase,idx) => <span key={idx}><a href=""> #{hase}</a></span>)
                        }
            </p>
            <button className='text-purple-300 font-bold underline mb-7' onClick={() => hendleAddMarkAsRead(id,reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    hendleAddToBookMarks:PropTypes.func.isRequired,
    hendleAddMarkAsRead:PropTypes.func.isRequired
}

export default Blog;