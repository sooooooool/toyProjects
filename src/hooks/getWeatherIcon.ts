// src/hooks/getWeatherIcon.ts
const getWeatherIcon = (iconCode: string) => {
  const iconMap: { [key: string]: string } = {
    "01d": "wu-clear",
    "01n": "wu-clear",
    "02d": "wu-partlycloudy",
    "02n": "wu-partlycloudy",
    "03d": "wu-cloudy",
    "03n": "wu-cloudy",
    "04d": "wu-cloudy",
    "04n": "wu-cloudy",
    "09d": "wu-rain",
    "09n": "wu-rain",
    "10d": "wu-rain",
    "10n": "wu-rain",
    "11d": "wu-tstorms",
    "11n": "wu-tstorms",
    "13d": "wu-snow",
    "13n": "wu-snow",
    "50d": "wu-fog",
    "50n": "wu-fog",
  };
  return iconMap[iconCode] || "wu-unknown";
};

export default getWeatherIcon;
