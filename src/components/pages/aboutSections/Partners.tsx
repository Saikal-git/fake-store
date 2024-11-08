import { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import scss from "./Partners.module.scss";
import user1 from "../../../assets/image/user1.png";
import user2 from "../../../assets/image/user2.png";
import user3 from "../../../assets/image/user3.png";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import chika from "../../../assets/image/chin.jpg";

const Partners: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section className={scss.Partners}>
      <div className="container">
        <Slider {...settings}>
          <div className={scss.block}>
            <Image
              src={user1}
              alt="Partner 1"
              quality={100}
              objectFit="cover"
            />
            <h1>Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className={scss.icons}>
              <a
                href="https://x.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://ru.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine />
              </a>
            </div>
          </div>
          <div className={scss.block}>
            <Image
              src={user2}
              alt="Partner 2"
              quality={100}
              objectFit="cover"
            />
            <h1>Emma Watson</h1>
            <p>Managing Director</p>
            <div className={scss.icons}>
              <a
                href="https://x.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://ru.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine />
              </a>
            </div>
          </div>
          <div className={scss.block}>
            <Image
              src={chika}
              alt="Partner 3"
              quality={100}
              objectFit="cover"
            />
            <h1>Chika</h1>
            <p>Product Designer</p>
            <div className={scss.icons}>
              <a
                href="https://x.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://ru.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine />
              </a>
            </div>
          </div>
          <div className={scss.block}>
            <Image
              src={user1}
              alt="Partner 1"
              quality={100}
              objectFit="cover"
            />
            <h1>Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className={scss.icons}>
              <a
                href="https://x.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://ru.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine />
              </a>
            </div>
          </div>
          <div className={scss.block}>
            <Image
              src={user2}
              alt="Partner 2"
              quality={100}
              objectFit="cover"
            />
            <h1>Emma Watson</h1>
            <p>Managing Director</p>
            <div className={scss.icons}>
              <a
                href="https://x.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://ru.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine />
              </a>
            </div>
          </div>
          <div className={scss.block}>
            <Image
              src={chika}
              alt="Partner 3"
              quality={100}
              objectFit="cover"
            />
            <h1>Chika</h1>
            <p>Product Designer</p>
            <div className={scss.icons}>
              <a
                href="https://x.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://ru.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinLine />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
