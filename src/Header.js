import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function NavItemLink({icon, to, children}) {
  return(                
  <NavItem>
    <NavLink className="nav-link" to={to}>
      <i className={`fa ${icon} fa-lg`} /> {children}
    </NavLink>
  </NavItem>)
}
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>NuCamp</h1>
                <h2>a better way to camp</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <Container>
            <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItemLink to="/home" icon="fa-home">
                  Home
                </NavItemLink>
                <NavItemLink to="/directory" icon="fa-list">
                  Directory
                </NavItemLink>
                <NavItemLink to="/aboutus" icon="fa-info">
                  About
                </NavItemLink>
                <NavItemLink to="/contactus" icon="fa-address-card">
                  Contact Us
                </NavItemLink>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
