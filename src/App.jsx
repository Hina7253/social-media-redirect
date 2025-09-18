import { HashRouter, Routes, Route } from 'react-router-dom';
import Redirector from './Redirector';
import How from './How';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<How />} />
        
        {/* Social media redirects */}
        <Route path="/github" element={<Redirector platform="github" />} />
        <Route path="/twitter" element={<Redirector platform="twitter" />} />
        <Route path="/linkedin" element={<Redirector platform="linkedin" />} />
        <Route path="/discord" element={<Redirector platform="discord" />} />
        <Route path="/devto" element={<Redirector platform="devto" />} />
        <Route path="/whatsapp" element={<Redirector platform="whatsapp" />} />
        <Route path="/instagram" element={<Redirector platform="instagram" />} />
        <Route path="/community" element={<Redirector platform="community" />} />
        <Route path="/reddit" element={<Redirector platform="reddit" />} />
        <Route path="/bluesky" element={<Redirector platform="bluesky" />} />
        <Route path="/medium" element={<Redirector platform="medium" />} />
        
        {/* Query parameter redirect */}
        <Route path="/join" element={<Redirector />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;