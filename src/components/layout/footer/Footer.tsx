import { FC } from "react";
import scss from "./Footer.module.scss";
import { VscSend } from "react-icons/vsc";
import play from "../../../assets/image/1532534.png";
import image from "../../../assets/image/QR_code.png";
import Image from "next/image";
import { PiAppleLogoFill } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.subs}>
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className={scss.sub}>
              <input type="text" />
              <span>
                <VscSend />
              </span>
            </div>
          </div>
          <div className={scss.subs}>
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className={scss.account}>
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Shop</p>
          </div>
          <div className={scss.subs}>
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className={scss.app}>
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className={scss.ustanov}>
              <Image width={100} src={image} alt="code" />
              <div className={scss.down}>
                <div className={scss.apple}>
                  <span>
                    <PiAppleLogoFill />
                  </span>
                  <div className={scss.app}>
                    <p>Загрузите в</p>
                    <h2>App Store</h2>
                  </div>
                </div>
                <div className={scss.me}>
                  <Image width={28} src={play} alt="play" />
                  <div className={scss.play}>
                    <p>Доступно в</p>
                    <h2>Google Play</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.icons}>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <TfiTwitter />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
