import { Link } from "react-router-dom"
import "./home.css"

export const Home = () => {
  return (
    <div className="home">
      <div className="leftBlock">
        <h1>Registration</h1>
        <Link to={"/signup"}>Sign Up</Link>
      </div>
      <div className="rightBlock">
        <h1>Already have an account</h1>
        <Link to={"/signup"}>Log In</Link>
      </div>
    </div>
  )
}
