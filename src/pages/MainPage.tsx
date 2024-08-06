import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Modal.css";
import WeatherIcon from "../components/WeatherIcon";
import LocationButton from "../components/LocationButton";
import TemperatureDisplay from "../components/TemperatureDisplay";
import useWeatherData from "../hooks/useWeatherData";
import fetchWeatherData from "../hooks/fetchWeatherData";
import getWeatherIcon from "../hooks/getWeatherIcon";
import parseWeatherData from "../hooks/parseWeatherData";
import updateLocationName from "../hooks/updateLocationName";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lon: number }>({
    lat: 37.5665,
    lon: 126.978,
  });

  const { currentTemperature, weatherIcon, locationName } =
    useWeatherData(location);

  const handleLocationUpdate = () => {
    setShowModal(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      },
      (error) => {
        console.error("Error getting location:", error);
        setShowModal(false);
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontFamily: "YourFont", fontSize: "2rem" }}>
          기온에 맞춰 옷을 추천해드립니다.
        </h1>
        <div style={{ display: "flex", gap: "20px" }} />
        <LocationButton onClick={handleLocationUpdate} />
        {currentTemperature !== null && (
          <Link
            to={{
              pathname: "/c",
              state: { currentTemperature, weatherIcon },
            }}
          >
            <button
              style={{ fontFamily: "YourFont" }}
              className="ml-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              옷 추천 페이지로 이동
            </button>
          </Link>
        )}
      </header>
      <main className="App-main">
        <section className="Temperature-list"></section>
        <TemperatureDisplay
          temperature={currentTemperature}
          locationName={locationName}
        />
        <WeatherIcon icon={weatherIcon} />
      </main>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p style={{ fontFamily: "YourFont" }}>위치 업데이트 중...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
