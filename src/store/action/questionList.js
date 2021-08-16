import axios from "axios";
import { createAction } from "./index"
import { actionType } from "./type"

export const fetchQuestion = async (dispatch) => {
    try {
        const res = await axios({
            url: " https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        });

        dispatch(createAction(actionType.SET_QUESTION, res.data));
    } catch (err) {
        console.log(err);
    }
};


export const fetchAnswer =  (answer) => {
    return (dispatch) => {
        dispatch(createAction(actionType.SET_ANSWER, answer))
    }
}