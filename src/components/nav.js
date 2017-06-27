import React, {Component} from 'react'
import '../App.css';
import { login, logout, isLoggedIn } from '../utils/authService';
import {Link} from 'react-router';

class NavComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Miniflix</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">All Videos</Link>
                        </li>
                        <li>
                            {(isLoggedIn())
                                ? <Link to="/upload">Upload Videos</Link>
                                : ''
}
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            {(isLoggedIn())
                                ? (
                                    <button className="btn btn-danger log" onClick={() => logout()}>Log out
                                    </button>
                                )
                                : (
                                    <button className="btn btn-info log" onClick={() => login()}>Log In</button>
                                )
}
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavComponent