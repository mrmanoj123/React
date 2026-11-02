import type { SuggestionItemsProps } from "../interface/interfaces";
import GetWeatherDetails from "../Backend/getweather";
const SuggestionItems = ({ sugestioniems, cityname, setsuggestions, cityset, dispatch

}: SuggestionItemsProps) => {
    const handlechange = async (val: string) => {
        console.log(val)
        cityset(val)
        setsuggestions([])
        const response = await GetWeatherDetails({
            city: val,
            count: 1,
            lan: "en",
            format: "json"
        })
        console.log(response);
        dispatch({
            type: "INCREMENT",
            payload: response
        })

    }
    return (
        <>
            {
                sugestioniems && cityname ? (
                    <div style={{
                        marginTop: "8px",
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                        overflow: "hidden",
                        maxWidth: "600px"
                    }}>
                        {sugestioniems.map((ele, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        padding: "13px 18px",
                                        borderBottom: "1px solid #f0f0f0",
                                        fontSize: "15px",
                                        fontFamily: "Arial, sans-serif",
                                        color: "#333333",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px"
                                    }}
                                    onClick={
                                        (ele: React.MouseEvent<HTMLDivElement>) => {
                                            const val = ele.currentTarget.innerText;
                                            handlechange(val)
                                        }
                                    }
                                >
                                    <span>{ele}</span>
                                </div>
                            );
                        })}
                    </div>
                ) : <div></div>
            }
        </>
    )
}

export default SuggestionItems