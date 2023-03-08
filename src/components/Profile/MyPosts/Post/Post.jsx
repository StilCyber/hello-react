import React from 'react';
import q from './Post.module.css';

const Post = (props) => {


   return (

       <div className={q.item}>
         Post {props.message}
         <span> Likes{props.likes}</span>
      </div>

   );
};

export default Post;