import React, { useState } from "react";
import { WeatherContext } from "../Context/WeatherContext";
import CityList from "./CityList";
import AddCityButton from "./AddCityButton";
import TemperatureAverage from "./TemperatureAverage";

function App() {
  const [cities, setCities] = useState([{ name: "Berlin", temperature: "7" }]);
  const addCity = (name, temperature) => {
    setCities([...cities, { name, temperature }]);
  };

  return (
    <WeatherContext.Provider value={{ cities, addCity }}>
      <div className="city-overview">
        <h2>Multi-Weather App</h2>
        <CityList />
        <AddCityButton />
        <TemperatureAverage />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
