import axios from 'axios';
import {
  NEW_GAMES_URL,
  POPULAR_GAMES_URL,
  UPCOMING_GAMES_URL,
} from '../services/rawg';

export function fetchGames() {
  return async (dispatch) => {
    const newGamesResponse = await axios.get(NEW_GAMES_URL);
    const popularGamesResponse = await axios.get(POPULAR_GAMES_URL);
    const upcomingGamesResponse = await axios.get(UPCOMING_GAMES_URL);

    dispatch({
      type: 'FETCH_GAMES',
      payload: {
        newGames: newGamesResponse.data.results,
        popularGames: popularGamesResponse.data.results,
        upcomingGames: upcomingGamesResponse.data.results,
      },
    });
  };
}
