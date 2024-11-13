import React from "react";
import Welcome from "./homeSections/Welcome";
import Music from "./homeSections/Music";
import Browse from "./homeSections/Browse";
import Today from "./homeSections/Today";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Today />
      <Music />
      <Browse />
    </>
  );
};

export default HomePage;
