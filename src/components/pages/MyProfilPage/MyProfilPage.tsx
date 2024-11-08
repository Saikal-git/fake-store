"use client";
import { FC } from "react";
import scss from "./MyProfilPage.module.scss";
import { useGetMeQuery } from "@/redux/api/auth";

const MyProfilPage: FC = () => {
  const { data } = useGetMeQuery();
  return (
    <section className={scss.MyProfilPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.account}>
            <div className={scss.home}>
              <span>Home / </span>
              <h4>My Account</h4>
            </div>
            <div className={scss.title}>
              <h4>Welcome!</h4>
              <h3>{data?.profile.username.slice(0, 6)}</h3>
            </div>
          </div>
          <div className={scss.last}>
            <div className={scss.profil}>
              <h3>Manage My Account</h3>
              <p>My Profile</p>
              <p>Address Book</p>
              <p>My Payment Options</p>
            </div>
            <div className={scss.profil}>
              <h3>My Orders</h3>
              <p>My Returns </p>
              <p>My Cancellations</p>
            </div>
            <div className={scss.profil}>
              <h3>My Orders</h3>
            </div>
            <div className={scss.edit}>
              <h2>Edit Your Profile</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfilPage;
