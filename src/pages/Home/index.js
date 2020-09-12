import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'


const Home = () => {
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog"></Button>
            </div>
            <Gap height={20}></Gap>
            <div className="content-wrapper">
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
            </div>
            <div className="pagination">
                <Button title="Previous"></Button>
                <Gap width={20}></Gap>
                <Button title="Next"></Button>
            </div>
                <Gap height={20}></Gap>
        </div>
    )
}

export default Home
