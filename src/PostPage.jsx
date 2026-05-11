import { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Missing from './Missing';
import api from './api/posts';
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const handleDelete = (id) => {
    deletePost(id);
    navigate('/');
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