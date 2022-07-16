import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/timer">Go To Timer</Link>
      <h1>Home</h1>;
    </>
  );
};

export default Home;
