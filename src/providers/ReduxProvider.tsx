"use client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { FC, ReactNode } from "react";
import { api } from "../redux/api/index";

interface ILayoutSiteProps {
  children: ReactNode;
}

const ReduxProvider: FC<ILayoutSiteProps> = ({ children }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

export default ReduxProvider;
