import React, { useState } from "react"
import Axios from "axios"


function Card(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftName, setDraftName] = useState("")
  const [file, setFile] = useState()
  const [draftEmail, setDraftEmail] = useState("")
  // const [draftNeighbourhood, setDraftNeighbourhood] = useState("")
  // const [draftDescription, setDraftDescription] = useState("")
  // const [draftPrice, setDraftPrice] = useState("")

  async function submitHandler(e) {
    e.preventDefault()
    setIsEditing(false)
    props.setUsers(prev =>
      prev.map(function (user) {
        if (user._id == props.id) {
          return { ...user, name: draftName, email: draftEmail}
        }
        return user
      })
    )
    const data = new FormData()
    if (file) {
      data.append("photo", file)
    }
    data.append("_id", props.id)
    data.append("name", draftName)
    data.append("email", draftEmail)
    const newPhoto = await Axios.post("/api/users/update-user", data, { headers: { "Content-Type": "multipart/form-data" } })
    if (newPhoto.data) {
      props.setUsers(prev => {
        return prev.map(function (user) {
          if (user._id == props.id) {
            return { ...user, photo: newPhoto.data }
          }
          return user
        })
      })
    }
  }

  return (
    <div className="card">
      <div className="our-card-top">
        {isEditing && (
          <div className="our-custom-input">
            <div className="our-custom-input-interior">
              <input onChange={e => setFile(e.target.files[0])} className="form-control form-control-sm" type="file" />
            </div>
          </div>
        )}
        {/* <img src={props.photo ? `/uploaded-photos/${props.photo}` : "/fallback.png"} className="card-img-top" alt={`${props.email} named ${props.name}`} /> */}
      </div>
      <div className="card-body">
        {!isEditing && (
          <>
            <h4>{props.name}</h4>
            <p className="text-muted small">{props.email}</p>
            {!props.readOnly && (
              <>
                <button
                  onClick={() => {
                    setIsEditing(true)
                    setDraftName(props.name)
                    setDraftEmail(props.email)
                    setFile("")
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
          <form onSubmit={submitHandler}>
            <div className="mb-1">
              <input autoFocus onChange={e => setDraftName(e.target.value)} type="text" className="form-control form-control-sm" value={draftName} />
            </div>
            <div className="mb-2">
              <input onChange={e => setDraftEmail(e.target.value)} type="text" className="form-control form-control-sm" value={draftEmail} />
            </div>
            <button onClick={() => {
              Axios.put(`/api/users/update/${props.id}`, {
                ...props,
                email: draftEmail,
                name: draftName
              }).then(() => {
                props.onUpdate()
              });
            }} className="btn btn-sm btn-success">Save</button>{" "}
            <button onClick={() => setIsEditing(false)} className="btn btn-sm btn-outline-secondary">
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Card