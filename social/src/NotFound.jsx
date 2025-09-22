import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  // List of all available social platforms
  const socialPlatforms = [
    { name: 'GitHub', path: '/github' },
    { name: 'Twitter', path: '/twitter' },
    { name: 'LinkedIn', path: '/linkedin' },
    { name: 'Discord', path: '/discord' },
    { name: 'Dev.to', path: '/devto' },
    { name: 'Instagram', path: '/instagram' },
    { name: 'WhatsApp', path: '/whatsapp' },
    { name: 'Community', path: '/community' },
    { name: 'Reddit', path: '/reddit' },
    { name: 'Medium', path: '/medium' },
    { name: 'BlueSky', path: '/bluesky' }
  ];

  return (
    <div className="not-found-container">
      <h1>Page Not Found</h1>
      <p className="error-message">The social media redirect you're looking for doesn't exist.</p>
      
      <div className="available-links">
        <h2>Available Redirects:</h2>
        <ul className="platforms-list">
          {socialPlatforms.map(platform => (
            <li key={platform.name}>
              <Link to={platform.path}>{platform.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="go-home">
        <Link to="/" className="home-button">Go to Home Page</Link>
      </div>
    </div>
  );
}

export default NotFound;