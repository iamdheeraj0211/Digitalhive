import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Button, Popover, Modal } from 'react-bootstrap';
import Example from './Step1';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [showPopover, setShowPopover] = useState(false); // State to control popover visibility

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Perform save logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="container " style={{marginTop:"-700px", marginLeft:"150px"}}>
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link${activeTab === 1 ? ' active' : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Basic Info
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link${activeTab === 2 ? ' active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Client Access
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link${activeTab === 3 ? ' active' : ''}`}
                onClick={() => handleTabClick(3)}
              >
                Firm Access
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          {activeTab === 1 && (
            <div>
              <h6>Basic Information</h6>
    <div className="form-group row">
        <div class="col">
        <label className="sm-2 col-form-label">Client Group Name</label>
                                  <input type="text" className="form-control col-sm-4" value="Apollo Hospital Group"/>
        </div>
    <div class="col">
        <label className="sm-2 col-form-label">Email ID</label>
    <input type="email" className="form-control col-sm-4" value="kptripathi0019@D'Hive.in" />
                              </div>
    <div class="col">
        <label className="sm-2 col-form-label">Mobile No.</label>
    <input type="email" className="form-control col-sm-4" value='8555678956' />
    </div>
                          </div><br></br>
                                        <h6>Address</h6>
    <div className="form-group row">
        <div class="col">
        <label className="sm-2 col-form-label">Address Type</label>
                  <select type="text" className="form-select col-sm-4">
                  <option value="1">Registered Office</option>
    <option value="2">Other1</option>
    <option value="3">Other2</option></select>
        </div>
    <div class="col">
        <label className="sm-2 col-form-label">Premises</label>
                  <select className="form-select col-sm-4" placeholder="Enter email">
                     <option value="1">Owned</option>
    <option value="2">Rented</option>
    <option value="3">Other2</option></select>
                              </div>
    <div class="col">
        <label className="sm-2 col-form-label">Address Line 1</label>
    <input type="email" className="form-control col-sm-4" value="Raheja Titanium, Floor 6, Western Express Way" />
    </div>
              </div><br></br>
             

              <div className="form-group row">
                 <div class="col">
        <label className="sm-2 col-form-label">Address Line 2</label>
    <input type="email" className="form-control col-sm-4" value="Geeetanali Railway Colony, Ram Nagar, Goregaon" />
    </div>
        <div class="col">
        <label className="sm-2 col-form-label">State</label>
                  <select type="text" className="form-select col-sm-4">
                  <option value="1">Maharashtra</option>
    <option value="2">Kerala</option>
    <option value="3">Karnataka</option></select>
        </div>
    <div class="col">
        <label className="sm-2 col-form-label">City</label>
                  <select className="form-select col-sm-4" placeholder="Enter email">
                     <option value="1">Mumbai</option>
    <option value="2">Navi Mumbai</option>
    <option value="3">Pune</option></select>
                              </div>
   
              </div><div className="form-group row">
                 <div class="col">
        <label className="sm-2 col-form-label">Pincode</label>
    <input type="email" className="form-control col-sm-4" value="40099" />
    </div></div>
              

                      </div>
                      
          )}

          {activeTab === 2 && (
      <div>
      <div>
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center">
            <h6 className="mr-3 fw-bold">Client Access:</h6>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
              />
              <label className="form-check-label" htmlFor="male">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
              <label className="form-check-label" htmlFor="female">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
              <h6 className='fw-bold'>Client Admin Users</h6>
              <h6 className='fw-bold'>Client Admin #1</h6>

         <div className="form-group row">
        <div class="col">
        <label className="sm-2 col-form-label">First Name</label>
                                  <input type="text" className="form-control col-sm-4" value="Dheeraj"/>
        </div>
    <div class="col">
        <label className="sm-2 col-form-label">Last Nmae</label>
    <input type="email" className="form-control col-sm-4" value="Deokar" />
                              </div>
    <div class="col">
        <label className="sm-2 col-form-label">Email ID</label>
    <input type="email" className="form-control col-sm-4" value='dheeraj@gmail.com' />
                </div>
                 <div class="col">
        <label className="sm-2 col-form-label">Mobile No</label>
    <input type="email" className="form-control col-sm-4" value='8976347865' />
               <br></br> </div><br></br>
                 <h6 className='fw-bold'>Client Admin #2</h6>

         <div className="form-group row">
        <div class="col">
        <label className="sm-2 col-form-label">First Name</label>
                                  <input type="text" className="form-control col-sm-4" value="Dheeraj"/>
        </div>
    <div class="col">
        <label className="sm-2 col-form-label">Last Nmae</label>
    <input type="email" className="form-control col-sm-4" value="Deokar" />
                              </div>
    <div class="col">
        <label className="sm-2 col-form-label">Email ID</label>
    <input type="email" className="form-control col-sm-4" value='dheeraj@gmail.com' />
                </div>
                 <div class="col">
        <label className="sm-2 col-form-label">Mobile No</label>
    <input type="email" className="form-control col-sm-4" value='8976347865' />
    </div></div>
                          </div>
               
          
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <div class="col">
        <label className="sm-2 col-form-label">Assigned Firm</label>
    <input type="email" className="form-control col-sm-4 fw-bold" value="TRP D'HIVE INDIA LLP" />
                </div><br></br>
               <h6 className='fw-bold'>Firm Admin #1</h6>

              <div className="form-group row">
                <div class="col">
        <label className="sm-2 col-form-label">Email ID</label>
    <input type="email" className="form-control col-sm-4" value="kptripathi0019@D'Hive.in" />
                </div>
        <div class="col">
        <label className="sm-2 col-form-label">First Name</label>
                                  <input type="text" className="form-control col-sm-4" value="Dheeraj"/>
        </div>
    <div class="col">
        <label className="sm-2 col-form-label">Last Nmae</label>
    <input type="email" className="form-control col-sm-4" value="Deokar" />
                              </div>
    
                 <div class="col">
        <label className="sm-2 col-form-label">Mobile No</label>
    <input type="email" className="form-control col-sm-4" value='8976347865' />
               <br></br> </div><br></br>
                <div className="form-group row">
               <h6 className='fw-bold'>Firm Admin #2</h6>
                  
                <div class="col">
        <label className="sm-2 col-form-label">Email ID</label>
    <input type="email" className="form-control col-sm-4" value="kptripathi0019@D'Hive.in" />
                </div>
        <div class="col">
        <label className="sm-2 col-form-label">First Name</label>
                                  <input type="text" className="form-control col-sm-4" value="Dheeraj"/>
        </div>
    <div class="col">
        <label className="sm-2 col-form-label">Last Nmae</label>
    <input type="email" className="form-control col-sm-4" value="Deokar" />
                              </div>
    
                 <div class="col">
        <label className="sm-2 col-form-label">Mobile No</label>
    <input type="email" className="form-control col-sm-4" value='8976347865' />
               <br></br> </div></div>
            </div></div>
          )}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          
          <Example/></div>
</div></div>
    
  );
};

export default App;

    
