import React from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Missing from './Missing';

const EditPost = ({
    posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    useEffect(() => {
        if (post) {
            setEditBody(post.body);
            setEditTitle(post.title);
        }
    }, []);
    return (
        <main className='NewPost'>
            {post &&
                <>
                <h1>NewPost</h1>
                    <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input type="text"
                            id='postTitle'
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <label htmlFor="postBody">Post:
                        </label>
                        <textarea name="" id="PostBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}>
                        </textarea>
                        <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                </>
            }
            {!post &&
                <Missing />
            }
        </main >
    )
}

export default EditPost