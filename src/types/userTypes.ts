
export interface IRegister{
   username: string,
   phone: string,
    password_1: string,
   password_2: string,
}

export interface IAuth {
   username: string,
   password: string,
}
export interface IChangePass {
   old_password: string,
   password_1: string,
   password_2: string,
}

export interface IUser {
   id: number,
   password: string,
   phone: string,
   email: string,
   register_data: string,
   is_active: boolean,
   is_superuser: boolean,
   is_verified: boolean
}
