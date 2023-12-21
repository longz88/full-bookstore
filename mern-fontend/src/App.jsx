import { Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MyFooter from './components/MyFooter';
import { ToastContainer } from 'react-toastify';

function App() {
   return (
      <>
         <Navbar />
         <div className="min-h-screen">
            <Outlet />
         </div>
         <MyFooter />

         <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </>
   );
}

export default App;
