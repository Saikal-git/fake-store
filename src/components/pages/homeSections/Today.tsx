"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Today.module.scss";
import { useGetProductQuery } from "@/redux/api/products";
import Card from "@/ui/CardProduct/Card";

const Today: FC = () => {
  const { data } = useGetProductQuery();
  console.log("🚀 ~ data:", data);

  const [timer, setTimer] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const countdown = () => {
      setTimer((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) return { days, hours, minutes, seconds: seconds - 1 };
        if (minutes > 0)
          return { days, hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0)
          return { days, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0)
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };

        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    };

    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={scss.Today}>
      <div className="container">
        <div className={scss.content} data-aos="flip-down">
          <div className={scss.days}>
            <div className={scss.border}>
              <div className={scss.bord}></div>
              <h1>Today’s</h1>
            </div>
          </div>
          <div className={scss.hours}>
            <div className={scss.text}>
              <h1>Flash Sales</h1>
            </div>
            <div className={scss.minutes}>
              <div className={scss.second}>
                <h3>Days</h3>
                <h1>{timer.days}</h1>
              </div>
              <h2>:</h2>
              <div className={scss.second}>
                <h3>Hours</h3>
                <h1>{timer.hours}</h1>
              </div>
              <h2>:</h2>
              <div className={scss.second}>
                <h3>Minutes</h3>
                <h1>{timer.minutes}</h1>
              </div>
              <h2>:</h2>
              <div className={scss.second}>
                <h3>Seconds</h3>
                <h1>{timer.seconds}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.card}>
          {data?.slice(0, 7).map((el) => (
            <Card
              photo={el.image}
              price={el.price}
              title={el.title}
              id={el.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Today;
