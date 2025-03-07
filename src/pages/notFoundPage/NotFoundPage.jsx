import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return(
        <div>
            <p>Sorry, page not found, please go to <Link to='/'>Home Page</Link></p>
        </div>
    )
}