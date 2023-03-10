import React from 'react';
import q from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

   return (
      <div className={q.content}>
         <ProfileInfo />
         <MyPosts posts={props.state.posts} />
      </div>

   );
};

export default Profile;