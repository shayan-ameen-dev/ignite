import { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { fetchSearchedGames } from '../actions/gamesAction';
// Router

// Styled Components
import styled from 'styled-components';
// Framer Motion
import { motion } from 'framer-motion';
// Logo
import logo from '../img/logo.svg';

const Nav = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  function inputChangeHandler(event) {
    setInput(event.target.value);
  }

  function formSubmithandler() {
    dispatch(fetchSearchedGames(input));
    setInput('');
  }

  function clearSearchedGames() {
    dispatch({ type: 'CLEAR_SEARCHED_GAMES' });
  }

  return (
    <StyledNav>
      <StyledLogo onClick={clearSearchedGames}>
        <img src={logo} alt='logo' />
        <h1>Ignite</h1>
      </StyledLogo>
      <StyledSearch>
        <input onChange={inputChangeHandler} value={input} type='search' />
        <button onClick={formSubmithandler} type='submit'>
          Search
        </button>
      </StyledSearch>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
`;
const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
const StyledSearch = styled(motion.div)`
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline-color: darkgray;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: #fff;

    &:focus {
      outline: #ff4444 solid 1px;
    }
  }
`;

export default Nav;
