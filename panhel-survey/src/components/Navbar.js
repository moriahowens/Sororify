import React  from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <img src={logo} alt="Logo" className="logo"/>
                </li>
                <li>
                    <Link to = "/PNMSurvey"> PNM Survey </Link>
                </li>
                <li>
                    <Link to = "/MemberSurvey">  Member Survey</Link>
                 </li>
                 <li>
                    <Link to = "/">  </Link>
                  </li>

            </ul>
        </nav>
    );
}