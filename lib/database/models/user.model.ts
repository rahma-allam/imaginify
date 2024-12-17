import { model , models, Schema } from "mongoose";
export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstName?: string; // Optional field
    lastName?: string;  // Optional field
    planId?: number;    // Optional, because it has a default value
    creditBalance?: number; // Optional, because it has a default value
  }
const userSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      photo: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      planId: {
        type: Number,
        default: 1,
      },
      creditBalance: {
        type: Number,
        default: 10,
      },
})

const User = models?.User || model("User", userSchema);
export default User;