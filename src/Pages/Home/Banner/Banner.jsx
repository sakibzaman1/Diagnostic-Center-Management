import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import banner from "../../../assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="my-10 relative">
      <img src={banner} alt="" />
      <Link to="/allTests">
      <button className="btn w-40  shadow-2xl rounded-none absolute bottom-4 right-9 font-semibold text-3xl">
        All Tests
      </button>
      </Link>
    </div>
  );
};

export default Banner;
