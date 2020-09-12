import React from 'react'
import { Input, Button, Upload, TextArea, Gap } from '../../components'
import './createBlog.scss'

const CreateBlog = () => {
    return (
        <div className="blog-post">
            <p className="title">Create new blog post</p>
            <Input label="Post Title"></Input>
            <Upload></Upload>
            <TextArea></TextArea>
            <Gap height={20}></Gap>
            <div className="button-action">
                <Button title="Save"></Button>
            </div>
        </div>
    )
}

export default CreateBlog
