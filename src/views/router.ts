import express from 'express'
import activityController from '../controllers/activityController'
import goalsController from '../controllers/goalsController'
import userController from '../controllers/userController'
import secureRoute from '../middleware/secureRoute'
import productController from '../controllers/productController'


const router = express.Router()

router.route('/login')

import { createCheckoutSession } from '../lib/stripe'

const router = express.Router()

router.route('/user')
  .put(secureRoute, userController.updateUserProfile)
  .get(secureRoute, userController.getUserProfile)
  .post(secureRoute, userController.createUserProfile)


.post(userController.login)

router.route('/register')
.post(userController.register)


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



router.route('/checkout')
  .post(createCheckoutSession)


  router.route('/product')
  .get(productController.getProduct)
  .post(secureRoute,productController.addProduct)
  .delete(secureRoute,productController.deleteProduct)




export default router