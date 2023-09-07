import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                VCube Software Solutions
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Technologies</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Python FullStack
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Java FullStack
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Devops with Cloud(AWS/Azure)
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Testing Tools
                </a>
              </p>
			  <p>
                <a href='#!' className='text-reset'>
                  Power BI with Sql server
                </a>
              </p>
			  <p>
                <a href='#!' className='text-reset'>
                  Web Technologies
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                2nd Floor,
				<br/>Above Raymond's Cloth Showroom, <br/>KPHB Phase 1,<br/>Kukatpally,<br/>Hyderabad- 500087.
              </p>
			  <p>
                <MDBIcon icon="home" className="me-2" />
                HIG-211,<br/>Besides Annamayya Hotel,<br/>Dhanalakshmi Center,<br/>KPHB Phase 2,<br/>
				Kukatpally,<br/> Hyderabad - 500087.<br/><br/>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hr@vcubesoftwaresolutions.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 7675070124
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 9059456742
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          VCube Software Solutions
        </a>
      </div>
    </MDBFooter>
  );
}