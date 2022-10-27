import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";



export const AddUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [neighborhood, setNeighbourhood] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const reset = () => {
    setName("")
    setEmail("")
    setNeighbourhood("")
    setDescription("")
    setPrice("")
  }
  const handleSubmit = () => {
    Axios.post("/api/users/create", {
      name,
      email,
      neighborhood,
      description,
      price
    }).then(() => {
      reset()
      navigate("/profiles")
    })
  }

  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="Sample photo" className="rounded-start" fluid />
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Add a Pet Sitter Profile</h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' value={name} onChange={event => setName(event.target.value)} />
                    </MDBCol>

                    {/* <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                    </MDBCol> */}

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='text' value={email} onChange={event => setEmail(event.target.value)} />

                  <MDBInput wrapperClass='mb-4' label='Neighbourhood' size='lg' id='form4' type='text' value={neighborhood} onChange={event => setNeighbourhood(event.target.value)} />
                  <MDBInput wrapperClass='mb-4' label='Description' size='lg' id='form5' type='text' value={description} onChange={event => setDescription(event.target.value)} />
                  <MDBInput wrapperClass='mb-4' label='$ per hour' size='lg' id='form6' type='text' value={price} onChange={event => setPrice(event.target.value)} />

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg' onClick={() => {reset()}}>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg' onClick={() => {
                      handleSubmit()

                    }}>Submit form</MDBBtn>
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

