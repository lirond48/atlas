import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MapApp from "./appMap";

function Single(props) {
  let [country, setCountry] = useState({});
  let [borders, setBorders] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.match.url.includes("country")) {
      let country1 = props.match.url.slice(9);
      let url = `https://restcountries.eu/rest/v2/name/${country1}?fullText=true`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setBorders(data[0].borders);
          setCountry(data);
          setLoading(false);
        });
    } else if (props.match.url.includes("code")) {
      let country1 = props.match.url.slice(6);
      let url = `https://restcountries.eu/rest/v2/alpha/${country1}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setBorders(data.borders);
          let temp = [];
          temp.push(data);
          setCountry(temp);
          setLoading(false);
        });
    }
  }, [props.match]);

  return (
    <div className="p-3">
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
      ) : loading ? (
        <h2>Loading</h2>
      ) : (
        <h2>Nothing Found</h2>
      )}
    </div>
  );
}

export default Single;

{
}

{
  /* <div>
            {country.map((item) => {
              <Items key={item.callingCodes} item={item} />;
            })}
          </div> */
}
