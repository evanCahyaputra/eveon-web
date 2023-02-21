import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Fevicon32 from "../assets/images/logo.ico";
import Fevicon16 from "../assets/images/logo.ico";
import MobileMenu from "../components/MobileMenu";
import { MenuContext } from "../context/MenuContext";

const Layout = (props) => {
  const [scrollTop, setScrollTop] = useState(false);
  const { menuStatus } = useContext(MenuContext);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.pageTitle}</title>
        <link rel="icon" type="image/ico" sizes="32x32" href={Fevicon32} />
        <link rel="icon" type="image/ico" sizes="16x16" href={Fevicon16} />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="page-wrapper" id="wrapper">
        {props.children}
      </div>

      {true === menuStatus ? <MobileMenu /> : null}

      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          className="scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </div>
  );
};

export default Layout;
