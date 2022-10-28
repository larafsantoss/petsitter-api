import React, { useState } from "react"
import Axios from "axios"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';

function Card(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftImage, setDraftImage] = useState(props.image)
  const [draftName, setDraftName] = useState(props.name)
  const [draftEmail, setDraftEmail] = useState(props.email)
  const [draftNeighbourhood, setDraftNeighbourhood] = useState(props.neighbourhood)
  const [draftDescription, setDraftDescription] = useState(props.description)
  const [draftPrice, setDraftPrice] = useState(props.price)

const handleSubmit = () => {
  const objForm = { name: draftName,
    email: draftEmail,
    neighbourhood: draftNeighbourhood,
    description: draftDescription,
    price: draftPrice,
    image: draftImage
  }
  Axios.put("/api/users/update/" + props.id, objForm).then(() => {
    setIsEditing(false);
    props.onUpdate();
  })
}
  return (
  
  <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
      <MDBCard>
      <MDBCardImage position='top' alt='...' src={props.image} />
      <MDBCardBody>
        {!isEditing && (
          <>
          <MDBCardTitle data-testid="title-name">{props.name}</MDBCardTitle>
        <MDBCardText>
          {props.description}
        </MDBCardText>

      <MDBListGroup >
        <MDBListGroupItem>{props.email}</MDBListGroupItem>
        <MDBListGroupItem>{props.neighbourhood}</MDBListGroupItem>
        <MDBListGroupItem>{props.price}</MDBListGroupItem>
      </MDBListGroup>
      {!props.readOnly && (
        <>
        <MDBBtn size='sm' color='secondary' onClick={() => { setIsEditing(true)}}>Edit Button</MDBBtn>
        <MDBBtn outline className='mx-2' color='danger' size='sm' onClick={ async () => {
          const test = Axios.delete(`api/users/${props.id}`).then(() => {
            props.onUpdate()
          })
        }}>Delete</MDBBtn>
        </>
      )}
          </>
        )}
        {isEditing && (
          <div>
            <MDBInput autoFocus onChange={e => setDraftName(e.target.value)} label='Name' id='typeText' type='text' value={draftName} /> <br />
            <MDBInput autoFocus onChange={e => setDraftEmail(e.target.value)} label='Email' id='typeEmail' type='email' value={draftEmail} /> <br />
            <MDBInput autoFocus onChange={e => setDraftNeighbourhood(e.target.value)} label='Suburb' id='typeText' type='text' value={draftNeighbourhood} /> <br />
            <MDBInput autoFocus onChange={e => setDraftDescription(e.target.value)} label='Description' id='typeText' type='text' value={draftDescription} /> <br />
            <MDBInput autoFocus onChange={e => setDraftPrice(e.target.value)} label='$ per hour' id='typeText' type='text' value={draftPrice} /> <br />
            <MDBInput autoFocus onChange={e => setDraftImage(e.target.value)} label='Image' id='typeText' type='text' value={draftImage} /> <br />
            <MDBBtn size='sm' outline className='mx-2' color='secondary' onClick={() => { handleSubmit() }}>
        Save
      </MDBBtn>
            <MDBBtn onClick={() => { setIsEditing(false) }} className='mx-2' color='light' size='sm'>
        Cancel
            </MDBBtn>
          </div>
        )}
      </MDBCardBody>
</MDBCard>
</MDBCol>
</MDBRow>
  );
}

export default Card
