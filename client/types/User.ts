interface User {
  id: number;
  name: string;
  group: number;
  email: string;
  password: string;
  is_active: boolean;
  is_posted: boolean;
}

interface UserResponse {
  users: User[];
}

interface UsersResponse {
  users: User[];
}
