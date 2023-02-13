import React, { useState } from 'react'
import NavBar from './NavBar';
import './AddPost.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setStory } from '../../app/storySlice/storySlice';

const AddPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = localStorage.getItem("Token")
    const ID = JSON.parse(window.atob(data.split('.')[1]))
    const newID = ID.user.id;
    const userName = ID.user.name;

    const [storyData, setStoryData] = useState({
        authorName:newID,
        author: userName,
        story_title: "",
        story_description: "",
        story_image: ""
    })

    const handleSubmission = (e) => {
        e.preventDefault();
        console.log(storyData)
        axios.post('http://localhost:3001/routes/addPost', storyData).then((res) => {
            console.log(res.data.message);
            toast.success(res.data.status)
            dispatch(setStory(res.data.message));
            navigate('/');
        })
        .catch((err) => {
            console.log(err)
            toast.error(err.response.data.error);
        })
    }

    return (
        <>
            <NavBar/>
            <div className='main-addpost'>
                <div className="addPost-centerContent">
                    <div className="addPost-heading">
                        <h2 className="addPost-head">Add Post</h2>
                    </div>
                    <div className="addPost-content">
                        <input type="text" className="story-title" onChange={(e) => setStoryData((prev) => ({...prev, story_title: e.target.value}))} placeholder='Enter Title of Story...'/><br />
                        <input type="text" className="story-description" onChange={(e) => setStoryData((prev) => ({...prev, story_description: e.target.value}))} placeholder='Enter Description of Story...'/><br />
                        <input type="file" className="story-image" onChange={(e) => setStoryData((prev) => ({...prev, story_image: e.target.files[0].name}))} /><br />
                    </div>
                    <div className="addPost-btn">
                        <button onClick={handleSubmission} className="addPost-button">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPost
