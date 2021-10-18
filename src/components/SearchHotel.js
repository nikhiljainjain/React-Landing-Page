import React, { Fragment } from 'react';
import './components.css'
import TestingCode from './TestingCode'
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


export default function SearchHotel() {
  return (
    <div className="search-hotel">
        <MDBBtnGroup flat>
            <TestingCode title="Location"  />
            <TestingCode title="Rooms"  />
            <TestingCode title="Adult"  />
            <TestingCode title="Child"  />
            <MDBBtnGroup>
                <MDBBtn color="success" flat size="lg">Search</MDBBtn>
            </MDBBtnGroup>
        </MDBBtnGroup>
    </div>
  );
}