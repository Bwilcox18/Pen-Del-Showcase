import React, { Component }  from 'react';
import { Navbar, Nav, NavLink } from 'reactstrap';

class Header extends Component {
    
    render() {
        return(
            <>
                <Navbar color="dark" light expand="md" className="justify-content-center">
                    <div className="container">
                        <Nav navbar className="justify-content-center">
                            <div className="row">
                                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                                    Home 
                                </NavLink>
                                <NavLink className="d-inline p-2 bg-dark text-white ml-4" to="/About">
                                    About Us 
                                </NavLink>
                            </div>
                        </Nav>   
                    </div>  
                </Navbar>
                <img src="/assets/images/logo.png" alt="NuCamp Logo" className="w-100 pt-2 col-md-7" />
            </>
        );
    }
}

export default Header;