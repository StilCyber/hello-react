import React from 'react';

const Profile = () => {
   return (
      <div className='content'>
         <img src='https://fikiwiki.com/uploads/posts/2022-02/1644976465_5-fikiwiki-com-p-krasivie-kartinki-morya-i-okeana-6.jpg' className='content__art'/>
         <div className='profile'>
            <div className='photo'>
               <img src='https://sobakovod.club/uploads/posts/2021-12/thumbs/1640059477_55-sobakovod-club-p-sobaki-shpits-terer-pomeranskii-64.jpg'></img>
            </div>
            <div className='info'>Stil</div>
         </div>
         <div className='posts'>Posts</div>
      </div>
   );
};

export default Profile;