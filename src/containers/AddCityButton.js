import React, { useContext, useState } from "react";
import { WeatherContext } from "../Context/WeatherContext";

const AddCityButton = () => {
  const [name, nameState] = useState("");

  const { addCity } = useContext(WeatherContext);
  const myKey = "8e03ef854788dde38bde26ecaf4db9c5";
  const url =
    "http://api.weatherstack.com/current?access_key=8e03ef854788dde38bde26ecaf4db9c5&query=";

  const realData = () => {
    fetch(`${url}${name}`)
      .then((response) => response.json())
      .then((json) => addCity(name, json.current.temperature));
  };

  return (
    <div className="add-city-form">
      <input
        className="input"
        value={name}
        onChange={(e) => {
          nameState(e.target.value);
        }}
      />
      <button onClick={realData} className="input">
        Add
      </button>
    </div>
  );
};

export default AddCityButton;
