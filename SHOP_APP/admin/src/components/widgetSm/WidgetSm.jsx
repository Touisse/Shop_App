import React, { useEffect, useState } from 'react'
import './WidgetSm.css'
import { Visibility } from "@material-ui/icons";
import { userRequest } from '../../requestMethods';
import { Link } from "react-router-dom";

const WidgetSm = () => {
  const [users,SetUsers]= useState([])

  useEffect(()=>{
const GetUsers = async()=>{
  try{
const res = await userRequest.get("users/?new=true")
SetUsers(res.data)
  }catch{

  }
};
GetUsers()
  },[])


  return (
    <div className='widgetSm'>
        <span className="widgetsmTitle">New Join Memebers</span>
        <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <Link to={"/user/" + user._id}>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm