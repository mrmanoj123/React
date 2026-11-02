import React, { useState } from "react";
import type { Istate } from "../interface/interfaces"
import cities from "../Data/Cites";
import SuggestionItems from "./SuggestionItems";
import type { WeatherResponse } from "../interface/interfaces";
import type { Dispatch } from 'react';
type Action =
    | { type: "INCREMENT", payload: WeatherResponse | undefined }
    | { type: "DECREMENT" }
    | { type: "RESET" };
interface Searchprops {
    state: Istate
    dispatch: Dispatch<Action>
}

const Searchcity = ({ state, dispatch }: Searchprops) => {
    const [cityname, setcityname] = useState("")
    const [suggestions, setsuggestions] = useState<string[]>([])
    //const [Wresponse, setWResponse] = useState<WeatherResponse | undefined>()
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setcityname(val)
        const filteredcities = cities.filter((ele) => ele.toLowerCase().includes(val.toLowerCase()))
        setsuggestions(filteredcities)
    };


    return (
        <>
            <div style={{
                maxWidth: "550px",
                margin: "30px auto",
                padding: "25px",
                background: "linear-gradient(135deg, #ffffff, #f0f9ff)",
                borderRadius: "16px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.10)",
                textAlign: "center",
                fontFamily: "sans-serif"
            }}>
                <h1 style={{
                    color: "#1e3a8a",
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBottom: "22px"
                }}>
                    {state.SelectedSity || "Check Your Weather"}
                </h1>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    border: "1px solid #cbd5e1",
                    borderRadius: "10px",
                    padding: "5px 15px",
                    transition: "all 0.3s ease"
                }}>
                    <span style={{
                        fontSize: "20px",
                        marginRight: "10px"
                    }}>
                        🔍
                    </span>

                    <input
                        type="text"
                        name="Search"
                        id="search"
                        placeholder="Enter city name..."
                        value={cityname}
                        onChange={

                            handleInputChange
                        }
                        style={{
                            width: "100%",
                            padding: "12px 5px",
                            border: "none",
                            outline: "none",
                            fontSize: "16px",
                            color: "#1e293b",
                            background: "transparent"
                        }}
                    />
                </div>

                <p style={{
                    color: "#64748b",
                    fontSize: "13px",
                    marginTop: "15px"
                }}>
                    Search for a city to explore its weather conditions.
                </p>
                {
                    suggestions.length > 0 && cityname ? (
                        <SuggestionItems sugestioniems={suggestions} cityname={cityname}
                            setsuggestions={setsuggestions} cityset={setcityname}
                            dispatch={dispatch}
                        />
                    ) : <div></div>
                }
            </div>

        </>
    );

}

export default Searchcity