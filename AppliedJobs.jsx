import { useEffect, useState } from "react";
import { getJob } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
    const [appliedJob, setAppliedJob] = useState([])
    const jobs = useLoaderData()
    useEffect(()=>{
        
        if(jobs.length>0){
            const storedJob = getJob();
            console.log(storedJob);
            const saveArray = []

            for(const id of storedJob){
                const job = jobs.find(job=> job.id === id)
                if(job){
                    saveArray.push(job)
                }
                
            }

            setAppliedJob(saveArray)
                
        }
    }, [])
    return (
        <div>
           <h1>This is {appliedJob.length} page</h1> 
        <ul>
        {
            appliedJob.map(apply=> 
                <li key={apply.id}>{apply.job_title}</li>
            )
           }
        </ul>
        </div>
    );
};

export default AppliedJobs;