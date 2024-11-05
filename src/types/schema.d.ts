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

interface GetMeRes {
  profile: {
    id: string;
    username: string;
    role: string;
    email: string;
    isActive: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface ForgotRequest {
  message: string;
}

interface ForgotResponse {
  email: string;
  frontEndUrl: string;
}

interface ResPasswordResponse {
  message: string;
}

interface ResPasswordRequest {
  token: string;
  newPassword: string;
}

interface IRefresh {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface PostCreatereq {
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface PostCreateRes {
  id: number;
  userId: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface PostDelete {
  message: string;
}

interface UploadPfofileRes {
  name: string;
  format: string;
  url: string;
}

interface GetProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    username: string;
    role: string;
    email: string;
    isActive: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}
