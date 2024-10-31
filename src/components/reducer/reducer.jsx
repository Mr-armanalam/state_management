import { useReducer } from "react";

function reducer () {
    return (state, action) => {
        switch (action.type) {
            case "UPDATE_EMOTION":
                return {...state, Emotions: action.payload };
            default:
                return state;
        }
    };
}

export const [state, dispatch] = useReducer(reducer, {Emotions: "sad"});