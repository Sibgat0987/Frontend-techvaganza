import './Header.css';
import '../../../styles/Home.css';
import '../../../App.css';
import logo from '../../../../public/logo.png';
import bg1 from '../../../../public/Group 1.png';
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <img src={bg1} alt='bg' className='background-image' />

      <nav className='Navbar'>
        <img src={logo} alt='Logo' className='logo' />

        <div className="hamburger-container" onClick={toggleMenu}>
          <RxHamburgerMenu id="hamburger" alt="Menu" />
        </div>

        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li><a href='/'>Home</a></li>
          <li><a href='/events'>Events</a></li>
          <li><a href='/sponsor'>Sponsor</a></li>
          <li><a href='/register'>Register <IoMdArrowDropdown className='dropbtn'/></a>
            <ul id='submenu'>
              <li><a href="/attendee">Attendee</a></li>
              <li><a href="/participant">Participant</a></li>
              <li><a href="/institute">Institute</a></li>
              <li><a href="/campus_ambassador">Campus Ambassador</a></li>
            </ul>
          </li>
          <li><a href='/resources'>Resources <IoMdArrowDropdown className='dropbtn'/></a>
            <ul id='submenu'>
              <li><a href="/schedule">Schedule</a></li>
              <li><a href="/brochure">Brochure</a></li>
            </ul>
          </li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}