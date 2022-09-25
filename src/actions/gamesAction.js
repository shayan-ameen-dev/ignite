import axios from 'axios';
import {
  getNewGamesUrl,
  getPopularGamesUrl,
  getSearchedGamesUrl,
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

export function fetchSearchedGames(gameName) {
  return async (dispatch) => {
    const searchedGamesResponse = await axios.get(
      getSearchedGamesUrl(gameName)
    );

    dispatch({
      type: 'FETCH_SEARCHED_GAMES',
      payload: {
        searchedGames: searchedGamesResponse.data.results,
      },
    });
  };
}
