import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PostPage = ({ posts, handledelete }) => {
  const post = posts.find(post => (post.id).toString() === id);
  const 
  return (
    <main className='PostPage'>
      <article className='Post'>
        {post && 
        <>
        <h2>{post.tittle}</h2>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>{post.body}</p>
        <button onClick={() => handledelete}></button>
        </>
        }
      </article>
    </main>
  )
}

export default PostPage