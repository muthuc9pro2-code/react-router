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


function App() {
  const [posts]
  const [search, setSearch ] = useState('');
  return (
    <div className="App">
      <Header title= "react JS Blog" />
      <Nav
      Search={search}
      SetSearch={setSearch} 
      />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/post' element = {<NewPost />} />
        <Route path='/post/:id' element = {<PostPage />} />
        <Route path='*' element = {<Missing />} />
        <Route path='/about' element = {<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
