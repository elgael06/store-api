import { Role } from '../enum/Role';

export interface UserResponse {
  id?: string;
  userName: string;
  lastName: string;
  email: string;
  rolType: Role;
  isActive: boolean;
  updateAt?: string;
  createdAt?: string;
}
