import React from "react";
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const BtnGroupPage = (props) => {
    return (
        <>
            <MDBDropdown size="lg" flat>
                <MDBDropdownToggle caret color="light">
                    {props.title}
                </MDBDropdownToggle>
                <MDBDropdownMenu basic color="light">
                    <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                    <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                    <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>  
            
        </>
    )
}

export default BtnGroupPage;