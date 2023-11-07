import React, { useState, useEffect } from "react";
import ShirtModel from "./components/ShirtModel/ShirtModel";
import axios from "axios";

const App = () => {
  const [shirtColor, setShirtColor] = useState("");
  const [backdropColor, setBackdropColor] = useState("");
  const [availableColors, setAvailableColors] = useState([]);

  useEffect(() => {
    async function fetchColors() {
      try {
        const response = await axios.get("http://localhost:3001/colors");

        if (response && response.data) {
          setAvailableColors(response.data);
          setShirtColor(response.data[0].color);
          setBackdropColor(response.data[0].backdrop);
        }
      } catch (error) {
        console.error("Error fetching colors: ", error);
      }
    }

    fetchColors();
  }, []);

  const changeColor = (color, backdrop) => {
    setShirtColor(color);
    setBackdropColor(backdrop);
  };

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <ShirtModel shirtColor={shirtColor} backdropcolor={backdropColor} />

        <div style={{ color: "black", fontWeight: "bold", padding: "5px" }}>
          Select Color
        </div>

        <div style={{ display: "flex", padding: "5px" }}>
          {availableColors.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: item.color,
                width: 20,
                height: 20,
                margin: 5,
                cursor: "pointer",
                borderRadius: "50%",
                display: "flex",
              }}
              onClick={() => changeColor(item.color, item.backdrop)}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
