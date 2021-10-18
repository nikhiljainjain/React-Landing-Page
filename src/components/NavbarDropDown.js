import React from 'react';
import './components.css'
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';

export default function NavbarDropDown(props) {

    if (props.searchHotel) {
        return (
            <MDBDropdown size="lg" className='dropdown-noedges'>
                <MDBDropdownToggle color='light'>
                    {props.dropdownTitle}
                </MDBDropdownToggle>
                <MDBDropdownMenu size="lg" className="dropdown-button">
                    <MDBDropdownItem>
                        <MDBDropdownLink>Navigation</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink>Let's Navigate</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                        <MDBDropdownLink>Move to Other Page</MDBDropdownLink>
                    </MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        );
    }

    return (
        <MDBDropdown>
            <MDBDropdownToggle tag='a' className='nav-link'>
                {props.dropdownTitle}
            </MDBDropdownToggle>
            <MDBDropdownMenu>
                <MDBDropdownItem>
                <MDBDropdownLink>Navigation</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                <MDBDropdownLink>Let's Navigate</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                <MDBDropdownLink>Move to Other Page</MDBDropdownLink>
                </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}