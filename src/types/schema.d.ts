interface SignInRes {
  accesToken: string;
  accesTokenExpration: string;
  refreshToken: string;
}

interface SignInReq {
  email: string;
  password: string;
}

interface SignUpRes {
  message: string;
  accesToken: string;
  accesTokenExpration: string;
  refreshToken: string;
}

interface SignUpReq {
  email: string;
  password: string;
  username: string;
  photo: string;
}
