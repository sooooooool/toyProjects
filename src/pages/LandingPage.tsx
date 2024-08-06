import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Modal.css";

const LandingPage = () => {
  const [hoveredStack, setHoveredStack] = useState<string | null>(null);
  const clothingStacksImage = "images/clothingStacksImage.jpg";

  const handleMouseEnter = (stackName: string) => {
    setHoveredStack(stackName);
  };

  const handleMouseLeave = () => {
    setHoveredStack(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontFamily: "YourFont", fontSize: "2rem" }}>
          오늘은 뭘 입을까 고민되신다면?
        </h1>
      </header>
      <main className="App-main">
        <div className="image-container" style={{ position: "relative" }}>
          <img
            src={clothingStacksImage}
            alt="Clothing Stacks"
            useMap="#clothing-map"
            style={{ width: "100%", height: "auto" }}
          />
          <map name="clothing-map">
            <Link to="/b">
              <area
                shape="rect"
                coords="300,200,400,300"
                alt="OOTD's"
                onMouseEnter={() => handleMouseEnter("OOTD's")}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </map>
          {hoveredStack && (
            <div
              className="hover-label"
              style={{
                position: "absolute",
                top: "200px", // Adjust based on your coordinates
                left: "350px", // Adjust based on your coordinates
                transform: "translate(-50%, -50%)",
                background: "rgba(0,0,0,0.7)",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {hoveredStack}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
