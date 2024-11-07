import { FC } from "react";
import scss from "./Services.module.scss";
import img1 from "../../../assets/image/free1.png";
import img2 from "../../../assets/image/free2.png";
import img3 from "../../../assets/image/free3.png";
import Image from "next/image";

const Services: FC = () => {
  return (
    <section className={scss.Services}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block}>
            <Image src={img1} alt="img1" className={scss.image} />
            <h1>FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className={scss.block}>
            <Image src={img2} alt="img2" className={scss.image} />
            <h1>24/7 CUSTOMER SERVICE</h1>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className={scss.block}>
            <Image src={img3} alt="img3" className={scss.image} />
            <h1>MONEY BACK GUARANTEE</h1>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
