import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

const Footers = (props) => {
    return ( <>
    
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              {/* <img alt="logo" src="logo" width="30px" /> */}
              <span className="ml-3 h5 font-weight-bold">BRIA</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            The Botanical Research Institutes of America, Inc. is a Public Benefit Corporation. The public benefit purpose of BRIA, Inc. is to serve as a biodiversity action platform, deeply engaging local communities in the conservation and restoration of the biosphere.
            </p>
            
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              BRIA
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Log In</CDBFooterLink>
              <CDBFooterLink href="/">Careers</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Membership
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Gardens</CDBFooterLink>
              <CDBFooterLink href="/">Roundtables</CDBFooterLink>
              <CDBFooterLink href="/">Accredidations</CDBFooterLink>
              <CDBFooterLink href="/">Contributions</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy;Botanical Research Institutes of America, Inc., 2093 Philadelphia Pike #7321, Claymont, DE 19703   (302) 409-5630</small>
      </CDBBox>
    </CDBFooter>
  

    </> );
}
 
export default Footers;