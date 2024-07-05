import { Schema, model } from 'mongoose';
import { TUser, TUserName } from './user.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name cannot exceed 20 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    trim: true,
  },
});

const userSchema = new Schema<TUser>(
  {
    name: userNameSchema,
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, 'Phone Number is required'],
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'],
      required: true,
    },
  },
  { timestamps: true },
);

const User = model<TUser>('User', userSchema);

export default User;
