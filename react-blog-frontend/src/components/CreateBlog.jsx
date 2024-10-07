import React, { useState } from 'react'
import Editor from 'react-simple-wysiwyg';
import { useForm } from "react-hook-form";



const CreateBlog = () => {
    const [html, setHtml] = useState('');
    function onChange(e) {
        setHtml(e.target.value);
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const formSubmit = async (data) => {
        const newData = { ...data, "description": html }
        const res = await fetch("http://127.0.0.1:8000/api/blogs", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newData)

        })
        // console.log(newData);
    }

    return (
        <div className='container mb-5'>
            <div className='d-flex justify-content-between pt-5 mb-4'>
                <h4>Create blog</h4>
                <a href="/" className='btn btn-dark'>Back</a>
            </div>

            <div className="card border-0 shadow-lg">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className='form-label'>Title</label>
                            <input
                                {...register('title', { required: true })}
                                type="text"
                                className={`form-control ${errors.title && 'is-invalid'}`}
                                placeholder='Title' />
                            {errors.title && <p className='invalid-feedback'>Title field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Short description</label>
                            <textarea type="text"
                                {...register('shortDescription')}
                                className='form-control' name='shortDescription' placeholder='Short description' ></textarea>
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Description</label>
                            <Editor value={html}
                                containerProps={{ style: { height: '400px' } }}
                                onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Image</label>
                            <input type="file" className='form-control' name='' placeholder='Title' />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Author</label>
                            <input type="text"
                                {...register('author', { required: true })}
                                className={`form-control ${errors.author && 'is-invalid'}`} placeholder='Author' />
                            {errors.author && <p className='invalid-feedback'>Author field is required</p>}
                        </div>
                        <button className='btn btn-dark'>Create</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default CreateBlog