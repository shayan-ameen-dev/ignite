const initialState = {
  newGames: [],
  popularGames: [],
  searchedGames: [],
  upcomingGames: [],
  isLoading: true,
};

export default function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_GAMES':
      const { popularGames, upcomingGames, newGames } = action.payload;
      return {
        ...state,
        newGames,
        popularGames,
        upcomingGames,
        isLoading: false,
      };
    case 'FETCH_SEARCHED_GAMES':
      const { searchedGames } = action.payload;
      return {
        ...state,
        searchedGames,
        isLoading: false,
      };
    case 'CLEAR_SEARCHED_GAMES':
      return {
        ...state,
        searchedGames: [],
      };
    case 'LOADING_GAMES':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
