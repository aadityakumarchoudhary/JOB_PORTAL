
import jobs from '../data/jobs'
import { Link } from 'react-router-dom'

export default function Jobs(){
  return(
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      {jobs.map((job)=>(
        <div key={job.id} className="border border-zinc-700 p-5 rounded-xl">
          <h2 className="text-2xl font-bold">{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <Link to={`/job/${job.id}`} className="bg-blue-600 px-4 py-2 rounded mt-3 inline-block">
            View Job
          </Link>
        </div>
      ))}
    </div>
  )
}
