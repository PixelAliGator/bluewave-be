import express from 'express'
import activityController from '../controllers/activityController'
import secureRoute from '../middleware/secureRoute'
import goalsController from '../controllers/goalsController'
const router = express.Router()


router.route('/activity')
  .delete(secureRoute, activityController.deleteSwimmingActivity)
  .post(secureRoute, activityController.createSwimmingActivity)
  .put(secureRoute, activityController.updateSwimmingActivity)
  .get(secureRoute, activityController.getSwimmingActivity)

  router.route('/goal')
  .delete(secureRoute, goalsController.deleteGoal)
  .get(secureRoute, goalsController.getGoal)
  .post(secureRoute, goalsController.createGoal)
  .put(secureRoute, goalsController.updateGoal)


export default router