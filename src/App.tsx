import { Routes, Route } from 'react-router-dom';

import Admin from './modules/adminPanel';
import Home from './modules/home';
import Contact from './modules/contactForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
