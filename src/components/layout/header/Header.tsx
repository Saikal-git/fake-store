"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline, IoClose, IoMenu } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiOutlineStar } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { useGetMeQuery } from "@/redux/api/auth";
import { FiSearch } from "react-icons/fi";
import BurgerMenu from "@/ui/BurgrMenu/BurgerMenu";

const Header: FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const { isMobile, setIsMobile } = useHeaderStore();
  const [mobileMenu, setMobileMenu] = useState(false);
  const { data } = useGetMeQuery();
  console.log(data, "user");
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("tokens");
    router.push("/sign-in");
  };

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 868);
  };

  useEffect(() => {
    changeIsMobile();
    window.addEventListener("resize", changeIsMobile);
    return () => {
      window.removeEventListener("scroll", changeIsMobile);
    };
  }, []);

  return (
    <header
      className={
        mobileMenu ? `${scss.Header} ${scss.active}` : `${scss.Header}`
      }
    >
      <div className="container">
        {mobileMenu ? <div className={scss.white}></div> : null}
        <div className={scss.content}>
          <div
            className={
              mobileMenu ? `${scss.logo} ${scss.active}` : `${scss.logo}`
            }
          >
            <Link href={"/"}>Exclusive</Link>
          </div>
          {!isMobile ? (
            <>
              <div className={scss.lists}>
                <Link href={"/"}>Home</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/sign-up"}>Sign Up</Link>
              </div>
              <div className={scss.icons}>
                <div className={scss.search_icon}>
                  <input type="text" placeholder="What are you looking for?" />
                  <span className={scss.search}>
                    <CiSearch />
                  </span>
                </div>
                <span>
                  <GrFavorite />
                </span>
                <span>
                  <IoCartOutline />
                </span>
                <div onClick={() => setMenu(!menu)} className={scss.profile}>
                  <img src={data?.profile.photo} alt="img" />
                </div>
                {menu ? (
                  <div className={scss.menu}>
                    <div className={scss.user}>
                      <span>
                        <LuUser />
                      </span>
                      <h1>Manage My Account</h1>
                    </div>{" "}
                    <div className={scss.order}>
                      <span>
                        <RiShoppingBag3Line />
                      </span>
                      <h1>My Order</h1>
                    </div>{" "}
                    <div className={scss.cancellations}>
                      <span>
                        <IoIosCloseCircleOutline />
                      </span>
                      <h1>My Cancellations</h1>
                    </div>{" "}
                    <div className={scss.reviews}>
                      <span>
                        <HiOutlineStar />
                      </span>
                      <h1>My Reviews</h1>
                    </div>{" "}
                    <div onClick={() => logOut()} className={scss.logout}>
                      <span>
                        <TbLogout2 />
                      </span>
                      <h1>Logout</h1>
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <div className={scss.mobile}>
              {" "}
              <span className={scss.search}>
                <FiSearch />
              </span>
              <span
                onClick={() => setMobileMenu(!mobileMenu)}
                className={scss.mobileMenu}
              >
                {mobileMenu ? <IoClose /> : <IoMenu />}
              </span>
            </div>
          )}

          <div
            onClick={() => setMobileMenu(false)}
            className={`${scss.mobileBurger} ${mobileMenu ? scss.active : ""}`}
            aria-hidden={!mobileMenu}
          >
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
