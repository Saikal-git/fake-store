import React from "react";
import Welcome from "./homeSections/Welcome";
import Music from "./homeSections/Music";
import Browse from "./homeSections/Browse";
import Arrival from "./homeSections/Arrival";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Music />
      <Browse />
      <Arrival />
    </>
  );
};

export default HomePage;
