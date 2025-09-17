import { Link } from 'react-router-dom';
import './How.css';

function How() {
  // List of available social platforms
  const socialPlatforms = [
    { name: 'GitHub', path: '/github', queryParam: 'github' },
    { name: 'Twitter', path: '/twitter', queryParam: 'twitter' },
    { name: 'LinkedIn', path: '/linkedin', queryParam: 'linkedin' },
    { name: 'Discord', path: '/discord', queryParam: 'discord' },
    { name: 'Dev.to', path: '/devto', queryParam: 'devto' },
    { name: 'Instagram', path: '/instagram', queryParam: 'instagram' }
  ];

  return (
    <div className="home-container">
      <h1>Social Media Redirector</h1>
      <p className="description">
        This tool provides quick redirects to social media profiles using custom routes.
      </p>

      <section className="usage-section">
        <h2>Available Redirects</h2>
        <div className="links-grid">
          {socialPlatforms.map(platform => (
            <div key={platform.name} className="platform-card">
              <h3>{platform.name}</h3>
              <div className="link-examples">
                <div className="link-method">
                  <h4>Direct path:</h4>
                  <code>{window.location.origin}/#${platform.path}</code>
                  <Link className="try-link" to={platform.path}>Try it</Link>
                </div>
                <div className="link-method">
                  <h4>Query parameter:</h4>
                  <code>{window.location.origin}/#/join?social={platform.queryParam}</code>
                  <Link className="try-link" to={`/join?social=${platform.queryParam}`}>Try it</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="how-to-section">
        <h2>How to Use</h2>
        <p>
          Simply append the social platform name to the URL, or use the query parameter format.
          Both methods will redirect you to the corresponding social profile.
        </p>
        <p>
          You can bookmark these links or share them with others for quick access to your profiles.
        </p>
      </section>
    </div>
  );
}

export default How;