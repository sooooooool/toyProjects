// src/hooks/fetchWeatherData.ts
import axios from "axios";
import parseWeatherData from "./parseWeatherData";
import getWeatherIcon from "./getWeatherIcon";

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchWeatherData = async (
  location: { lat: number; lon: number },
  setTemperatureData: (data: any[]) => void,
  setCurrentTemperature: (temp: number) => void,
  setWeatherIcon: (icon: string) => void
) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          lat: location.lat,
          lon: location.lon,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    const parsedData = parseWeatherData(response.data.list);
    setTemperatureData(parsedData);
    setCurrentTemperature(parsedData[0].temperature);
    setWeatherIcon(getWeatherIcon(response.data.list[0].weather[0].icon));
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export default fetchWeatherData;
