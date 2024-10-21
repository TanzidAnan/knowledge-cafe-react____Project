import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
    const { title, cover, reading_time, author, author_img,posted_date,hashtags } = blog
    console.log(blog)
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
                    <button className='text-red-500 text-2xl'> <CiBookmark /></button>
                    
                </div>

            </div>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <p>
                        {
                            hashtags.map((hase,idx) => <span key={idx}><a href=""> #{hase}</a></span>)
                        }
                    </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;