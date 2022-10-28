import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showNavColor, setShowNavColor] = useState(false);
  // const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  // const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#C5CAE9'}} >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/3460/3460335.png'
              height='50'
              alt=''
              loading='lazy'
            />
            TRuSTY
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='header'>
                <MDBNavbarLink aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/profiles'>Pet Sitters</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/add'>Add Profile</MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
</>
  )};






























// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/profiles">Pet Sitter</Link>{" "}
//         <Link to="/add">Add</Link>
//       </nav>
//     </div>
//   );
// }