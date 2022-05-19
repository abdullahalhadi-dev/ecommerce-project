import React from 'react';
import './Blog.style.css';
import blog1 from "../../../src/images/blog-1.jpg";
import blog2 from "../../../src/images/blog-2.jpg";
import blog3 from "../../../src/images/blog-3.jpg";

const Blog = () => {
    return (
        <div className='container'>
            <div className='blog-header'>
                <h2>OUR BLOG</h2>
            </div>
            <div className='blog'>
                <div className='col-md-4'>
                    <div className='single-blog'>
                        <div className='blog-image'>
                        <img src={blog1} />
                        </div>
                        <div className='blog-text'>
                            <h3>A guide to latest trends</h3>
                            <span>By Admin</span>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='single-blog'>
                        <div className='blog-image'>
                        <img src={blog2} />
                        </div>
                        <div className='blog-text'>
                            <h3>A guide to latest trends</h3>
                            <span>By Admin</span>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className='single-blog'>
                        <div className='blog-image'>
                        <img src={blog3} />
                        </div>
                        <div className='blog-text'>
                            <h3>A guide to latest trends</h3>
                            <span>By Admin</span>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default Blog;