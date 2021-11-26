import Link from "next/link";
import { useEffect, useState } from "react";
import { Header, Logo, LogoH1, Nav, NavBtn, NavBtnLink, NavItem, NavLink, NavMenu } from "./NavbarStyles";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <Header active={navbar}>
      <Nav active={navbar}>
        <Logo>
          <Link href="#" passHref>
            <LogoH1>Streethairlab</LogoH1>
          </Link>
        </Logo>
        <NavMenu>
          <NavItem>
            <Link href="#services" passHref>
              <NavLink>Service</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#open" passHref>
              <NavLink>Open</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#testi" passHref>
              <NavLink>Testimonials</NavLink>
            </Link>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <a target="_blank" href="https://wa.me/081355134350" rel="noopener noreferrer">
            <NavBtnLink>Contact Us</NavBtnLink>
          </a>
        </NavBtn>
      </Nav>
    </Header>
  );
};

export default Navbar;
