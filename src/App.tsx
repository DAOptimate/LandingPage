import { Routes, Route } from 'react-router-dom';

import Admin from './modules/adminPanel';
import Home from './modules/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
