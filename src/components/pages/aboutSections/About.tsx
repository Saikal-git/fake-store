"use client";
import scss from "./About.module.scss";
import Image from "next/image";
import Active from "./Active";
import AboutPhoto from "../../../assets/image/aboutImg.png";
import Partners from "./Partners";
import Services from "./Services";

const About = () => {
  return (
    <section className={scss.About}>
      <div className="container">
        <p>
          {" "}
          <span>Home</span> / About
        </p>
        <div className={scss.content}>
          <div className={scss.about_content}>
            <div className={scss.text}>
              <h1>Our Story</h1>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <br />
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className={scss.aboutImage}>
              <Image
                src={AboutPhoto}
                alt="img"
                quality={100}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Active />
      <Partners />
      <Services />
    </section>
  );
};

export default About;
