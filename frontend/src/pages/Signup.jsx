
import toast from 'react-hot-toast'

export default function Signup(){
  return(
    <div className="p-10">
      <button 
      onClick={()=>toast.success('Signup Successful')}
      className="bg-green-600 px-5 py-3 rounded">
        Demo Signup
      </button>
    </div>
  )
}
