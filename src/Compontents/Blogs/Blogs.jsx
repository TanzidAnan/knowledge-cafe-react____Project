import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({hendleAddToBookMarks,hendleAddMarkAsRead}) => {
    const [blogs,setBlogs] =useState([]);
    useEffect(() =>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl text-center font-bold py-4">Blogs: {blogs.length}</h2>
            <div>
                {
                    blogs.map(blog => <Blog
                         key={blog.id} 
                         blog={blog}
                         hendleAddToBookMarks={hendleAddToBookMarks}
                         hendleAddMarkAsRead={hendleAddMarkAsRead}
                         ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes ={
    hendleAddToBookMarks:PropTypes.func.isRequired,
    hendleAddMarkAsRead:PropTypes.func.isRequired

}

export default Blogs;