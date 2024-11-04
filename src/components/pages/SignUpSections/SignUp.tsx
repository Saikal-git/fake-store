"use client";
import scss from "./SignUp.module.scss";
import photo from "../../../assets/image/sign_in.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/redux/api/auth";
import Image from "next/image";
import google from "../../../../src/assets/image/google.png";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignUpReq>();
  const [signUpMutation] = useSignUpMutation();

  const onSubmit: SubmitHandler<SignUpReq> = async (data) => {
    console.log("🚀:", data);
    const userData: SignUpReq = {
      email: data.email,
      password: data.password,
      username: data.username,
      photo: data.photo,
    };
    try {
      const { data: res, error } = await signUpMutation(userData);
      error
        ? console.log(error)
        : localStorage.setItem("tokens", JSON.stringify(res));
      router.push("/");
    } catch (error) {}
  };

  return (
    <section className={scss.SignUp}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content}>
            <div className={scss.image}>
              <Image src={photo} alt="img" />
            </div>
            <div className={scss.user}>
              <form className={scss.from} onClick={handleSubmit(onSubmit)}>
                <h1>Create an account</h1>
                <h2>Enter yuor details below</h2>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <input
                  type="text"
                  placeholder="First and Last Name"
                  {...register("username", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Photo"
                  {...register("photo", { required: true })}
                />
                <button type="submit">Create Account</button>
              </form>
              <div className={scss.google}>
                <Image src={google} alt="img" />
                <h1>Sign Up With Google</h1>
              </div>
              <div className={scss.logIn}>
                <h3>Aready have account?</h3>
                <Link href={"/sign-in"}>Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
