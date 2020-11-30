import React from 'react';
import { Link} from 'react-router-dom';

const Nav = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-sm-6">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className ="nav-link" to="/about">About</Link>
                    </li>
                    <li className="float-right nav-item">
                        <Link className ="nav-link" to="/">Home</Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 navbar-nav">
                <span className="nav-item float-right col-sm-4 offset-sm-8">
                    <Link className ="nav-link" to="/login">Login</Link>
                </span>
            </div>
        </nav>
    );
}

export default Nav;