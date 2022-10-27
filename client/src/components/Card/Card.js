import React, { useEffect, useState } from "react"
import Axios from "axios"


function Card(props) {
  const [isEditing, setIsEditing] = useState(false)
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
    price: draftPrice
  }
  Axios.put("/api/users/update/" + props.id, objForm).then(() => {
    setIsEditing(false);
    props.onUpdate();
  })
}
  return (
    <div className="card">
      <div className="our-card-top">

      </div>
      <div className="card-body">
        {!isEditing && (
          <>
            <h4>{props.name}</h4>
            <p className="text-muted small">{props.email}</p>
            <p className="text-muted small">{props.neighbourhood}</p>
            <p className="text-muted small">{props.description}</p>
            <p className="text-muted small">{props.price}</p>
            {!props.readOnly && (
              <>
                <button
                  onClick={() => {
                    setIsEditing(true)
                    }
                  
            }
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </button>{" "}
                <button
                  onClick={async () => {
                    const test = Axios.delete(`/api/users/${props.id}`).then(() => {
                      props.onUpdate()
                    })
                    // props.setUsers(prev => {
                    //   return prev.filter(user => {
                    //     return user._id != props.id
                    //   })
                    // })
                  }}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </>
            )}
          </>
        )}
        {isEditing && (
          <div>
            <div className="mb-1">
              <input autoFocus onChange={e => setDraftName(e.target.value)} type="text" className="form-control form-control-sm" value={draftName} />
            </div>
            <div className="mb-2">
              <input onChange={e => setDraftEmail(e.target.value)} type="text" className="form-control form-control-sm" value={draftEmail} />
            </div>
            <div className="mb-2">
              <input onChange={e => setDraftNeighbourhood(e.target.value)} type="text" className="form-control form-control-sm" value={draftNeighbourhood} />
            </div>
            <div className="mb-2">
              <input onChange={e => setDraftDescription(e.target.value)} type="text" className="form-control form-control-sm" value={draftDescription} />
            </div>
            <div className="mb-2">
              <input onChange={e => setDraftPrice(e.target.value)} type="text" className="form-control form-control-sm" value={draftPrice} />
            </div>
            <button onClick={() => {
              handleSubmit()
            }} className="btn btn-sm btn-success">Save</button>{" "}
            <button onClick={() => setIsEditing(false)} className="btn btn-sm btn-outline-secondary">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card