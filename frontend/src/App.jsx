
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import JobDetail from './pages/JobDetail'

export default function App(){
  return(
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
