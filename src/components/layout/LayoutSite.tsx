import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutSiteType {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteType> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;
