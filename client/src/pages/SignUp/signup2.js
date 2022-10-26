// import React, {useState, useEffect} from "react";

// const SignUp = () => {
//     const [name, setName]= useState("")
//     const [email, setEmail]= useState("")
//     const [password, setPassword]= useState("")
//     const gettingData = () => {
//         console.log(name, email, password)
//         let result = fetch("http://localhost:4000/api/users", {
//             method: 'post',
//             body:JSON{name, email, password}
//         })
//     }
//     return(
//         <div className="signUp">
//             <h1>Sign Up</h1>
//             <input className="inputBox" type="text" placeholder="Enter Name" 
//             value={name} onChange={(e) => setName(e.target.value)}
//             />
//             <input className="inputBox" type="text" placeholder="Enter Email" 
//             value={email} onChange={(e) => setEmail(e.target.value)}
//             />
//             <input className="inputBox" type="text" placeholder="Enter Password" 
//             value={password} onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={gettingData} className="appButton" type="button"> Sign Up</button>
//         </div>
//     )
// }
// export default SignUp;