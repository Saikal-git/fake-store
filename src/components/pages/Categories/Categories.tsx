import { FC } from "react";
import scss from "./categories.module.scss";
import { IoIosArrowForward } from "react-icons/io";

const Categories: FC = () => {
  return (
    <section className={scss.Categories}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.pBlock}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
              }}
            >
              Woman’s Fashion <IoIosArrowForward />
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "62px",
              }}
            >
              Men’s Fashion <IoIosArrowForward />
            </p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby’s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
