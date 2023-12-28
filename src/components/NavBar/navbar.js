import React, { useState } from 'react';
import './navbar.css';
// import logo from '../../assets/logo.jpg';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png';
import MenuImg from '../../assets/menu.png';

const Navbar = () => {
    const[showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            {/* <img src={logo} alt="logo" className="logo" /> */}
            <div className="desktopMenu">
                <Link className="desktopMenuListItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={10}>About Me</Link>
                <Link className="desktopMenuListItem" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={10}>My Expertise</Link>
                <Link className="desktopMenuListItem" activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={10}>My Projects</Link>
                <Link className="desktopMenuListItem" activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={10}>Contact Me</Link>
                {/* <Link className="desktopMenuListItem" activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500}>Home</Link> */}
            </div>
            {/* <button className="desktopMenuBtn" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                Contact Me<img src={ContactImg} alt=" " className="desktopMenuImg" /></button>
 */}

            <img src={MenuImg} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link className="listItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>About Me</Link>
                <Link className="listItem" activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>My Expertise</Link>
                <Link className="listItem" activeClass='active' to='project' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>My Projects</Link>
                <Link className="listItem" activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>Contact Me</Link>
                {/* <Link className="desktopMenuListItem" activeClass='active' to='client' spy={true} smooth={true} offset={-100} duration={500}>Home</Link> */}
            </div>    

        </nav>
    )
}

export default Navbar;