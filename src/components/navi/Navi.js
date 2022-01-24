import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand><Link to="/">Northwind Mağazası</Link></NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/saveProduct">Ürün Ekle</Link>
                </NavLink>
              </NavItem>
              <NavItem></NavItem>
              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
