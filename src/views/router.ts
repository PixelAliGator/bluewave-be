import express from 'express'
import activityController from '../controllers/activityController'
import secureRoute from '../middleware/secureRoute'
const router = express.Router()

router.route('/activity')
  .delete(secureRoute, activityController.deleteSwimmingActivity)
  .post(secureRoute, activityController.createSwimmingActivity)
  .put(secureRoute, activityController.updateSwimmingActivity)
  .get(secureRoute, activityController.getSwimmingActivity)


export default router