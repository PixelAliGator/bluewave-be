//!Login registered user
async function login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body)
      const user: userSchemaType | null = await  User.findOne({ email: req.body.email });
  
      if (!user) {
        throw new NotValid('User not found', 404)
      }
      const isValidPw = user.validatePassword(req.body.password)
      if (!isValidPw) {
        throw new NotValid('Wrong password', 400)
      }
  
      // Create jwt and send to user
      const token = jwt.sign(
        {
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
            profileId: user.profileId,
            profileCompleted: user.profileCompleted
          }
        },
        secret,
        //user login duration
        { expiresIn: '2h' }
      )
      //decide what to send back
  
      res.status(202).json({ message: 'Login Success!', token })
  
    } catch (e) {
      next(e)
    }
  }