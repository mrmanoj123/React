import type
{
    Dispatch,
    SetStateAction
} from 'react'
import type { Action } from '../Reducers/Reducer';
export interface Istate {
    SelectedSity: string,
    Data: WeatherResponse | undefined,
    Suggestions: string[]
}

export interface dis {
    type: string,
    payload: WeatherResponse
}

export interface SuggestionItemsProps {
    sugestioniems: string[], cityname: string,
    setsuggestions: Dispatch<SetStateAction<string[]>>;
    cityset: Dispatch<SetStateAction<string>>;
    dispatch: Dispatch<Action>

}

export interface IParametersWeather {
    city: string,
    count: number,
    lan: string,
    format: string
}
export interface CurrentWeather {
    apparent_temperature: number;
    interval: number;
    is_day: number;
    precipitation: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: string;
    weather_code: number;
    wind_speed_10m: number;
}

export interface CurrentWeatherUnits {
    apparent_temperature: string;
    interval: string;
    is_day: string;
    precipitation: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
    weather_code: string;
    wind_speed_10m: string;
}

export interface WeatherResponse {
    current: CurrentWeather;
    current_units: CurrentWeatherUnits;
    hourly: HourlyWeather;
    hourly_units: HourlyWeatherUnits;
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}

export interface HourlyWeatherUnits {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    apparent_temperature: string;
    precipitation_probability: string;
    precipitation: string;
    weather_code: string;
    wind_speed_10m: string;
}

export interface HourlyWeather {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    precipitation: number[];
    weather_code: number[];
    wind_speed_10m: number[];
}

export interface HourlyForecastResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: HourlyWeatherUnits;
    hourly: HourlyWeather;
}

export interface HoursData {
    hours?: HourlyWeather
}