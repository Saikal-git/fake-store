"use client";
import scss from "./SignIn.module.scss";
import { FC, useEffect, useState } from "react";
// import foto1 from "../../../assets/image/foto-1.png";
// import foto2 from "../../../assets/image/foto-2.png";
// import foto3 from "../../../assets/image/foto-3.png";
// import foto4 from "../../../assets/image/foto-4.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSignInMutation } from "@/redux/api/auth";
import photo from "../../../assets/image/sign_in.png";
import Image from "next/image";
import Link from "next/link";
interface ISignIn {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<ISignIn>();
  const [signInMutation] = useSignInMutation();
  // const [photo, setPhoto] = useState(0);
  // const screen = [foto1, foto2, foto3, foto4];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPhoto((prevCount) => (prevCount + 1) % screen.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  const onSubmit: SubmitHandler<ISignIn> = async (data) => {
    console.log("🚀 ~ constonSubmit:SubmitHandler<ISignIn>= ~ data:", data);
    const userData: ISignIn = {
      email: data.email,
      password: data.password,
    };
    try {
      const { data: responseSignIn, error } = await signInMutation(userData);
      console.log(
        "🚀 ~ constonSubmit:SubmitHandler<ISignIn>= ~ responseSignIn:",
        responseSignIn
      );
      if (error) {
        console.log("Aibek");
      } else {
        console.log(responseSignIn);
        localStorage.setItem("tokens", JSON.stringify(responseSignIn));
        router.push("/");
      }
    } catch (err) {
      console.error(`Error Sign-in getSignInMutation ${err}`);
    }
  };

  return (
    <section className={scss.SignIn}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <Image src={photo} alt="img" />
          </div>
          <div className={scss.user}>
            <form className={scss.from} onClick={handleSubmit(onSubmit)}>
              <h1>Log in to Exclusive</h1>
              <h2>Enter your details below</h2>
              <input
                type="text"
                placeholder="Email or Phone Number"
                {...register("email", { required: true })}
              />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </form>
            <div className={scss.bottom}>
              <button type="submit">Log In</button>
              <Link href={"/forgot"}>Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
