import React from 'react'
import { Link } from 'react-router-dom'

const post = ({ post }) => {
    return (
        <div>
            <article className='Post'>
                <Link to={`/post/${post.id}`}>
                    <h2>{post.title}</h2>
                    <p className='PostDate'>{post.datetime}</p>
                </Link>
                <p className='postBody'>{
                (post.body).length <= 25 ? post.body :
                `${(post.body).slice(0, 25)}`}</p>
            </article>
        </div>

    )
}

export default post