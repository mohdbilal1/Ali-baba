
//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../stylecss/globalBuyerDropshipping.css";

//import icons from react icons
import { BiSearch } from "react-icons/bi";
import { FiBox} from "react-icons/fi";
// import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { CgImport } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdHelpOutline, MdOutlineStorefront } from "react-icons/md";
import { AiOutlineMenuUnfold, AiOutlineMenuFold, AiOutlineFileProtect, AiOutlineSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";



const DropshippingSidebar = ({setState,state}) => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true)
    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        setState(!state)
    };
   
    
    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        {/* <div className="closemenu" onClick={menuIconClick}>
                            // changing menu collapse icon on click
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div> */}
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <p onClick={menuIconClick}>
                                {menuCollapse ? 
                                (
                                 <AiOutlineMenuUnfold style={{fontSize:'25px'}} />
                                ) : (
                                <span><AiOutlineMenuFold style={{fontSize:'25px'}}/>
                                  <span style={{ fontSize: '18px',marginLeft:'5px' }}>Abaris Workstation</span>
                                </span>)}
                            </p>
                        </div>
                    </SidebarHeader>

                    <div className="sidebar-body">
                        <SidebarContent>
                            <Menu className="sidebar-content" iconShape="square">
                                <MenuItem icon={<BiSearch style={{ fontSize: '25px' }} />}> <NavLink className='sidebar-tb' to={'/dropshipping'}>Search products</NavLink> </MenuItem>
                                <MenuItem icon={<CgImport style={{ fontSize: '25px' }} />}><NavLink className='sidebar-tb' to={'/import'}>Import list</NavLink> </MenuItem>
                                <MenuItem icon={<FiBox style={{ fontSize: '25px' }} />}><NavLink className='sidebar-tb' to={'/product'}>My Products</NavLink> </MenuItem>
                                <MenuItem icon={<AiOutlineFileProtect style={{ fontSize: '25px' }} />}><NavLink className='sidebar-tb' to={'/my-order'}>My Orders</NavLink> </MenuItem>
                                <MenuItem icon={<BsPeople style={{ fontSize: '25px' }} />}><NavLink className='sidebar-tb' to={'/supplier'}>My Suppliers </NavLink> </MenuItem>
                            </Menu>
                        </SidebarContent>

                        <SidebarFooter className="footr-main-div">
                            <Menu className="footr-bar" iconShape="square">
                                <MenuItem className="menuitem" icon={<HiOutlineLightBulb style={{ fontSize: '25px' }} />}><NavLink className='footr-sidebar-tb' to={'/buyer-academy'}>Buyer Academy</NavLink></MenuItem>
                            </Menu>
                            <Menu className="footr-bar" iconShape="square">
                                <MenuItem className="menuitem" icon={<MdHelpOutline style={{ fontSize: '25px' }} />}><NavLink className='footr-sidebar-tb' to={'/help'}>Help Center</NavLink></MenuItem>
                            </Menu>
                            <Menu className="footr-bar" iconShape="square">
                                <MenuItem className="menuitem" icon={<MdOutlineStorefront style={{ fontSize: '25px' }} />}><NavLink className='footr-sidebar-tb' to={'/my-store'}>My Store </NavLink></MenuItem>
                            </Menu>
                            <Menu className="footr-bar" iconShape="square">
                                <MenuItem className="menuitem" icon={<AiOutlineSetting style={{ fontSize: '25px' }} />}><NavLink className='footr-sidebar-tb' to={'/settings'}>Settings </NavLink></MenuItem>
                            </Menu>
                        </SidebarFooter>
                    </div>
                </ProSidebar>
            </div>
        </>
    );
};

export default DropshippingSidebar;
