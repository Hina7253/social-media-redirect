import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Redirector from './Redirector';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Handle direct routes like /#/github */}
        <Route path="/:platform" element={<Redirector />} />
        {/* Handle query-based redirect like /#/join?social=instagram */}
        <Route path="/join" element={<Redirector />} />
        {/* Optional: Add a fallback or homepage */}
        <Route path="*" element={<div><h2>Welcome!</h2><p>Try /#/github or /#/join?social=instagram</p></div>} />
      </Routes>
    </Router>
  );
}
