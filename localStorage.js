const saveToLocalStorage = job =>{
    const stringData = JSON.stringify(job)
    localStorage.setItem("job-applied", stringData)
}


const addToLocalStorage = id =>{
    const getJobData = getJob()
    const exist = getJobData.find(jobData => jobData === id)
    if(!exist){
        getJobData.push(id)
        saveToLocalStorage(getJobData)
    }
}

const getJob=()=>{
    const checkData = localStorage.getItem("job-applied")
    if(checkData){
        return JSON.parse(checkData)
    }

    return []
}

export {addToLocalStorage, getJob}