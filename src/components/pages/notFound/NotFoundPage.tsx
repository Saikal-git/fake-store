import { FC } from "react";
import scss from "./NotFoundPage.module.scss";
import Link from "next/link";

const NotFoundPage: FC = () => {
  return (
    <section className={scss.NotFoundPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <Link href="/">
            <button>Back to home page</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
