import { FC } from "react";
import scss from "./Footer.module.scss";
import { VscSend } from "react-icons/vsc";
import play from "../../../assets/image/1532534.png";
import image from "../../../assets/image/QR_code.png";
import Image from "next/image";
import { PiAppleLogoFill } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.two}>
            <div className={scss.subs}>
              <h2>Exclusive</h2>
              <h3>Subscribe</h3>
              <p>Get 10% off your first order</p>
              <div className={scss.sub}>
                <input type="text" placeholder="Enter your email" />
                <span>
                  <VscSend />
                </span>
              </div>
            </div>
            <div className={scss.subs}>
              <h3>Support</h3>
              <p>111 Bijoy sarani, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>
                <Link href="tel:+996708171232">+996 708171232</Link>
              </p>
            </div>
          </div>
          <div className={scss.two1}>
            <div className={scss.account}>
              <h3>Account</h3>
              <p>My Account</p>
              <p>
                <Link href="/sign-in">Login </Link> /
                <Link href="/sign-up"> Register</Link>
              </p>
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
          </div>
          <div className={scss.app}>
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className={scss.ustanov}>
              <Image src={image} alt="code" />
              <div className={scss.down}>
                <div className={scss.apple}>
                  <span>
                    <PiAppleLogoFill />
                  </span>
                  <div className={scss.ap}>
                    <p>Загрузите в</p>
                    <h2>App Store</h2>
                  </div>
                </div>
                <div className={scss.me}>
                  <Image src={play} alt="play" />
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
                <Link href="https://www.instagram.com/_shabdan.01/">
                  <FaInstagram />
                </Link>
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
