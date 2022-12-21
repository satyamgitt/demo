import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const Nav = styled.nav`
    .navbar-list {
      
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {

          &:link,
          &:visited 
          {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover {
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.helper}; 
          }
        }

        .navbar-link.active{
          border-bottom: 5px solid blue;
        }

      }





      @media only screen and (max-width: 650px) {
        .navbar-link{
            font-size: 15px;
        }
      }
    }



    @media only screen and (max-width: 750px) {
      .navbar-link{
          font-size: 25px;
      }
    }`;

  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">

          <li>
            <NavLink className="navbar-link"  to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/service">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/Login">
              Login
            </NavLink>
          </li>

          {/* <li>
            <NavLink className="navbar-link" to="/Register">
              Register
            </NavLink>
          </li> */}
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;