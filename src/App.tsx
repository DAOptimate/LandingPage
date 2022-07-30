import { Routes, Route } from 'react-router-dom';

import Admin from './routes/Admin';
import Home from './routes/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
