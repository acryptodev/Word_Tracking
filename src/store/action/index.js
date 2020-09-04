import * as actionTypes from "./actionTypes"
import axios from "axios"
import {SERVER_PORT} from "../../config"
export const getInitData = () => {
    return dispatch=> {
    axios
    .get(`${SERVER_PORT}/api/matchingwords/`)
    .then( res => {
        res.statusText === "OK"
        ? dispatch({type: actionTypes.GET_DATA, payload:res.data})
        : Promise.reject(`Can"t communicate with REST API server (${res.statusText})`)
    })
    .catch(err => console.log(err));
    }
}
export const inputAnswer = (obj) => {
	return dispatch=> {
		dispatch({
			type: actionTypes.INPUT_ANSWER,
			payload: obj
		})
	}
}