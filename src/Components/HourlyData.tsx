import type { HoursData } from "../interface/interfaces";


const HourlyForecast = ({ hours }: HoursData) => {

    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString("en-US", {
            hour: "numeric",
            hour12: true
        });
    };

    return (
        <div className="hours-container">
            <h2>hours Forecast</h2>

            <div className="hours-list">
                {hours?.time.map((time, index) => (
                    index < 10 && (
                        <div className="hours-card" key={time}>

                            <h3>{formatTime(time)}</h3>

                            <h2>{hours.temperature_2m[index]}°C</h2>

                            <p>Feels like: {hours.apparent_temperature[index]}°C</p>

                            <p>Humidity: {hours.relative_humidity_2m[index]}%</p>

                            <p>Rain: {hours.precipitation_probability[index]}%</p>

                            <p>Wind: {hours.wind_speed_10m[index]} km/h</p>

                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;