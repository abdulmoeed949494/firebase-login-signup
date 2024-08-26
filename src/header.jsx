import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out successfully");
      // navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex gap-20">
      <Link to="/">Home</Link>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Header;


















// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div  className='flex gap-20'>
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Singup</Link>
//     </div>
//   )
// }

// export default Header
