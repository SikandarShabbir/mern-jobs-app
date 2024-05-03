const createJob = async (req, res) => {
    res.send('createJob')
}
const getAllJobs = async (req, res) => {
    res.send('getAllJobs')
}
const updateJob = async (req, res) => {
    res.send('updateJob')
}
const deleteJob = async (req, res) => {
    res.send('deleteJob')
}
const showJobStatus = async (req, res) => {
    res.send('showJobStatus')
}

export {createJob, getAllJobs, updateJob, deleteJob, showJobStatus}