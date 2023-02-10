import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import NavBar from './NavBar';
import Logo from './download.jpeg';
import axios from 'axios';
import './ViewPost.css';
import { toast } from 'react-toastify';

const ViewPost = () => {
  const location = useLocation()
  const data = location.state;
  const [allData, setAllData] = useState({});
  const Token = localStorage.getItem("Token")
  const ID = JSON.parse(window.atob(Token.split('.')[1]))
  const newID = ID.user.id;
  const userName = ID.user.name;
  const [accepted, setAccepted] = useState({userName: ""});
  const [requests, setRequests] = useState([]);
  const [id, setId] = useState({ id: newID, userName: userName })

  useEffect(() => {
    axios.get(`http://localhost:3001/routes/viewPost/${data}`).then((res) => {
      if (res.data.message.all_request !== {}) {
        setRequests(res.data.message.all_request);
      }
      setAllData(res.data.message)
    }).catch((err) => {
      console.log(err.response.data.error)
      // toast.success(err.response.data.error);
    })
  }, [])

  const handleCollab = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/routes/makeCollaboration/${data}`, id).then((res) => {
      toast.success(res.data.message);
    })
      .catch((err) => {
        toast.error(err.response.data.error);
      })
  }
  const handleCompleted = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/routes/markasCompleted/${data}`).then((res) => {
      toast.success(res.data.message)
    }).catch((err) => {
      toast.error(err.response.data.error)
    })
  }

  const handleAccepted = (obj) => {
    setAccepted((prev) => ({...prev, userName: obj.userName}))
    axios.put(`http://localhost:3001/routes/acceptRequest/${data}`, accepted).then((res) => {
      toast.success(res.data.message);
    }).catch((err) => {
      toast.error(err.response.data.error)
    })
  }
  return (
    <>
      <NavBar />
      <div className='AllPost-main'>
        <div className="allPost-header">
          <h1 className="allPost-heading">{allData.author}</h1>
        </div>
        <div className="allPost-center-content">
          <div className="allPost-image">
            <img className='post-image' src={Logo} alt="" />
          </div>
          <div className="text-content">
            <h2 className="allPost-title">{allData.story_title}</h2>
            <div className="name-and-date">
              <p className="allPost-username">{allData.author}</p>
              <p className="allPost-date">{allData.date}</p>
            </div>
            <p className="allPost-desc">{allData.story_description}</p>
            <div className="actions">
              {
                newID !== allData.authorName ? 
                (<button onClick={handleCollab} className="request-for-collaboration">Request For Collaboration <i class="fa fa-handshake-o" aria-hidden="true"></i></button>):(<div></div>)
              }
              <button onClick={handleCompleted} className="mark-as-completed">Mark as Completed</button>
            </div>
          </div>
        </div>

        {
            requests.map((obj) => (
              <div className="allRequests">
                <div className="seperate-request">
                  <p className="request-name">{obj.userName}</p>
                  <button onClick={() => {handleAccepted(obj)}} className="request-accept">Accept</button>
                  <button className="request-decline">Decline</button>
                </div>
              </div>
            ))
        }



      </div>
    </>
  )
}

export default ViewPost
