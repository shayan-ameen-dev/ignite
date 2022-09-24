const initialState = { gameDetails: {}, gameScreenshots: {}, isLoading: true };

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DETAILS':
      const { gameDetails, gameScreenshots } = action.payload;
      return {
        ...state,
        gameDetails,
        gameScreenshots,
        isLoading: false,
      };
    case 'LOADING_DETAILS':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
