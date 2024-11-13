"use client";
import { FC } from "react";
import scss from "./Card.module.scss";

interface IProduct {
  photo: string;
  title: string;
  id: number;
  price: string;
}
const Card: FC<IProduct> = ({ photo, id, price, title }) => {
  const num = (Number(price) / 100) * 75;
  return (
    <section className={scss.Card}>
      <div className={scss.imgProduct}>
        <img src={photo} alt="img" width={200} />
      </div>
      <h1>{title}</h1>
      <div className={scss.price}>
        <h3>{num}$</h3>
        <h4>{price}$</h4>
      </div>
    </section>
  );
};

export default Card;
