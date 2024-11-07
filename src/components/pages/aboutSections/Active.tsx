"use client";
import { FC } from "react";
import scss from "./Active.module.scss";
import Image from "next/image";
import services from "../../../assets/image/Services.png";
import shopping from "../../../assets/image/shopping.png";
import money from "../../../assets/image/money.png";

const Active: FC = () => {
	return (
		<section className={scss.Active}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.ActiveBlock}>
						<Image src={services} alt="services" className={scss.image} />
						<h1>10.5k </h1>
						<p>Sallers active our site</p>
					</div>
					<div className={scss.ProductBlock}>
						<Image src={services} alt="services" className={scss.image} />
						<h1>33k </h1>
						<p>Mopnthly Produduct Sale</p>
					</div>
					<div className={scss.SiteBlock}>
						<Image src={shopping} alt="services" className={scss.image} />
						<h1>45.5k </h1>
						<p>Customer active in our site</p>
					</div>
					<div className={scss.GrossBlock}>
						<Image src={money} alt="services" className={scss.image} />
						<h1>25k </h1>
						<p>Anual gross sale in our site</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Active;
