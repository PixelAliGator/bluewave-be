import express from 'express'
const router = express.Router()
//! User routes
router.route('/register')
  .post(userController.register)

router.route('/login')
  .post(userController.login)

export default router