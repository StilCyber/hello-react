import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

const App = () => {
  return (
   <div className='app-wrapper'>

      <Header />
      <main className='main'>
         <Navbar />
         <div className='content'>
            <Profile />
            <Dialogs />
         </div>

      </main>

   </div>
  );
};
export default App;
