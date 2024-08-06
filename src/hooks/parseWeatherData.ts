// src/hooks/parseWeatherData.ts
const parseWeatherData = (data: any[]) => {
  return data.map((item: any) => ({
    hour: new Date(item.dt * 1000).getHours(),
    temperature: item.main.temp,
  }));
};

export default parseWeatherData;
