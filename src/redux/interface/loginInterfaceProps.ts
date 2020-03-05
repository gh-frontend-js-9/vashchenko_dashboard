export interface loginInterfaceProps {
  name?: string,
  email?: string,
  password?: string,
  logIn?: boolean
  logInError?: boolean,
  loads?: boolean,
  logOut?: boolean,
  axiosLogInPost?: any,
  axiosResetPass?: any,
  axiosSignUpPost?: any,
}
