import {Link} from "react-router-dom"

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Please return to the home page to get back on track:</p>
        <Link className="home-link" to="/">Return to home</Link>
    </div>
  )
}
