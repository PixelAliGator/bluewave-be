import { Document, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  image: string;
  acc_active: boolean;
  role: string;
  _passwordConfirmation?: string;

  validatePassword: (password: string) => boolean;
}