import axios from 'axios';
import { POPULAR_GAMES_URL } from '../services/rawg';

export function fetchGames() {
  return async (dispatch) => {
    const popularGamesResponse = await axios.get(POPULAR_GAMES_URL);
    console.log(POPULAR_GAMES_URL);
    dispatch({
      type: 'FETCH_GAMES',
      payload: { popularGames: popularGamesResponse.data.results },
    });
  };
}
