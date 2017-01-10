const initStateLinks = {
  savedLinks: []
}

const saveLinksReducer = (state=initStateLinks, action) => {
	switch (action.type){
	case "SAVE_LINKS":
		return {...state,
      savedLinks: action.payload
    }

	default: return state;
	}

}

export default saveLinksReducer;
