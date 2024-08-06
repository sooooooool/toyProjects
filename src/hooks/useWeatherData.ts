// src/hooks/useWeatherData.ts
import { useState, useEffect } from "react";
import fetchWeatherData from "./fetchWeatherData";
import updateLocationName from "./updateLocationName";

const useWeatherData = (location: { lat: number; lon: number }) => {
  const [temperatureData, setTemperatureData] = useState<any[]>([]);
  const [currentTemperature, setCurrentTemperature] = useState<number | null>(
    null
  );
  const [weatherIcon, setWeatherIcon] = useState<string>("");
  const [locationName, setLocationName] = useState<string>("서울");

  useEffect(() => {
    fetchWeatherData(
      location,
      setTemperatureData,
      setCurrentTemperature,
      setWeatherIcon
    );
    updateLocationName(location.lat, location.lon, setLocationName);
  }, [location]);

  return {
    temperatureData,
    currentTemperature,
    weatherIcon,
    locationName,
    fetchWeatherData,
    updateLocationName,
  };
};

export default useWeatherData;
