import scss from "./Welcome.module.scss";
import { FaApple } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import Categories from "../Categories/Categories";
import iphone from "../.././../assets/image/iphonePhoto.png";
import air from "../.././../assets/image/airpods-max.webp";
import Image from "next/image";

const Welcome = () => {
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
                Up to 10% <br /> off Voucher
              </p>
              <button>
                Shop now <TiArrowRight />{" "}
              </button>
            </div>

            <div className={scss.content_img}>
              {/* <h1
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50vh",
                }}
              >
                ooooo
              </h1> */}
              {/* <Image src={iphone} alt="ii" width={400} /> */}
              <Image src={air} alt="ii" width={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
