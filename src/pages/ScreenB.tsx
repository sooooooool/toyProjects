import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css";
import "../Modal.css";

const API_KEY = "7d454c5e50a798996a16ab94561666fb";

const ScreenB = () => {
  const history = useHistory();
  const [temperatureData, setTemperatureData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTemperature, setCurrentTemperature] = useState<number | null>(
    null
  );

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        {
          params: {
            lat: 37.5665, // 서울의 위도
            lon: 126.978, // 서울의 경도
            appid: API_KEY,
            units: "metric",
          },
        }
      );

      const parsedData = response.data.list.map((item: any) => ({
        hour: new Date(item.dt * 1000).getHours(),
        temperature: item.main.temp,
      }));

      setTemperatureData(parsedData);
      setCurrentTemperature(parsedData[0].temperature); // 첫 번째 시간대의 기온 설정
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleLocationUpdate = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      fetchWeatherData();
    }, 2000);
  };

  const handleGoToScreenC = () => {
    history.push("/c");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>기온에 맞춰 옷을 추천드립니다.</h1>
        <button onClick={handleLocationUpdate}>현재 위치 업데이트</button>
        <button onClick={handleGoToScreenC}>옷 추천 페이지로 이동</button>
      </header>
      <main className="App-main">
        <section className="Temperature-list"></section>
        <section className="currentLocation">
          <h2>당신의 위치는 서울입니다.</h2>
          {currentTemperature !== null ? (
            <div>
              <i className="wi wi-day-cloudy"></i>
              <p>현재 기온: {currentTemperature}°C</p>
              {/* <p>추천 옷: {getClothingRecommendation(currentTemperature)}</p> */}
            </div>
          ) : (
            <p>기온 데이터를 불러오는 중...</p>
          )}
        </section>
      </main>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>위치 업데이트 중...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenB;
