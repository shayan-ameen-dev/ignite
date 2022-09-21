const initialState = { gameDetails: {}, gameScreenshots: {} };

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DETAILS':
      const { gameDetails, gameScreenshots } = action.payload;
      return {
        ...state,
        gameDetails,
        gameScreenshots,
      };
    default:
      return state;
  }
}
