import { Types } from "mongoose";

export enum Role {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  USER = "USER",
  GUIDE = "GUIDE",
}

// auth providers

// email provider
// google provider
export interface IAuthProvider {
  provider: string;
  providerID : string,
}

export enum IsActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED"
}

export interface IUser {
  name: string,
  email: string;
  password?: string;
  phone?: string,
  picture?: string;
  isDeleted?: string;
  address?: string;
  isActive?: IsActive,
  isVerified?: string;
  auths: IAuthProvider[];
  role ?: Role;
  bookings?: Types.ObjectId[] ;
  guides?: Types.ObjectId[];
}