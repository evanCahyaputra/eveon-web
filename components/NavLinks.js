import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <ScrollLink
          activeClass="current"
          to="home-page"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="our-value"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Our Value
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="about-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About Us
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact Us
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavLinks;
