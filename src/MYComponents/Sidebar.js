import React ,{ useState} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Information from './Information';
import { NavLink } from 'react-router-dom';

  
const Sidebar = () => {
   const [showInfo, setShowInfo] = useState(false);

  const handleNavLinkClick = () => {
    setShowInfo(true);
  };
  const handleHover = (event) => {
    event.target.style.backgroundColor = 'blue'; // Change the background color to blue on hover
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = 'green'; // Reset the background color on mouse leave
  };
  
  return (
    <div className="row">
        <div className="col-2">
      <div className="sidebar bg-dark" style={{width:"100px" , height: '100vh' }} >
        <ul className="nav flex-column" >
          <li className="nav-item text-center pt-4" >
            <a className="nav-link text-white" href="#"><i class="bi bi-columns-gap fs-5"></i><span className="d-block text-white fw-light">Dashboard</span></a>
          </li>
          <li className="nav-item text-center pt-4">
            <a className="nav-link text-white" href="#" ><i class="bi bi-calendar4-week fs-5"></i><span className="d-block fw-light">Calender</span></a>
          </li>
          <li className="nav-item text-center pt-4" >
            <NavLink to ='info' className="nav-link text-white" >
            <a className="nav-link text-white"  ><i class="bi bi-plus-circle fs-5" ></i><span className="d-block fw-light">Create</span></a>
              </NavLink>    </li>
            <li className="nav-item text-center pt-4">
            <a className="nav-link text-white" href="#"><i class="bi bi-journal-text fs-5"></i><span className="d-block fw-light">Report</span></a>
          </li>
          </ul></div><div className="col-10">
        {showInfo && <Information />}
          </div></div>
      </div>
  );
};

export default Sidebar;
