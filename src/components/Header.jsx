import { NavLink } from "react-router-dom";
import logo from "../assets/TAMI_logo.jpg"


export default function Header(){
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>
                        <NavLink to="ministries" id="ministries">Ministries</NavLink>
                        <div className="sub-menu">
                            <ul className="sub-menu">
                                <li><NavLink to="ministries/children">Children</NavLink></li>
                                <li><NavLink to="ministries/youth">Youth</NavLink></li>
                                <li><NavLink to="ministries/worship">Worship</NavLink></li>
                            </ul>
                        </div>
                        
                    </li>
                    <li><NavLink to="dvbs">DVBS</NavLink></li>
                    <li><NavLink to="news">News</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="contact-us">Contact us</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}