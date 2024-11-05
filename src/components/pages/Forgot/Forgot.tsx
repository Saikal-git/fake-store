"use client";
import { useForgotProfileMutation } from "@/redux/api/auth";
import scss from "./Forgot.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

const Forgot = () => {
  const [forgotProfileMutation] = useForgotProfileMutation();
  const { register, handleSubmit } = useForm<ForgotResponse>();

  const onSubmit: SubmitHandler<ForgotResponse> = async (data) => {
    const forgot: ForgotResponse = {
      email: data.email,
      frontEndUrl: window.location.origin,
    };
    const { data: responseResult } = await forgotProfileMutation(forgot);
    console.log(responseResult);
  };

  return (
    <section className={scss.Forgot}>
      <div className="container">
        <div className={scss.content}>
          <form className={scss.from} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <button type="submit">Send SMS</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
