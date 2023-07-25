import React, { useEffect, useState } from 'react';
// import { FaHome, FaSearch } from 'react-icons';

const Sidebar = () => {

    return(
        <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
            <a id="btn-collapse" className="sidebar-collapser">
            {/* <FaHome size={32} color="red" /> */} 
            </a>
            <div className="image-wrapper">
                <img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
            </div>
            <div className="sidebar-layout">
                <div className="sidebar-content">
                    <nav className="menu open-current-submenu">
                        <ul>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        {/* <FaUsers /> */}
                                    </span>
                                    <span className="menu-title">Daily Milk Prod</span> 
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        {/* <FaUsers /> */}
                                    </span>
                                    <span className="menu-title">Milk Table</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        {/* <FaUsers /> */}
                                    </span>
                                    <span className="menu-title">Salary Payment</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <span className="menu-icon">
                                        {/* <FaUsers /> */}
                                    </span>
                                    <span className="menu-title">Payment Table</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;