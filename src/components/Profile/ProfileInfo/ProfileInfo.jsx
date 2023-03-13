import React from 'react';
import q from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
      <div>
         <img src='https://fikiwiki.com/uploads/posts/2022-02/1644976465_5-fikiwiki-com-p-krasivie-kartinki-morya-i-okeana-6.jpg' className={q.content__art}/>
         <div className={q.profile}>
            <div className={q.photo}>
               <img src='https://sobakovod.club/uploads/posts/2021-12/thumbs/1640059477_55-sobakovod-club-p-sobaki-shpits-terer-pomeranskii-64.jpg'></img>
            </div>
            <div className={q.info}>Stil</div>
         </div>
      </div>

   );
};

export default ProfileInfo;