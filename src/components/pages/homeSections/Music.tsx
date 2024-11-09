"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Music.module.scss";
import music from "../../../assets/image/music.png";
import Image from "next/image";

const Music: FC = () => {
	const [timeElapsed, setTimeElapsed] = useState({
		hours: 0,
		days: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		let totalSeconds = 0;

		const interval = setInterval(() => {
			totalSeconds++;

			const days = Math.floor(totalSeconds / (3600 * 24));
			const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
			const minutes = Math.floor((totalSeconds % 3600) / 60);
			const seconds = totalSeconds % 60;

			setTimeElapsed({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	return (
		<section className={scss.Music}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.musicBlock}>
						<span className={scss.categories}>Categories</span>
						<h2>
							Enhance Your <br /> Music Experience
						</h2>
						<div className={scss.HoursBlock}>
							<div className={scss.hours}>
								<span>{String(timeElapsed.hours).padStart(2, "0")}</span>
								<p>Hours</p>
							</div>
							<div className={scss.hours}>
								<span>{String(timeElapsed.days).padStart(2, "0")}</span>
								<p>Days</p>
							</div>
							<div className={scss.hours}>
								<span>{String(timeElapsed.minutes).padStart(2, "0")}</span>
								<p>Minutes</p>
							</div>
							<div className={scss.hours}>
								<span>{String(timeElapsed.seconds).padStart(2, "0")}</span>
								<p>Seconds</p>
							</div>
						</div>
						<button>Buy Now!</button>
					</div>
					<Image className={scss.image} src={music} alt="music" />
				</div>
			</div>
		</section>
	);
};

export default Music;
