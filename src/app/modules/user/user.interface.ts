export interface TUserName {
  firstName: string;
  lastName: string;
}

export interface TUser {
  name: TUserName;
  email: string;
  password: string;
  phone: number;
  address: string;
  role?: 'admin' | 'user';
}
