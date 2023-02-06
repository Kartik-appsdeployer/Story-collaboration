import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='main-navbar'>
            <h1 className="navbar-heading">Story-Collaboration</h1>
            <div className="navbar-links">
                <div className="list1">
                    <i class="fa fa-list-alt" aria-hidden="true"></i>
                    <Link to='/' className='All-stories'>All Stories</Link>
                </div>
                <div className="list2">
                <i class="fa fa-plus-square" aria-hidden="true"></i>
                <Link to="/addpost" className='addPost'>Add Post</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
