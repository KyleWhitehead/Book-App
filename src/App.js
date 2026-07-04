import Book from './Pages/Book/Book.jsx';
import ChoosePlan from './Pages/ChoosePlan/ChoosePlan';
import ForYou from './Pages/ForYou/ForYou';
import Home from './Pages/Home/Home';
import Library from './Pages/Library/Library';
import Player from './Pages/Player/Player';
import Settings from './Pages/Settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/choose-plan" element={<ChoosePlan />} />
          <Route path="/for-you" element={<ForYou />} />
          <Route path="/library" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
