import type { IParametersWeather } from "../interface/interfaces";
import type { WeatherResponse } from "../interface/interfaces";

const GetWeatherDetails = async ({
    city,
    count,
    lan,
    format
}: IParametersWeather) => {

    try {
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=${count}&language=${lan}&format=${format}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch city details");
        }

        const data = await response.json();

        const lat = data.results[0].latitude;
        const lang = data.results[0].longitude;

        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude;

        if (lat && lang) {
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,wind_speed_10m&timezone=auto&forecast_days=2`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch weather details");
                }

                const data: WeatherResponse = await response.json();

                return data;

            } catch (error) {
                console.error("Weather API Error:", error);
                throw error;
            }
        }
    } catch (error) {
        console.error("Weather API Error:", error);
        throw error;
    }
};

export default GetWeatherDetails;