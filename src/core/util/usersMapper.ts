import { Role } from '../enum/Role';
import { UserResponse } from '../interface/UserResponse';

export const usersMapper = (user: any): UserResponse => {
  return {
    id: user?.id,
    email: user?.email,
    userName: user?.firstName || user?.userName,
    lastName: user?.lastName,
    rolType: user.rolType || Role.User,
    isActive: user?.isActive,
    createdAt: user?.createdAt,
    updateAt: user?.updatedAt,
  };
};
