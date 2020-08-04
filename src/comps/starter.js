import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MapApp from "./appMap";

function Starter(props) {
  let [country, setCountry] = useState({});
  let [borders, setBorders] = useState([]);

  useEffect(() => {
    let url = `https://restcountries.eu/rest/v2/name/israel?fullText=true`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setCountry(data);
        setBorders(data[0].borders);
      });
  });

  return (
    <div className=" p-3 ">
      {country[0] ? (
        <div className="p-2">
          <div className="border border-dark container justify-content-around overflow-hidden">
            <div className=" p-2 w-25 float-right">
              <MapApp latlng={country[0].latlng} />
            </div>
            <h1 className="">{country[0].name}</h1>
            <div className="">Population: {country[0].population}</div>
            <div className="">Languages: {country[0].languages[0].name}</div>
            <div className="">Coins: {country[0].currencies[0].name}</div>
            <img className="text-center w-25" src={country[0].flag} />

            <div className="row justify-content-around">
              {" "}
              Borders:
              {borders.map((item, i) => (
                <Link key={i} to={`/code/${item}`}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default Starter;
