import React from "react";
import { toast } from "react-toastify";

const BlogCard = ({ blog, blogs, setBlogs }) => {
    const showImage = (img) => {
        return (img) ? 'http://127.0.0.1:8000/uploads/blogs/' + img : 'https://placehold.co/600x400';
    }


    const deleteBlog = (id) => {
        if (confirm("Are you sure you want to delete?")) {
            const res = fetch("http://localhost:8000/api/blogs/" + id, {
                method: 'DELETE'
            });

            const newBlogs = blogs.filter((blog) => blog.id != id);

            setBlogs(newBlogs);

            toast("Blog deleted successfully.");
        }
    }

    return (
        <div className="col mb-4">
            <div className="card border-0 shadow-sm">
                <img className='card-img-top' src={showImage(blog.image)} alt="blog image" />
                <div className="div card-body">
                    <h2 className='h5'>{blog.title}</h2>
                    <p>{blog.shortDescription}</p>
                    <div className='d-flex justify-content-between '>
                        <a href={`/blog/${blog.id}`} className='btn btn-dark'>Details</a>
                        <div>

                            <a href="#" className="text-danger" onClick={() => deleteBlog(blog.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                            </a>
                            <a href={`/blog/edit/${blog.id}`} className='text-dark ms-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard