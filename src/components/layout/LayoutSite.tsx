"use client";

import { FC, ReactNode, useEffect, useState } from "react";

import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { usePathname, useRouter } from "next/navigation";

interface ILayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<ILayoutSiteProps> = ({ children }) => {
  const [isAuthPage, setIsAuthPage] = useState(false);
  const pathname = usePathname();

  const router = useRouter();
  useEffect(() => {
    switch (pathname) {
      case "/sign-in":
      case "/sign-up":
      case "/forgot":
      case "/auth/reset-password":
        setIsAuthPage(true);
        break;
      default:
        setIsAuthPage(false);
        break;
    }
  }, [pathname]);

  return (
    <div className={scss.LayoutSite}>
      <Header />
      <div className={scss.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
