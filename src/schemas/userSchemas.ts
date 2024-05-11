import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
  acc_active: {type: Boolean, default: true},
  profileCompleted: {type: Boolean, default: false},
  profileId: {type: mongoose.Schema.Types.ObjectId, ref: "userProfile", required:false},
  role: {type: String, default: "User"},
  _passwordConfirmation: { type: String, required: false }
})

export default userSchema