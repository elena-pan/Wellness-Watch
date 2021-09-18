import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

import setAuthToken from "../../utils/setAuthToken";

/**
 * Navbar with name and logo icon
 */
function Navbar(props) {

    function logOut() {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        props.setUser(null);
    }

    const loginLogoutLinks = props.user ?
        (<React.Fragment>
            <li>
                <Link to="/login" className="blue-text" onClick={() => logOut()}>Logout</Link>
            </li>
        </React.Fragment>
        ) : (
        <React.Fragment>
            <li>
                <Link to="/register" className="blue-text">Register</Link>
            </li>
            <li className="black-text">|</li>
            <li>
                <Link to="/login" className="blue-text">Login</Link>
            </li>
        </React.Fragment>
        );


    return (
        <div className="navbar-fixed">
            <nav className="z-depth-0">
                <div className="nav-wrapper white">
                    <div className="container">
                        <Link
                            to="/"
                            className="col s5 brand-logo left black-text"
                        >
                            <i className="material-icons">public</i>
                            Image Repository
                        </Link>
                        <ul className="right">
                            { loginLogoutLinks }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;