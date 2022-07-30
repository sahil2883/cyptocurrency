import React from 'react';
import india from '../img/india.png';
import profile from '../img/profile.png';
import { BiSearchAlt, BiMoon } from 'react-icons/bi';
import { MdApps, MdNotifications, MdOutlineWbSunny } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


function Header(props) {
  const toggle = props.toggle;
  const handletoggle = props.handletoggle;
  const mode = props.mode;
  const handleMode = props.handleMode;
  return (
    <div className='header'>
      <div>
        <nav>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center justify-content-between'>
              {toggle ? "" :
                <BsArrowRight className='icons-3' onClick={() => { handletoggle() }} />}
              <BiSearchAlt className='icons-3' />
              <input className='form-control' placeholder='search here...' />
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              {mode ? <BiMoon className='icons-6 cursor-pointer' onClick={handleMode} /> : <MdOutlineWbSunny className='icons-5 text-warning cursor-pointer' onClick={handleMode} />}


              <MdApps className="icons-3" />
              <MdNotifications className="icons-3" />

              <img src={india} className="img-1 icons-4" />
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                <img src={profile} className="img-1 icons-4 cursor-pointer" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item><Link to="">Action</Link></Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header