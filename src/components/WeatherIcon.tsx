import React from "react";
import "../../src/wu-icons-style.css";

const WeatherIcon = ({ icon }: { icon: string }) => {
  return <i className={`wu wu-black wu-128 ${icon} wu-large`}></i>;
};

export default WeatherIcon;
