"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import { usePathname, useRouter } from "next/navigation";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
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
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
