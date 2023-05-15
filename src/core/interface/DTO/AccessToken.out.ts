import { UserResponse } from '../UserResponse';

export interface AccessTokenDTO {
  access_token: string;
  user: UserResponse;
}
