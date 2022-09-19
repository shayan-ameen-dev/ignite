const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = '22c2c819f0e84887b6d8f5e4bca6287d';
const PAGE_SIZE = 10;
const POPULAR_GAMES_ENDPOINT = `games?key=${API_KEY}&dates=${getDates()[1]},${
  getCurrentDate()[0]
}&ordering=-rating&page_size=${PAGE_SIZE}`;

export const POPULAR_GAMES_URL = `${BASE_URL}${POPULAR_GAMES_ENDPOINT}`;

function getDates() {
  const date = new Date().getDate();
  const formatedDate = date < 10 ? '0' + date : date;
  const month = new Date().getMonth();
  const formatedMonth = month + 1 < 10 ? '0' + (month + 1) : month + 1;
  const year = new Date().getFullYear();
  return [
    getCurrentDate(formatedDate, formatedMonth, year),
    getLastYearDate(formatedDate, formatedMonth, year),
    getNextYearDate(formatedDate, formatedMonth, year),
  ];
}

function getCurrentDate(formatedDate, formatedMonth, year) {
  return `${year}-${formatedMonth}-${formatedDate}`;
}

function getLastYearDate(formatedDate, formatedMonth, year) {
  return `${year - 1}-${formatedMonth}-${formatedDate}`;
}

function getNextYearDate(formatedDate, formatedMonth, year) {
  return `${year + 1}-${formatedMonth}-${formatedDate}`;
}
