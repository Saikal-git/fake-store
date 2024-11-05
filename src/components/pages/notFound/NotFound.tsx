import { FC } from "react";
import scss from "./NotFound.module.scss";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <section className={scss.NotFound}>
      <div className="container">
        <div className={scss.content}>
          <h1>404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <button>
            <Link href="/">Back to home page</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
