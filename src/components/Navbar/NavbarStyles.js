import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: background-color 0.5s ease;

  background-color: ${(props) => (props.active ? "black" : "none")};

  @media screen and (max-width: 900px) {
    position: absolute;

    background-color: transparent;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  transition: padding 1s ease;

  padding: ${(props) => (props.active ? "none" : "1.5vh 0")};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const LogoH1 = styled.h1`
  color: #fff;
  font-size: 2rem;
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(110px, 1fr));
  justify-self: center;
  align-items: center;
  margin-left: -50px;

  @media screen and (max-width: 900px) {
    padding: 50px 0 10px;
    margin-left: -15px;
  }

  @media screen and (max-width: 280px) {
    grid-template-columns: repeat(3, 90px);
  }
`;

export const NavItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;

  &:hover {
    transform: scale(1.06);
    color: #f3a658;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  padding: 10px 30px;
  background-color: #f3a658;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.06);
  }
`;
