import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import mainLogo from "../../assets/Logo.jpeg"

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={mainLogo} alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 20%;
    width: 20%;
    padding: 10px;
  }
`;

export default Header;