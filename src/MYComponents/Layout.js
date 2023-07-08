import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Information from './Information'

// export default function () {
//   return (
//     <div><Navbar/><Sidebar></Sidebar></div>
//   )
// }
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';





const Layout = () => {
  const [showApp, setShowApp] = useState(false);

  const handleNavLinkClick = () => {
    setShowApp(true);
  };
  return (
    <div className="container-fluid">
      <Navbar/>
      
          <Sidebar />
       
    </div>
  );
};

export default Layout;
