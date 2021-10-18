import React, { useState } from 'react';
import './components.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';
import NavbarDropDown from './NavbarDropDown'

export default function TopNavBar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='' fixed='top' transparent='true' className='noshadow-navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>TravelElbo</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} center>
          <MDBNavbarNav  fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                <NavbarDropDown dropdownTitle="Tour" />
            </MDBNavbarItem>
            
            <MDBNavbarItem>
                <NavbarDropDown dropdownTitle="Hotel" />
            </MDBNavbarItem>
            
            <MDBNavbarItem>
                <NavbarDropDown dropdownTitle="Flights" />
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current='page' href='#'>
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current='page' href='#'>
                Blog
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current='page' href='#'>
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
 
        </MDBCollapse>
        <form className='d-flex input-group w-auto'>
            <MDBBtn outline color='light'>
                <MDBIcon fab icon="whatsapp" />
                <span className="whatsapp-title">Whatsapp</span>
            </MDBBtn>
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
}