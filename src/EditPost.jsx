import React from 'react'
import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Missing from './Missing';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';


const EditPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const posts = useStoreState((state) => state.posts);
    const editTitle = useStoreState((state) => state.editTitle);
    const editBody = useStoreState((state) => state.editBody);

    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
    const setEditBody = useStoreActions((actions) => actions.setEditBody);

    const getPostById = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    useEffect(() => {
        if (post) {
            setEditBody(post.body);
            setEditTitle(post.title);
        }
    }, []);

    const handleEdit = (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        editPost(updatedPost);
        navigate(`/post/${id}`);
    }

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
                        <button type='button' onClick={() => handleEdit(post.id)}>Submit</button>
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