import { model, Schema } from "mongoose";
import { IAuthProvider, IsActive, IUser, Role } from "./user.interface";
import { boolean } from "zod";


const authProviderSchema = new Schema<IAuthProvider>({
  provider: { type: String, required: true },
  providerID : {type : String, required : true}
}, {
  versionKey: false,
  _id:false
  
})


const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    picture: { type: String },
    isDeleted: { type: Boolean, default: false },
    address: { type: String },
    isActive: {
      type: String,
      enum: Object.values(IsActive),
      default: IsActive.ACTIVE,
    },
    isVerified: { type: Boolean, default: false },
    auths: [authProviderSchema],
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
    },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
    guides: [{ type: Schema.Types.ObjectId, ref: "Guide" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


export const User = model<IUser>("User", userSchema)