// Router
import { Routes, Route } from 'react-router-dom';
// Styled Components
import GlobalStyles from './components/GlobalStyles';
// Pages
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
