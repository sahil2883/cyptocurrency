import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import logo from '../img/bit.png';
import { Link } from 'react-router-dom';
import { MdDashboardCustomize, MdAppSettingsAlt, MdOutlineAccountCircle, MdSettingsPower, MdLogout } from 'react-icons/md';
import { RiPagesLine } from 'react-icons/ri';
import { SiSalesforce, SiCivicrm, SiElement } from 'react-icons/si';
import { CgComponents } from 'react-icons/cg';
import { AiOutlineTable } from 'react-icons/ai';
import { FaGem, FaHeart } from 'react-icons/fa';
import {RiArrowDropDownLine} from 'react-icons/ri';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function Sidebar(props) {

    const toggle = props.toggle;
    const handletoggle = props.handletoggle;

    return (
        <>
            <div className={toggle?'d-flex-sidebar':"d-flex-sidebar-1"}>
                {toggle?
                <div className=''>
                    <div className='d-flex align-items-center justify-content-between bg-coloe px-2  '>
                        <img src={logo} className="img" />
                        <HiMenuAlt1 className='icons' onClick={()=>{handletoggle()}} />
                    </div>
                    <div className='bg-color-2'>
                        <ul>

                            <li><Link to=""><MdDashboardCustomize className='icons-1' />Dashboard</Link></li>
                            <li><Link to=""><RiPagesLine className='icons-1' />Pages</Link></li>
                            <li><Link to=""><SiSalesforce className='icons-1' />Sales</Link></li>
                            <li><Link to=""><MdAppSettingsAlt className='icons-1' />Application</Link></li>
                            <li><Link to=""><SiCivicrm className='icons-1' />CRM</Link></li>
                            <li><Link to=""><SiElement className='icons-1' />Elements</Link></li>
                            <Menu >
                                <SubMenu title="testing" icon={<FaHeart className='icons-1' />} suffix={<RiArrowDropDownLine className='icons-2'/>}>
                                    <MenuItem> <MdAppSettingsAlt className='icons-1' />Component 1</MenuItem>
                                    <MenuItem> <MdAppSettingsAlt className='icons-1' />Component 2</MenuItem>
                                </SubMenu>
                            </Menu>
                            <li><Link to=""><CgComponents className='icons-1' />Components</Link></li>
                            <li><Link to=""><AiOutlineTable className='icons-1' />Tables</Link></li>
                            <li><Link to=""><MdOutlineAccountCircle className='icons-1' />Account</Link></li>
                            <li><Link to=""><MdSettingsPower className='icons-1' />Settings</Link></li>
                            <li><Link to=""><MdLogout className='icons-1' />Logout</Link></li>
                        </ul>
                    </div>
                </div>:
                <div className=''>
                <div className='d-flex align-items-center justify-content-between bg-coloe px-3  '>
                    <img src={logo} className="img-0" />
                </div>
                <div className='bg-color-2'>
                    <ul>

                        <li><Link to=""><MdDashboardCustomize className='icons-1' /></Link></li>
                        <li><Link to=""><RiPagesLine className='icons-1' /></Link></li>
                        <li><Link to=""><SiSalesforce className='icons-1' /></Link></li>
                        <li><Link to=""><MdAppSettingsAlt className='icons-1' /></Link></li>
                        <li><Link to=""><SiCivicrm className='icons-1' /></Link></li>
                        <li><Link to=""><SiElement className='icons-1' /></Link></li>
                        
                        <li><Link to=""><CgComponents className='icons-1' /></Link></li>
                        <li><Link to=""><AiOutlineTable className='icons-1' /></Link></li>
                        <li><Link to=""><MdOutlineAccountCircle className='icons-1' /></Link></li>
                        <li><Link to=""><MdSettingsPower className='icons-1' /></Link></li>
                        <li><Link to=""><MdLogout className='icons-1' /></Link></li>
                    </ul>
                </div>
            </div>
                }
            </div>
        </>
    )
}

export default Sidebar;