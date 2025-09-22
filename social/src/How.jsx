import { Link } from 'react-router-dom';
import './How.css';

function How() {
  // List of all available social platforms
  const socialPlatforms = [
    { name: 'GitHub', path: '/github', queryParam: 'github' },
    { name: 'Twitter', path: '/twitter', queryParam: 'twitter' },
    { name: 'LinkedIn', path: '/linkedin', queryParam: 'linkedin' },
    { name: 'Discord', path: '/discord', queryParam: 'discord' },
    { name: 'Dev.to', path: '/devto', queryParam: 'devto' },
    { name: 'Instagram', path: '/instagram', queryParam: 'instagram' },
    { name: 'WhatsApp', path: '/whatsapp', queryParam: 'whatsapp' },
    { name: 'Community', path: '/community', queryParam: 'community' },
    { name: 'Reddit', path: '/reddit', queryParam: 'reddit' },
    { name: 'Medium', path: '/medium', queryParam: 'medium' },
    { name: 'BlueSky', path: '/bluesky', queryParam: 'bluesky' }
  ];

  return (
    <div className="home-container">
      <h1>Social Media Redirector</h1>
      <p className="description">
        This tool provides quick redirects to social media profiles using custom routes.
      </p>

      <section className="usage-section">
        <h2>How To Use</h2>
        
        <div className="example-box" style={{ 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
          padding: '20px', 
          marginBottom: '30px',
          backgroundColor: '#f9f9f9' 
        }}>
          <h3>Example:</h3>
          <div className="example-methods">
            <div className="method">
              <h4>Direct path:</h4>
              <code>{`${window.location.origin}/#/github`}</code>
              <Link className="try-link" to="/github" style={{ 
                display: 'inline-block', 
                margin: '10px 0',
                padding: '8px 15px',
                background: '#4a86e8',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none'
              }}>Try it</Link>
            </div>
            <div className="method" style={{ marginTop: '15px' }}>
              <h4>Query parameter:</h4>
              <code>{`${window.location.origin}/#/join?social=github`}</code>
              <Link className="try-link" to="/join?social=github" style={{ 
                display: 'inline-block', 
                margin: '10px 0',
                padding: '8px 15px',
                background: '#4a86e8',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none'
              }}>Try it</Link>
            </div>
          </div>
        </div>
        
        <h3>Available Platforms:</h3>
        <div className="platforms-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '15px',
          marginTop: '20px'
        }}>
          {socialPlatforms.map(platform => (
            <div key={platform.name} className="platform-item" style={{ 
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textAlign: 'center',
              backgroundColor: 'white'
            }}>
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
        
        <div className="instructions" style={{ marginTop: '30px' }}>
          <p>
            To use this redirector, simply replace <strong>github</strong> in the examples above with any platform name from the list.
          </p>
          <p>
            You can bookmark these links or share them with others for quick access to your profiles.
          </p>
        </div>
      </section>
    </div>
  );
}

export default How;