import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import './AllPosts.css'
import Logo from './download.jpeg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllPosts = () => {
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/routes/viewAllPosts").then((res) => {
            setAllData(res.data.message);
        })
            .catch((err) => {
                toast.success(err.response.data.error);
            })
    }, [])
    return (
        <>
            <NavBar />
            <div className='AllPost-main'>
                <div className="allPost-header">
                    <h1 className="allPost-heading">All Stories</h1>
                </div>

                {
                    allData.map((obj) => (
                        <div className="allPost-center-content">
                            <div className="allPost-image">
                                <img className='post-image' src={obj.story_image} alt="" />
                            </div>
                            <div className="text-content">
                                <h2 className="allPost-title">{obj.story_title}</h2>
                                <div className="name-and-date">
                                    <p className="allPost-username">{obj.author}</p>
                                    <p className="allPost-date">{obj.date.slice(0,10)}</p>
                                </div>
                                <p className="allPost-desc">{obj.story_description}</p>
                                <Link className='read-More' to='/viewPost/:`${obj._id}`' state={obj._id}>Read More &#8594;</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default AllPosts;
