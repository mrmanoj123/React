import { useReducer } from "react"
import Header from "./Components/Header"
import reducer from "./Reducers/Reducer"
import type { Istate } from "./interface/interfaces"
import Searchcity from "./Components/Search"
import "./Weather.css";
import HourlyForecast from "./Components/HourlyData"
//import type { WeatherResponse } from "./interface/interfaces"
const App = () => {
  const initialstate: Istate = {
    SelectedSity: "",
    Suggestions: [],
    Data: undefined
  }
  const [state, dispatch] = useReducer(reducer, initialstate)
  return (
    <>
      <Header />
      <Searchcity state={state} dispatch={dispatch} />
      <div className="weather-details">

        <div className="weather-card temperature">
          <div className="weather-card-header">
            <span>Temperature</span>
            <span className="weather-icon">🌡️</span>
          </div>
          <h2>{state.Data?.current.temperature_2m ?? "--"}°C</h2>
          <p>Current temperature</p>
        </div>

        <div className="weather-card feels-like">
          <div className="weather-card-header">
            <span>Feels Like</span>
            <span className="weather-icon">🌤️</span>
          </div>
          <h2>{state.Data?.current.apparent_temperature ?? "--"}°C</h2>
          <p>Apparent temperature</p>
        </div>

        <div className="weather-card humidity">
          <div className="weather-card-header">
            <span>Humidity</span>
            <span className="weather-icon">💧</span>
          </div>
          <h2>{state.Data?.current.relative_humidity_2m ?? "--"}%</h2>
          <p>Relative humidity</p>
        </div>

        <div className="weather-card wind">
          <div className="weather-card-header">
            <span>Wind Speed</span>
            <span className="weather-icon">💨</span>
          </div>
          <h2>{state.Data?.current.wind_speed_10m ?? "--"} km/h</h2>
          <p>Current wind speed</p>
        </div>
        {
          state.Data?.hourly ? <HourlyForecast hours={state.Data?.hourly} /> : <></>
        }
      </div>
    </>
  )
}


export default App