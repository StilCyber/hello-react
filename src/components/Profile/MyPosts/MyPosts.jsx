import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

   return (

         <div className={m.posts}>
            <div className={m.title}>My posts</div>
            <div className={m.item}>
               <Post message='Hi, how are you' likes='2'/>
               <Post message='It is my first post' likes='5' />

            </div>

         </div>

   );
};

export default MyPosts;