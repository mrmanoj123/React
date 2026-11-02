import type { Istate, WeatherResponse } from "../interface/interfaces"

export type Action =
    | { type: "INCREMENT", payload: WeatherResponse | undefined }
    | { type: "DECREMENT" }
    | { type: "RESET" };


const reducer = (state: Istate, action: Action) => {
    switch (action.type) {
        case "INCREMENT": {
            return {
                ...state,
                SelectedSity: "Nellore",
                Data: action.payload,
                Suggestions: ['e', 'r']
            }
        }
        default:
            return {
                ...state
            }

    }
}

export default reducer