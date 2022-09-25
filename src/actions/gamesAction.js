import axios from 'axios';
import {
  getNewGamesUrl,
  getPopularGamesUrl,
  getUpcomingGamesUrl,
} from '../services/rawg';

export function fetchGames() {
  return async (dispatch) => {
    dispatch({
      type: 'LOADING_GAMES',
    });

    const newGamesResponse = await axios.get(getNewGamesUrl());
    const popularGamesResponse = await axios.get(getPopularGamesUrl());
    const upcomingGamesResponse = await axios.get(getUpcomingGamesUrl());

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
