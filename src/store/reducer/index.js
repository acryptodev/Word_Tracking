import * as actionTypes from "../action/actionTypes";

const initState = {
	data: {},
	answer: {}
}

export default function errorsReducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.GET_DATA:
			return {
				data: action.payload
			}
		case actionTypes.INPUT_ANSWER:
			return {
				...state,
				answer: action.payload
			}
		default:
			return state;
	}
}