import React, { useState } from "react"
import Axios from "axios"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  // MDBCardLink,
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
          <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>
          {props.description}
        </MDBCardText>
      {/* </MDBCardBody> */}
      <MDBListGroup flush>
        <MDBListGroupItem>{props.email}</MDBListGroupItem>
        <MDBListGroupItem>{props.neighbourhood}</MDBListGroupItem>
        <MDBListGroupItem>{props.price}</MDBListGroupItem>
      </MDBListGroup>
      {!props.readOnly && (
        <>
        <MDBBtn size='sm' onClick={() => { setIsEditing(true)}}>Edit Button</MDBBtn>
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
            <MDBInput autoFocus onChange={e => setDraftName(e.target.value)} label='Text input' id='typeText' type='text' value={draftName} />
            <MDBInput autoFocus onChange={e => setDraftEmail(e.target.value)} label='Email input' id='typeEmail' type='email' value={draftEmail} />
            <MDBInput autoFocus onChange={e => setDraftNeighbourhood(e.target.value)} label='Text input' id='typeText' type='text' value={draftNeighbourhood} />
            <MDBInput autoFocus onChange={e => setDraftDescription(e.target.value)} label='Text input' id='typeText' type='text' value={draftDescription} />
            <MDBInput autoFocus onChange={e => setDraftPrice(e.target.value)} label='Text input' id='typeText' type='text' value={draftPrice} />
            <MDBInput autoFocus onChange={e => setDraftImage(e.target.value)} label='Text input' id='typeText' type='text' value={draftImage} />
            <MDBBtn size='sm' onClick={() => { handleSubmit() }}>
        Save
      </MDBBtn>
            <MDBBtn onClick={() => { setIsEditing(false) }} outline className='mx-2' color='secondary' size='sm'>
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


//       <MDBCol>
//         <MDBCard> 
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/042.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/043.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard>
//           <MDBCardImage
//             src='https://mdbootstrap.com/img/new/standard/city/044.webp'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   );
// }




    // <div className="card">
    //   <div className="our-card-top">

    //   </div>
    //   <div className="card-body">
    //     {!isEditing && (
    //       <>
    //         <h4>{props.name}</h4>
    //         <p className="text-muted small">{props.email}</p>
    //         <p className="text-muted small">{props.neighbourhood}</p>
    //         <p className="text-muted small">{props.description}</p>
    //         <p className="text-muted small">{props.price}</p>
    //         {!props.readOnly && (
    //           <>
    //             <button
    //               onClick={() => {
    //                 setIsEditing(true)
    //                 }
                  
    //         }
    //               className="btn btn-sm btn-primary"
    //             >
    //               Edit
    //             </button>{" "}
    //             <button
    //               onClick={async () => {
    //                 const test = Axios.delete(`/api/users/${props.id}`).then(() => {
    //                   props.onUpdate()
    //                 })
    //                 // props.setUsers(prev => {
    //                 //   return prev.filter(user => {
    //                 //     return user._id != props.id
    //                 //   })
    //                 // })
    //               }}
    //               className="btn btn-sm btn-outline-danger"
    //             >
    //               Delete
    //             </button>
    //           </>
    //         )}
    //       </>
//         )}
//         {isEditing && (
//           <div>
//             <div className="mb-1">
//               <input autoFocus onChange={e => setDraftName(e.target.value)} type="text" className="form-control form-control-sm" value={draftName} />
//             </div>
//             <div className="mb-2">
//               <input onChange={e => setDraftEmail(e.target.value)} type="text" className="form-control form-control-sm" value={draftEmail} />
//             </div>
//             <div className="mb-2">
//               <input onChange={e => setDraftNeighbourhood(e.target.value)} type="text" className="form-control form-control-sm" value={draftNeighbourhood} />
//             </div>
//             <div className="mb-2">
//               <input onChange={e => setDraftDescription(e.target.value)} type="text" className="form-control form-control-sm" value={draftDescription} />
//             </div>
//             <div className="mb-2">
//               <input onChange={e => setDraftPrice(e.target.value)} type="text" className="form-control form-control-sm" value={draftPrice} />
//             </div>
//             <button onClick={() => {
//               handleSubmit()
//             }} className="btn btn-sm btn-success">Save</button>{" "}
//             <button onClick={() => setIsEditing(false)} className="btn btn-sm btn-outline-secondary">
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

