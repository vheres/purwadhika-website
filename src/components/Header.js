import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          MouseOverButton: false
        };
      }

      handleButtonOpen = () => {
        this.setState({ MouseOverButton: true})

      }
    
      handleButtonClose = () => {
        this.setState({ MouseOverButton: false })
 
         
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }   
    renderHeader() {
        return(
            <div>
                <Navbar color="dark" light expand="sm" className="py-0" style={{'height': '50px'}}>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <Dropdown nav inNavbar isOpen={this.state.MouseOverButton}>
                        <DropdownToggle nav caret onMouseEnter={ this.handleButtonOpen } onMouseLeave={ this.handleButtonClose } className="header-button" >
                        Options
                        </DropdownToggle>
                        <DropdownMenu right onMouseEnter={ this.handleButtonOpen } onMouseLeave={ this.handleButtonClose }>
                            <div className="container-fluid" style={{'width': '500px'}}>
                                <div className="row">
                                    <div className="col">
                                    tes
                                    </div>
                                    <div className="col">
                                    set
                                    </div>
                                </div>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <Button outline color="success" href="/signin">Sign in</Button>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        );
    }

    render() {
        return (
        this.renderHeader()
        );   
    }
}

export default Header;