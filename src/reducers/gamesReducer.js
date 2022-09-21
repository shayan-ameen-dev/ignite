const initialState = {
  newGames: [],
  popularGames: [],
  searchedGames: [],
  upcomingGames: [],
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
      };
    default:
      return state;
  }
}
