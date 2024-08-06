import React from "react";

const TemperatureDisplay = ({
  temperature,
  locationName,
}: {
  temperature: number | null;
  locationName: string;
}) => {
  return (
    <section className="currentLocation">
      <h2 style={{ fontFamily: "YourFont" }}>
        당신의 위치는 {locationName}입니다.
      </h2>
      {temperature !== null ? (
        <div>
          <p style={{ fontFamily: "YourFont" }}>
            현재 기온: {temperature.toFixed(1)}°C
          </p>
        </div>
      ) : (
        <p style={{ fontFamily: "YourFont" }}>기온 데이터를 불러오는 중...</p>
      )}
    </section>
  );
};

export default TemperatureDisplay;
