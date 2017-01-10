import JOKES from '../utils/jokes.js';

const initStateHave = {
  haveFridge: [],
  haveMeat: [],
  havePollo: [],
  haveFish: [],
  haveVeges: [],
  haveJokes: JOKES,
  haveRequest: []
}

const haveReducer = (state=initStateHave, action) => {
	switch (action.type){
	case "SAVE_HAVE":
		return {...state,
      haveFridge: action.payload.haveFridge,
      haveMeat: action.payload.haveMeat,
      havePollo: action.payload.havePollo,
      haveFish: action.payload.haveFish,
      haveVeges: action.payload.haveVeges
    }
    case "SAVE_HAVE_REQUEST_LIST":
      return {
        ...state, haveRequest: action.payload
      }
    case 'CLEAR_SEARCH_IN_STORE':
      return {
        ...state, haveRequest:[]
      }

	default: return state;
	}

}

export default haveReducer;
