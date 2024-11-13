"use client";
import { useRouter } from "next/navigation";
import scss from "./Profile.module.scss";
import { useGetMeQuery, useUpdataProfileMutation } from "@/redux/api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUploadFileMutation } from "@/redux/api/upload";
import Image from "next/image";

const Profile = () => {
  const router = useRouter();
  const { data } = useGetMeQuery();
  const { register, handleSubmit } = useForm<UploadPfofileReq>();
  const [uploadFileMutation] = useUploadFileMutation();
  const [updataProfileMutation] = useUpdataProfileMutation();

  const onSubmit: SubmitHandler<UploadPfofileReq> = async (data) => {
    const selectedFile = data.file![0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    const { data: media } = await uploadFileMutation(formData);
    const userData: UploadPfofileReq = {
      photo: String(media?.url),
      username: data.username,
    };
    const { data: post } = await updataProfileMutation(userData);
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<PostCreatereq>= ~ post:",
      post
    );
  };
  return (
    <section className={scss.Profile}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.home_contact}>
            <div className={scss.left}>
              <span onClick={() => router.push("/")}>Home </span>/
              <span className={scss.color}> My Account</span>
            </div>
            <div className={scss.right}>
              <h1>
                Welcome! <span>{data?.profile.username}</span>
              </h1>
            </div>
          </div>
          <div className={scss.update}>
            <div className={scss.left}>
              <h1>Manage My Account</h1>
              <div className={scss.three}>
                <h3>My Profile</h3>
                <h3>Address Book</h3>
                <h3>My Payment Options</h3>
              </div>
              <h1>My Orders</h1>
              <div className={scss.three}>
                <h3>My Returns</h3>
                <h3>My Cancellations</h3>
              </div>
              <h1>My WishList</h1>
            </div>
            <div className={scss.right}>
              <div className={scss.userProfilr}>
                {/* <Image src={data?.profile.photo!} alt="img" /> */}
                <img src="" alt="img" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className={scss.file}
                  type="file"
                  {...register("file", { required: true })}
                />
                <input
                  type="text"
                  placeholder="UserName"
                  {...register("username", { required: true })}
                />
                <div className={scss.bottom}>
                  <h1>Cancel</h1>
                  <button type="submit">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
