import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../Modal.css";

const API_KEY = "wjOxwFESTnGzscBREj5xPw";

function callJsonApi(url: string, saveFilePath: string) {
  // Text API 호출 함수
  fetch(url) // fetch를 통해 API 호출
    .then((response) => response.json()) // 응답을 JSON으로 변환
    .then((data) => {
      console.log(data); // 데이터 출력
      // saveFilePath를 사용하여 데이터를 저장하거나 추가적인 처리를 수행할 수 있습니다.
    })
    .catch((error) => {
      console.error("API 호출 중 오류가 발생했습니다:", error);
      // 오류 처리를 수행할 수 있습니다.
    });
}

const apiUrl =
  "https://apihub.kma.go.kr/api/typ01/cgi-bin/url/nph-dfs_shrt_grd?tmfc=2024022505&tmef=2024022506&vars=TMP&authKey=" +
  API_KEY;
const savePath = "/path/to/save/file.json";
callJsonApi(apiUrl, savePath);

const ScreenA = () => {
  const [temperatureData, setTemperatureData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false); // 모달 열림 상태 추가

  // 기상청 API 호출 함수
  const fetchWeatherData = async () => {
    const baseDate = getCurrentDate();
    const baseTime = getCurrentTime();

    try {
      const response = await axios.get(
        "http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst",
        {
          params: {
            ServiceKey: API_KEY,
            numOfRows: 10,
            pageNo: 1,
            base_date: baseDate,
            base_time: baseTime,
          },
        }
      );

      const items = response.data.response.body.items.item;
      const parsedData = items.map((item: any) => ({
        hour: item.baseTime.substring(0, 2),
        temperature: item.obsrValue,
      }));

      setTemperatureData(parsedData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const getCurrentDate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}${month}${day}`;
  };

  const getCurrentTime = (): string => {
    const date = new Date();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    return `${hours}${minutes}`;
  };

  const handleLocationUpdate = () => {
    setShowModal(true); // 모달 열기
  };

  const closeModal = () => {
    setShowModal(false); // 모달 닫기
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>시간 별 온도</h1>
        <button onClick={handleLocationUpdate}>현재 위치 업데이트</button>
      </header>
      <main className="App-main">
        <section className="Temperature-list">
          <h2>시간 별 온도</h2>
          <ul>
            {temperatureData.map((data, index) => (
              <li key={index}>
                {data.hour}시: {data.temperature}도
              </li>
            ))}
          </ul>
        </section>
      </main>
      {showModal && ( // 모달 열림 상태에 따라 모달 표시
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>위치를 업데이트합니다...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenA;
