import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/dataContext';


function App() {

  return (
    <div className="App">
    <Header title="react JS Blog"/>
      <DataProvider>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<NewPost/>} />
        <Route path='/edit/:id' element={<EditPost/>} />
        <Route path='/post/:id' element={<PostPage/>} />
        <Route path='*' element={<Missing />} />
        <Route path='/about' element={<About />} />
      </Routes>
       </DataProvider>
      <Footer />
    </div>
  );
}

export default App
