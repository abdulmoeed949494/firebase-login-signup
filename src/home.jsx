import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/login">Login</Link>
        <div>
        <Link to="/signup">Signup</Link>
        </div>
    <div>
        Home Page
    </div>
    </div>
  )
}

export default Home
