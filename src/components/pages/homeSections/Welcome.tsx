"use client";
import scss from "./Welcome.module.scss";
import { FaApple } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import Categories from "../Categories/Categories";
import air from "../.././../assets/image/airpods-max.webp";
import promax from "../../../assets/image/16promax.webp";
import pro from "../../../assets/image/iphone15.webp";
import ipad from "../../../assets/image/ipad.webp";
import iphonepro from "../../../assets/image/iphone15pro.webp";

import Image from "next/image";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [photo, setPhoto] = useState(0);
  const screen = [air, promax, pro, ipad, iphonepro];
  useEffect(() => {
    const interval = setInterval(() => {
      setPhoto((el) => (el + 1) % screen.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <Categories />
          <div className={scss.welcome_content}>
            <div className={scss.content_text}>
              <div className={scss.content_logo}>
                <FaApple />
                <p>IPhone 14 Series</p>
              </div>

              <p>
                Up to 10%  off Voucher
              </p>
              <button>
                Shop now <TiArrowRight />{" "}
              </button>
            </div>

            <div className={scss.content_img}>
              <div>
                <Image src={screen[photo]} alt="ii" width={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
