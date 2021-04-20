import React from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/UI/Card";


import './style.css';
import { delNotification } from '../../actions';

/**
* @author
* @function Home
**/

const Home = (props) => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const deleteNotification=(id)=>{
    dispatch(delNotification(id))

  }


  return (
    <Layout sidebar>
      {notification.notifications.map((notification, index) => (
        <Card
          style={{
            margin: "10px 0",
            color: "red"
          }}
          key={index}
          headerRight={notification.priority}
        >
          <div
            style={{
              margin: "10px",
              color: "black"
            }}
          >
            {notification.text}

          </div>
          <button onClick={() => {deleteNotification(notification._id)}}>
            Delete
           </button>
        </Card>
      ))}
    </Layout>
  )

}

export default Home