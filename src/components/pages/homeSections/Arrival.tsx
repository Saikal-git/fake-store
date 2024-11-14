import React from "react";
import scss from "./Arrival.module.scss";
import Image from "next/image";
import ps5Image from "../../../assets/image/ps5.png";
import women from "../../../assets/image/woman-removebg-preview.png";
import frame from "../../../assets/image/Frame 707.png";
import gucci from "../../../assets/image/gucci.png";

const Arrival = () => {
  return (
    <div className={scss.arrival}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.today}>
            <div className={scss.box}></div>
            <h2>Featured</h2>
          </div>
          <h1>New Arrival</h1>
          <div className={scss.arrivalBlock}>
            <div className={scss.playStation}>
              <Image src={ps5Image} alt={"ps5"} />
              <div
                style={{
                  position: "relative",
                  left: "38px",
                  bottom: "45px",
                }}
              >
                <h3>PlayStation 5</h3>
                <p>
                  Black and White version of the PS5 <br /> coming out on sale.
                </p>
                <h5>Shop Now</h5>
              </div>
            </div>
            <div className={scss.womenBlock}>
              <div className={scss.women}>
                <div className={scss.text}>
                  <h3>Women’s Collections</h3>
                  <p>
                    Featured woman collections that <br /> give you another
                    vibe.
                  </p>
                  <h5>Shop Now</h5>
                </div>
                <Image src={women} alt={"women"} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <div className={scss.music}>
                  <Image src={frame} alt={"music"} />
                  <div className={scss.musicText}>
                    <h3>Speakers</h3>
                    <p>Amazon wireless speakers</p>
                    <h5>Shop Now</h5>
                  </div>
                </div>
                <div className={scss.gucci}>
                  <Image src={gucci} alt={"music"} />
                  <div className={scss.gucciText}>
                    <h3>Perfume</h3>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <h5>Shop Now</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
