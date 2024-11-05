import Link from "next/link";
import scss from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  return (
    <section className={scss.BurgerMenu}>
      <div className={scss.content}>
        <div className={scss.router}>
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/sign-up"}>Sign Up</Link>
          <Link href={"/favorite"}>Favorite</Link>
          <Link href={"/basket"}>Basket</Link>
        </div>
      </div>
    </section>
  );
};

export default BurgerMenu;
