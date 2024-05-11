import express from 'express'
import activityController from '../controllers/activityController'
import secureRoute from '../middleware/secureRoute'
import userController from '../controllers/userController'
const router = express.Router()

router.route('/login')
  .post(userController.login)

  router.route('/register')
  .post(userController.register)

router.route('/activity')
  .delete(secureRoute, activityController.deleteSwimmingActivity)
  .post(secureRoute, activityController.createSwimmingActivity)
  .put(secureRoute, activityController.updateSwimmingActivity)
  .get(secureRoute, activityController.getSwimmingActivity)


export default router