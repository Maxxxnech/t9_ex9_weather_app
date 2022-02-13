import React from "react";
import "./css/Weather.css"
function objectMapper(obj) {
  let result = [];
  for (let key in obj) {
    let val = obj[key];
    if (typeof val === "object") {
      if (Array.isArray(val)) {
        result.push(
          <li>
            <b>{key}</b>: {val.map((el) => <ul key={String(el)}>{objectMapper(el)}</ul>)}
          </li>
        );
      } else {
        result.push(
          <li>
            <b>{key}</b>: {{...objectMapper(val)}}
          </li>
        );
      }
    } else {
      result.push(
        <li>
          <b>{key}</b>: {val}
        </li>
      );
    }
  }

  return <ul>{result}</ul>;
}

export default function Weather({ weather }) {
  return  weather? (<div className="weather">
       <h3>Погода в городе {weather.name}</h3>
      {objectMapper(weather)}
      </div>) : null;
}
