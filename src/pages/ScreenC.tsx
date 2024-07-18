import React from "react";
import "../App.css";

const ScreenC = () => {
  const getClothingRecommendation = (temperature: number): string => {
    if (temperature < 5) {
      return "Heavy winter coat, scarf, gloves, and warm hat";
    } else if (temperature < 10) {
      return "Winter coat, sweater, and warm pants";
    } else if (temperature < 15) {
      return "Light jacket or sweater and long pants";
    } else if (temperature < 20) {
      return "Long-sleeved shirt and light jacket";
    } else if (temperature < 25) {
      return "T-shirt and light pants or shorts";
    } else {
      return "Light, breathable clothing and shorts";
    }
  };

  // Assuming we have a way to get the current temperature
  const currentTemperature = 22;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clothing Recommendation</h1>
      </header>
      <main className="App-main">
        <div>
          <p>Current Temperature: {currentTemperature}°C</p>
          <p>
            Recommended Clothing:{" "}
            {getClothingRecommendation(currentTemperature)}
          </p>
        </div>
      </main>
    </div>
  );
};

export default ScreenC;
