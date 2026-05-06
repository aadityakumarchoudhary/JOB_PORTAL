
import { Link } from 'react-router-dom'

export default function Navbar(){
  return(
    <div className="flex justify-between p-5 bg-zinc-900">
      <h1 className="text-2xl font-bold">Job Portal</h1>
      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}
