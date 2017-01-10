const initStateTopRatedList = {
  topRatedList:[],
  topRatedCount: 0,
  topRatedPage: 1
}

const topRatedListReducer = (state=initStateTopRatedList, action) => {
  	switch (action.type){
  	case "RECEIVE_TOP_RATED":
			return {
        ...state,
        topRatedList: [...state.topRatedList, ...action.payload.data.data.recipes],
        topRatedCount: state.topRatedCount + action.payload.data.data.count,
        topRatedPage: state.topRatedPage + 1
      }
    default: return state;
  }}

export default topRatedListReducer;

//topRatedList: [...state.topRatedList, ...action.payload.data.data.recipes],
