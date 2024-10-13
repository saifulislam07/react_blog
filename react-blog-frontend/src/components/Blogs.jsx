import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {

    const [blogs, setBlogs] = useState();
    const [keyword, setKeyword] = useState('');

    const fatchBlogs = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/blogs');
        const result = await res.json();
        setBlogs(result.data);
    }

    const resetSearch = () => {
        fatchBlogs();
        setKeyword('');
    }

    const searchBlogs = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:8000/api/blogs?keyword=' + keyword);
        const result = await res.json();
        setBlogs(result.data);
    }

    useEffect(() => {
        fatchBlogs();
    }, [])

    return (
        <div className='container'>
            <div className="d-flex justify-content-center pt-5 mb-4">
                <form onSubmit={(e) => searchBlogs(e)}>

                    <div className='d-flex'>
                        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} className='form-control' placeholder='Search Blogs' />
                        <button className='btn btn-dark ms-2'>Search</button>
                        <button type='button' onClick={() => resetSearch()} className='btn btn-success ms-2'>Reset</button>
                    </div>
                </form>
            </div>
            <div className='d-flex justify-content-between pt-5 mb-4'>
                <h4>Blogs</h4>
                <a href="/create" className='btn btn-dark'>Create</a>
            </div>
            <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                {
                    (blogs) && blogs.map((blog) => {
                        return (<BlogCard blogs={blogs} setBlogs={setBlogs} blog={blog} key={blog.id} />)
                    })
                }
            </div>
        </div>
    )
}

export default Blogs