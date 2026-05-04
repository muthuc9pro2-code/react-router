import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36",
      body: "lorem sadaskdmas lamsdoojasmdaosd ,asldaskdlas,dasmdasda,sda,sdasnausbfnksn"
    },
     {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36",
      body: "lorem sadaskdmas lamsdoojasmdaosd ,asldaskdlas,dasmdasda,sda,sdasnausbfnksn"
    },
     {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36",
      body: "lorem sadaskdmas lamsdoojasmdaosd ,asldaskdlas,dasmdasda,sda,sdasnausbfnksn"
    },
    {
      id: 4,
      title: "My 4th Post",
      datetime: "July 01, 2021 11:17:36",
      body: "lorem sadaskdmas lamsdoojasmdaosd ,asldaskdlas,dasmdasda,sda,sdasnausbfnksn"
    },
    {
      id: 5,
      title: "My 5th Post",
      datetime: "July 01, 2021 11:17:36",
      body: "lorem sadaskdmas lamsdoojasmdaosd ,asldaskdlas,dasmdasda,sda,sdasnausbfnksn"
    }
    
  ]);
  const [search, setSearch ] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const filterResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase())
  )
  setSearchResult(filterResults.reverse());
  },[posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/')
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  } 
  return (
    <div className="App">
      <Header title= "react JS Blog" />
      <Nav
      search={search}
      setSearch={setSearch} 
      />
      <Routes>
        <Route path='/' element = {<Home 
        posts={searchResult}
        />} />
        <Route path='/post' element = {<NewPost 
        handleSubmit={handleSubmit}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postBody={postBody}
        setPostBody={setPostBody}
        />} />
        <Route path='/post/:id' element = {<PostPage 
        posts={posts} 
        handleDelete={handleDelete}
        />} />
        <Route path='*' element = {<Missing />} />
        <Route path='/about' element = {<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
