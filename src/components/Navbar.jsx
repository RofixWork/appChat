import React, {useContext} from 'react'
import Module from './Module'
import { Context } from "../Global/Context";

const Navbar = () => {
    const { openModel, loader, user, logOut } = useContext(Context);
    const openModule = () => {
        openModel();
    }
    //logOut
    const userLogout = () => logOut();
    return (
        <>
        <Module />
        {!loader ?
            <div className="navbar fixed-top shadow">
                <div className="container">
                    <h3 className="logo">ChatApp</h3>
                    <div>
                    {!loader && user ? (
                        <div className="dropdown">
                        <button
                            className="btn-website1 dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {user.displayName}
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <li>
                            <span onClick={userLogout} style={{cursor:'pointer'}} className="dropdown-item">Log Out</span>
                            </li>
                        </ul>
                        </div>
                    ) : (
                        <button onClick={openModule} className="btn-website1">
                        Register / LogIn
                        </button>
                    )}
                    </div>
                </div>
            </div>
        : '...'}
      </>
    );
}

export default Navbar
