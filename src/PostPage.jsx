import { useContext } from 'react';
import { useParams, Link,  } from 'react-router-dom';
import Missing from './Missing';
import api from './api/posts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DataContext from './context/dataContext';

const PostPage = () => {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/')
    } catch {
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <main className='PostPage'>
      <article className='Post'>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className='editButton'>
                Edit Post
              </button>
            </Link>
            <button className='deleteButton' onClick={() => handleDelete(post.id)}>
              Delete Post</button>
          </>
        }
        {!post &&
          <Missing />
        }
      </article>
    </main>
  )
}

export default PostPage