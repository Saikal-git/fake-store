"use client";
import { FC } from "react";
import scss from "./ResetPassword.module.scss";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useResetPasswordMutation } from "@/redux/api/auth";

const ResetPassword: FC = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  console.log(token);

  const [resetPasswordMutation] = useResetPasswordMutation();
  const { register, handleSubmit } = useForm<ResPasswordRequest>();

  const onSubmit: SubmitHandler<ResPasswordRequest> = async (data) => {
    const resetPassword: ResPasswordRequest = {
      token: token!,
      newPassword: data.newPassword,
    };
    const { data: password } = await resetPasswordMutation(resetPassword);
    console.log(password);
  };

  return (
    <section className={scss.ResetPassword}>
      <div className="container">
        <div className={scss.content}>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="password"
              placeholder="Password"
              {...register("newPassword", { required: true })}
            />
            <button type="submit">newPassword</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
