import { HashRouter, Routes, Route } from 'react-router-dom';
import Redirector from './Redirector';
import How from './how';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/example" element={<How />} />
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
        <Route path="/join" element={<Redirector />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;