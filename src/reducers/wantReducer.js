import PARAMS from '../utils/params.js';

const initStateWant = {
  ingreds: [],
  [PARAMS[0].name]: 50,
  [PARAMS[1].name]: 50,
  [PARAMS[2].name]: 50,
  [PARAMS[3].name]: 50,
  [PARAMS[4].name]: 50,
  wantRequest: []
}

const wantReducer = (state=initStateWant, action) => {
	switch (action.type){
	case "SAVE_WANT":
		return {...state,
      ingreds: action.payload.ingreds,
      [PARAMS[0].name]: parseInt(action.payload[PARAMS[0].name],10),
      [PARAMS[1].name]: parseInt(action.payload[PARAMS[1].name],10),
      [PARAMS[2].name]: parseInt(action.payload[PARAMS[2].name],10),
      [PARAMS[3].name]: parseInt(action.payload[PARAMS[3].name],10),
      [PARAMS[4].name]: parseInt(action.payload[PARAMS[4].name],10)
    }
	case "SAVE_WANT_REQUEST_LIST":
    return {
      ...state,
      wantRequest: action.payload
    }
  case 'CLEAR_SEARCH_IN_STORE':
    return {
      ...state, wantRequest:[]
    }
	default: return state;
	}
}

export default wantReducer;
