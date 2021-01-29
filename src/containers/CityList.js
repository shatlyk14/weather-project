import React, { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

const CityList = () => {
  const { cities } = useContext(WeatherContext);
  console.log(cities);
  return (
    <table className="city-list">
      <thead>
        <tr>
          <th>City</th>

          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city) => {
          return (
            <tr>
              <td>{city.name}</td>
              <td>{city.temperature}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CityList;
