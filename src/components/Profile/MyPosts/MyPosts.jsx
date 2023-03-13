import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


   let postsElements = props.posts.map (post => 
      <Post message={post.message} likes={' ' + post.likesCount} />
      )

   return (

         <div className={m.posts}>
            <div>
               <textarea></textarea>
               <button>Add post</button>
            </div>
            <div className={m.title}>My posts</div>
            <div className={m.item}>
               {postsElements}

            </div>

         </div>

   );
};

export default MyPosts;