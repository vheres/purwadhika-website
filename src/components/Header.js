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
          MouseOverButton: false,
          dropdownCSS: ''
        };
      }

      handleButtonOpen = () => {
        this.setState({ MouseOverButton: true, dropdownCSS: 'header-button-select' })

      }
    
      handleButtonClose = () => {
        this.setState({ MouseOverButton: false, dropdownCSS: '' })
 
         
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }   
    renderHeader() {
        return(
            <div>
                <Navbar color="dark" light expand="sm" className="bg-transparent" style={{'height': '50px'}}>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/" className="mx-1">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap" className="mx-1">GitHub</NavLink>
                    </NavItem>
                    <Dropdown nav inNavbar isOpen={this.state.MouseOverButton} className="mx-1">
                        <DropdownToggle nav caret onMouseEnter={ this.handleButtonOpen } onMouseLeave={ this.handleButtonClose } className={`${this.state.dropdownCSS}`} >
                        <span className="header-dropdown-text">Options</span>
                        </DropdownToggle>
                        <DropdownMenu right onMouseEnter={ this.handleButtonOpen } onMouseLeave={ this.handleButtonClose } className="header-dropdown-container">
                            <div className="container-fluid" style={{'width': '600px'}}>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            Full-Time Courses
                                        </div>
                                        <div className="row">
                                            course 1
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            Part-Time Courses
                                        </div>
                                        <div className="row">
                                            part-time course 1
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            Part-Time Courses
                                        </div>
                                        <div className="row">
                                            part-time course 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <Button outline color="success" href="/signin" className="mx-1">Sign in</Button>
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