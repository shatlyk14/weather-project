import React, { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

const TemperatureAverage = () => {
  const { cities } = useContext(WeatherContext);

  if (cities.length === 0) {
    return <div>Add some cities to view their average temperatures.</div>;
  }

  let total = 0;
  for (const city of cities) {
    total += Number(city.temperature);
  }
  const avg = total / cities.length;

  return (
    <div>
      The average is <b>{avg.toFixed(2)}</b> degrees Fahrenheit.
    </div>
  );
};

export default TemperatureAverage;
