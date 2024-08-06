// src/hooks/updateLocationName.ts
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const updateLocationName = async (
  lat: number,
  lon: number,
  setLocationName: (name: string) => void
) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/reverse`,
      {
        params: {
          lat: lat,
          lon: lon,
          limit: 1,
          appid: API_KEY,
        },
      }
    );
    if (response.data && response.data.length > 0) {
      setLocationName(
        response.data[0].local_names?.ko || response.data[0].name
      );
    }
  } catch (error) {
    console.error("Error fetching location name:", error);
  }
};

export default updateLocationName;
