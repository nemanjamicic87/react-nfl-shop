import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import logo from "../logo.svg";
import { ButtonWrapper } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm">
        <Link to='/'>
          <img src={logo} alt="logo" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-left">
            <li className="nav-item ml-1">
              <Link to='/' className="nav-link">products</Link>
            </li>
          </ul>
          <Link to='/cart' className="ml-auto">
            <ButtonWrapper>
              <span className="mr-1">
                <i className="fas fa-cart-plus"/></span>
              Cart
            </ButtonWrapper>
          </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  height:70px;
  background: var(--mainWhite);
  .nav-link{
    color:var(--mainDark)!important;
    font-size:1.2rem;
    text-transform: capitalize;
  }
`;
