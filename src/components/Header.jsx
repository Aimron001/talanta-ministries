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
                    <li><NavLink to="ministries">Ministries</NavLink></li>
                    <li><NavLink to="dvbs">DVBS</NavLink></li>
                    <li><NavLink to="news">News</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="contact-us">Contact us</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}