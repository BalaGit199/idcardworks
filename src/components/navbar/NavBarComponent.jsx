import React from 'react'
import './navbarcomponent.css'
import { VscListSelection } from "react-icons/vsc";
function NavBarComponent() {
  return (
    <div className='navbar-main-container'>
      <div className="navbar-inner-container">
        {/* <div className="navbar-main-contant"> */}
        <div className="navbar-header-container">
           <div className='contant-1'>
              <div className='title'>
                  St.bedes Admin
              </div>
              <div className='icon'><VscListSelection size={25}/></div>
           </div>
           <div className='contant-2'>
             <div className='logout'>logout</div>
             <div></div>
           </div>
        </div>
        <div className="navbar-sidebar-container">
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default NavBarComponent
