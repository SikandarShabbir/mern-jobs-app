import express from 'express'
const router = express.Router()

import {createJob, getAllJobs, updateJob, deleteJob, showJobStatus} from "../controllers/JobsController.js"

router.route('/').get(getAllJobs);
router.route('/status').get(showJobStatus);
router.route('/create').post(createJob);
router.route('/update/:id').put(updateJob);
router.route('/delete/:id').delete(deleteJob);

export default router
