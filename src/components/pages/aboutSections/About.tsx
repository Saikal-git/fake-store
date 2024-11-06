// import { FC } from "react";
// import scss from "./About.module.scss";
// import AboutPhoto from "../../../assets/image/aboutImg.png";
// import Image from "next/image";

// const About: FC = () => {
//   return (
//     <section className={scss.About}>
//       <div className="container">
//         <div className={scss.content}>
//           <p>
//             <span>Home</span> / About
//           </p>

//           <div className={scss.information}>
//             <div className={scss.text}>
//               <h1>Our Story</h1>
//               <p>
//                 Launced in 2015, Exclusive is South Asia’s premier online
//                 shopping makterplace with an active presense in Bangladesh.
//                 Supported by wide range of tailored marketing, data and service
//                 solutions, Exclusive has 10,500 sallers and 300 brands and
//                 serves 3 millioons customers across the region.{" "}
//               </p>
//               <p>
//                 Exclusive has more than 1 Million products to offer, growing at
//                 a very fast. Exclusive offers a diverse assotment in categories
//                 ranging from consumer.
//               </p>
//             </div>
//            <div><Image scr={AboutPhoto} alt="img"/></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";
import scss from "./About.module.scss";
import AboutPhoto from "../../../assets/image/aboutImg.png";
import Image from "next/image";
import { GiShop } from "react-icons/gi";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa6";
// import Commerce from "../HomeSections/Commerce";

const About = () => {
  return (
    <section className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <p>
            {" "}
            <span>Home</span> / About
          </p>
          <div className={scss.about_content}>
            <div className={scss.title}>
              <h1>Our Story</h1>
              <span>
                Launced in 2015, Exclusive is South Asias premier online
                shopping
                <br />
                makterplace with an active presense in Bangladesh. Supported
                <br /> by wide range of tailored marketing, data and service
                solutions, <br />
                Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
                millioons customers across the region.
              </span>
              <span>
                Exclusive has more than 1 Million products to offer, growing at
                a
                <br />
                very fast. Exclusive offers a diverse assotment in categories
                <br />
                ranging from consumer.
              </span>
            </div>
            <div>
              <Image
                src={AboutPhoto}
                alt="img"
                width={600}
                height={430}
                quality={100}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className={scss.comerce}>{/* <Commerce /> */}</div>
      </div>
    </section>
  );
};

export default About;
