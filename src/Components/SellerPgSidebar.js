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
import { GoHome,GoPeople } from "react-icons/go";
import { TbApps} from "react-icons/tb";
import { IoStatsChart,IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { RiMessage2Line,RiArrowRightSFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { CiLocationArrow1,CiEdit} from "react-icons/ci";
import { NavLink } from "react-router-dom";



const SellarPgSidebar = () => { 
    
    return (
        <>
            <div id="main-div">
                <ProSidebar>
                    <div className="sidebar-body-div">
                        <SidebarContent className="main-div">
                            <Menu className="sidebar-content-div" iconShape="circle">
                                <MenuItem icon={<CiLocationArrow1 style={{ fontSize: '16px' }} />}> <NavLink className='sidebar-tb-item' to={'/dropshipping'}>Quick Entry</NavLink><CiEdit style={{marginLeft:'70px',fontSize:'18px'}}/></MenuItem>
                                <MenuItem><NavLink style={{marginLeft:'58px',fontSize:'12px'}} to={'/dropshipping'}>Manage Products</NavLink> </MenuItem>
                                <MenuItem icon={<GoHome style={{ fontSize: '16px' }} />}> <NavLink className='sidebar-tb-item' to={'/dropshipping'}>Home</NavLink><RiArrowRightSFill style={{marginLeft:'107px'}}/>  </MenuItem>
                                <MenuItem icon={<MdOutlineStorefront style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/import'}>Manage storefront</NavLink><RiArrowRightSFill style={{marginLeft:'28px'}}/> </MenuItem>
                                <MenuItem icon={<TbApps style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/product'}>Product listings</NavLink><RiArrowRightSFill style={{marginLeft:'49px'}}/> </MenuItem>
                                <MenuItem icon={<RiMessage2Line style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/my-order'}>Message center</NavLink><RiArrowRightSFill style={{marginLeft:'48px'}}/> </MenuItem>
                                <MenuItem icon={<IoStatsChart style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/supplier'}>Visitor details </NavLink><RiArrowRightSFill style={{marginLeft:'57px'}}/> </MenuItem>
                                <MenuItem icon={<GoPeople style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/supplier'}>Contacts </NavLink><RiArrowRightSFill style={{marginLeft:'87px'}}/> </MenuItem>
                                <MenuItem icon={<BiNetworkChart style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/supplier'}>Campaigns </NavLink><RiArrowRightSFill style={{marginLeft:'72px'}}/> </MenuItem>
                                <MenuItem icon={<CgNotes style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/supplier'}>Orders </NavLink><RiArrowRightSFill style={{marginLeft:'99px'}}/> </MenuItem>
                                <MenuItem icon={<IoBriefcaseOutline style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/supplier'}>Help Center </NavLink><RiArrowRightSFill style={{marginLeft:'68px'}}/> </MenuItem>
                                <MenuItem icon={<MdOutlineStorefront style={{ fontSize: '16px' }} />}><NavLink className='sidebar-tb-item' to={'/supplier'}>Get Seller APP </NavLink><RiArrowRightSFill style={{marginLeft:'53px'}}/> </MenuItem>
                            </Menu>
                        </SidebarContent>
                    </div>
                </ProSidebar>
            </div>
        </>
    );
};

export default SellarPgSidebar;
