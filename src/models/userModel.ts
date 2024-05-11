import mongoose, { Model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongooseHidden from 'mongoose-hidden';
import bcrypt from 'bcrypt';
import userSchema from '../schemas/userSchema';
import { IUser } from "../types/UserI";

//! Virtual password
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

//! Check passwords match before hashing
userSchema.pre('validate', function checkPassword(next) {
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.invalidate('passwordConfirmation', 'should match password');
  }
  next();
});

//! Hash the password
userSchema.pre('save', async function encryptPassword(next) {
    if (this.isModified('password')) {
      console.log('Hashing password'); // Debug log
      try {
        const salt = await bcrypt.genSaltSync();
        this.password = await bcrypt.hashSync(this.password, salt);
      } catch (err) {
        next(err as any);
      }
    }
    next();
});

// Compare hashed password given with that stored in the DB
userSchema.methods.validatePassword = function(password:string) {
  return bcrypt.compareSync(password, this.password);
};

// Add plugins
userSchema.plugin(uniqueValidator);
userSchema.plugin(mongooseHidden({ defaultHidden: { password: true, _passwordConfirmation:true } }));

export interface userSchemaType {
  _id: string;
  email: string;
  username: string;
  password: string;
  image: string;
  profileId: string;
  profileCompleted: boolean;
  acc_active: boolean;
  role: string;
  _passwordConfirmation?: string;
  validatePassword: any;
}

export interface CurrentUser {
  id: string;
  email: string;
  username: string;
  profileId: string;
  profileCompleted: string;
}

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
