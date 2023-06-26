import React from "react";
import './forcast.css';
export default class ForecastItem extends React.Component {
  state = {
    tempShort: Math.floor(parseInt(this.props.temp)).toString()
  };

  render() {
    return (
      <article className="forecast-card">
        <div className="row spaced">
          <div className="time">
            {this.props.datetime.toLocaleTimeString("en-BG", {
              hour: "numeric",
              minute: "numeric"
            })}
          </div>
          <div className="date">
            {this.props.datetime.toLocaleDateString("en-GB", {
              weekday: "short",
              day: "numeric",
              month: "short"
            })}
          </div>
        </div>
        <div className="row">
          <div className="temperature">{this.state.tempShort}°</div>
          <div className="weather-name">{this.props.weatherName}</div>
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/w/${this.props.icon}.png`}
              alt="weather icon"
            />
          </div>
        </div>
      </article>
    );
  }
}
