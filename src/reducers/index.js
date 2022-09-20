import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';

const combinedReducer = combineReducers({
  games: gamesReducer,
});

export default combinedReducer;
