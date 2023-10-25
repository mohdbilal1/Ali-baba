import React from "react";
//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
} from "react-pro-sidebar";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../stylecss/sellerSidebarStyle.css"

//import icons from react icons
import { GoHome, GoPeople } from "react-icons/go";
import { TbApps } from "react-icons/tb";
import { IoStatsChart, IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { RiMessage2Line, RiArrowRightSFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { CiLocationArrow1, CiEdit } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useState } from "react";



const SellarPgSidebar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
    const linkStyle = (link) => {
        return {
          backgroundColor: activeLink === link ? '#1565c0' : 'transparent',
          fontSize: activeLink === link ? '20px' : '16px',
          color: activeLink === link ? 'white' : 'black',
          fontWeight:activeLink===link ? 'bold' : 'normal',
        };
      };
    return (
        <>
            <div id="main-div">
                <ProSidebar>
                    <div className="sidebar-body-div">
                        <SidebarContent className="main-div">
                            <Menu className="sidebar-content-div" iconShape="circle">
                                <MenuItem style={linkStyle('Quick Entry')} onClick={() => handleLinkClick('Quick Entry')} icon={<CiLocationArrow1 style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={''}>Quick Entry</NavLink><CiEdit style={{ marginLeft: '70px', fontSize: '18px' }} />
                                </MenuItem>
                                <MenuItem>
                                    <NavLink style={{ marginLeft: '58px', fontSize: '12px' }} to={''}>Manage Products</NavLink>
                                </MenuItem>
                                <MenuItem style={linkStyle('home')} onClick={() => handleLinkClick('home')} icon={<GoHome style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/seller-pg'}>Home</NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '107px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Manage')} onClick={() => handleLinkClick('Manage')}  icon={<MdOutlineStorefront style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/manage-storefront'}>Manage storefront</NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '28px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Product')} onClick={() => handleLinkClick('Product')}  icon={<TbApps style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/product-list'}>Product listings</NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '49px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Message')} onClick={() => handleLinkClick('Message')}  icon={<RiMessage2Line style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={''}>Message center</NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '48px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Visitor')} onClick={() => handleLinkClick('Visitor')}  icon={<IoStatsChart style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/visitor'}>Visitor details </NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '57px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Contacts')} onClick={() => handleLinkClick('Contacts')}  icon={<GoPeople style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/contact-page'}>Contacts </NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '87px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Campaigns')} onClick={() => handleLinkClick('Campaigns')}  icon={<BiNetworkChart style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/campaigns'}>Campaigns </NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '72px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Orders')} onClick={() => handleLinkClick('Orders')}  icon={<CgNotes style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/seller-order'}>Orders </NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '99px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Help')} onClick={() => handleLinkClick('Help')}  icon={<IoBriefcaseOutline style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/help-center'}>Help Center </NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '68px' }} />
                                </MenuItem>
                                <MenuItem style={linkStyle('Get Seller')} onClick={() => handleLinkClick('Get Seller')}  icon={<MdOutlineStorefront style={{ fontSize: '16px',color:'white' }} />}>
                                    <NavLink className='sidebar-tb-item' to={'/get-app'}>Get Seller APP </NavLink><RiArrowRightSFill style={{ color:'white',marginLeft: '53px' }} />
                                </MenuItem>
                            </Menu>
                        </SidebarContent>
                    </div>
                </ProSidebar>
            </div>
        </>
    );
};

export default SellarPgSidebar;
