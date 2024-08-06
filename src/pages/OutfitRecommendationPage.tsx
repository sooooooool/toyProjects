import { useLocation } from "react-router-dom";
import clothes28C from "../assets/28C.png";
import clothes23to27C from "../assets/23-27C.png";
import clothes20to22C from "../assets/20-22C.png";
import clothes17to19C from "../assets/17-19C.png";
import clothes12to16C from "../assets/12-16C.png";
import "../../src/wu-icons-style.css";
import "../App.css";

const OutfitRecommendationPage = () => {
  const location = useLocation();
  const { currentTemperature, weatherIcon } = (location.state as any) || {
    currentTemperature: null,
  };

  const getClothingImage = (temperature: number) => {
    if (temperature >= 28) {
      return clothes28C;
    } else if (temperature >= 23) {
      return clothes23to27C;
    } else if (temperature >= 20) {
      return clothes20to22C;
    } else if (temperature >= 17) {
      return clothes17to19C;
    } else if (temperature >= 12) {
      return clothes12to16C;
    } else {
      return null; // 필요한 경우 다른 이미지를 추가
    }
  };

  const clothingImage =
    currentTemperature !== null ? getClothingImage(currentTemperature) : null;

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontFamily: "YourFont", fontSize: "2rem" }}>
          기온에 맞춰 옷을 추천해드립니다.
        </h1>
      </header>
      <main className="App-main">
        <section className="Clothing-recommendation">
          {clothingImage && (
            <img src={clothingImage} alt="Clothing Recommendation" />
          )}
          {currentTemperature !== null && (
            <div>
              <p style={{ fontFamily: "YourFont" }}>
                현재 기온: {currentTemperature.toFixed(1)}°C
                <i className={`wu wu-black wu-16 ${weatherIcon} wu-large`}></i>
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default OutfitRecommendationPage;
