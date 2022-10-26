// import axios from "axios";
// import React, {useState, useEffect} from "react";


// const SignUp = () => {
//     const [name, setName]= useState("")
//     const [email, setEmail]= useState("")
//     const [password, setPassword]= useState("")

// useEffect(() => {
//     if (localStorage.getItem("token")) {
//         setLoggedIn(true);
//     }
// }, []);

// // const sendPostReq = (event) => {
// //     event.preventDefault();
// // }

//     const user = { 
//         name: name,
//         email: email,
//         password: password
//     };

//     axios.post("http://localhost:4000/api/users").then((response) => {
//         if (response.data.message === "User account created") {
//             setRedirectToLogin(true);
//         }
//         if (response.data.message === "Username or email already belongs to another user"
//         ){ 
//             setAlreadyExists(true);
//             setName("");
//             setEmail("");
//             setPassword("");
//         }
// });


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