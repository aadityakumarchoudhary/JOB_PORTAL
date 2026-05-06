
import { useParams } from 'react-router-dom'
import jobs from '../data/jobs'

export default function JobDetail(){
  const { id } = useParams()
  const job = jobs.find(j=>j.id == id)

  return(
    <div className="p-10">
      <h1 className="text-4xl font-bold">{job?.title}</h1>
      <p className="mt-3">{job?.company}</p>
      <p>{job?.description}</p>
      <button className="bg-green-600 px-5 py-2 rounded mt-5">
        Apply Now
      </button>
    </div>
  )
}
