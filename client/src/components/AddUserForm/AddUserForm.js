import React, {useState} from "react";
import Axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  // MDBRadio,

}
from 'mdb-react-ui-kit';



export const AddUserForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [neighborhood, setNeighbourhood] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    
  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="Sample photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Add a Pet Sitter Profile</h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' onChange={event => setName(event.target.value)}/>
                    </MDBCol>

                    {/* <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                    </MDBCol> */}

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='text'onChange={event => setEmail(event.target.value)}/>

                  {/* <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                  </div> */}


                  <MDBInput wrapperClass='mb-4' label='Neighbourhood' size='lg' id='form4' type='text'onChange={event => setNeighbourhood(event.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form5' type='text'onChange={event => setDescription(event.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='$ per hour' size='lg' id='form6' type='text'onChange={event => setPrice(event.target.value)}/>

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg'onClick={() => {
                
                Axios.post("/api/users/create", {
                    name,
                    email,
                    neighborhood,
                    description,
                    price
                })}}>Submit form</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

