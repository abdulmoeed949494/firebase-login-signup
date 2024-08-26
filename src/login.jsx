import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [sEmail, setSEmail] = useState("");
  const [sPassword, setSPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, sEmail, sPassword);
      console.log("Login successfully");
      navigate("/");
    } catch (err) {
      alert("Wrong Email or Password")
      console.log(err);
    }
  };

  const createNewAccount = () => {
    navigate("/signup");
  };

  return (
    <div className="body">
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
        <button
          type="button"
          className="create-account-button"
          onClick={createNewAccount}
        >
          Create new account
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;

















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"
// import "./App.css";
// import { auth } from "./firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";

// const Login = () => {
//   const [sEmail, setSEmail] = useState("");
//   const [sPassword, setSPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, sEmail, sPassword);
//       console.log("Login successfully");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const navigate = useNavigate();

//   const createNewAccount = () => {
//     navigate("/signup");
//   }

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email address"
//           required
//           onClick={(e) => setSEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           onClick={(e) => setSPassword(e.target.value)}
//         />
//         <button type="submit" className="create-account-button">
//           Login
//         </button>
//         <button
//           type="button"
//           className="create-account-button"
//           onClick={createNewAccount}
//         >
//           Create new account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
