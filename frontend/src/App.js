import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllPosts from './components/Home/AllPosts';
import Post from './components/Home/Post';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddPost from './components/Home/AddPost';
import ViewPost from './components/Home/ViewPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/viewPost/:id" element={<ViewPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
