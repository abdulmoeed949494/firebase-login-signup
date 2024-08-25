import React, { useState } from "react";
import "./App.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [sEmail, setSEmail] = useState("");
  const [sPassword, setSPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, sEmail, sPassword);
      console.log("Account Created");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email address"
          required
          value={sEmail}
          onChange={(e) => setSEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={sPassword}
          onChange={(e) => setSPassword(e.target.value)}
        />
        <button type="submit" className="create-account-button">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;















// import React, { useState } from "react";
// import "./App.css";
// import { auth } from "./firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [sEmail, setSEmail] = useState("");
//   const [sPassword, setSPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, sEmail, sPassword);
//       console.log("Account Createdy");
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//           // value={name}
//           onClick={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email address"
//           required
//           // value={sEmail}
//           onClick={(e) => setSEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           // value={sPassword}
//           onClick={(e) => setSPassword(e.target.value)}
//         />
//         {/* <input 
//                     type="password" 
//                     placeholder="Confirm Password" 
//                     required 
//                 /> */}
//         <button type="submit" className="create-account-button">
//           Sign up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
