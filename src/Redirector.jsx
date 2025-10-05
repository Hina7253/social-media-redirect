import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

const USERNAME1 = "Hina7253";
const USERNAME2 = "Hina7253";
const phone = "+917253940203";

const socialProfiles = {
    github: `https://github.com/${USERNAME1}`,
    discord: `https://discord.gg/${USERNAME1}`,
    // twitter: `https://twitter.com/${USERNAME2}`,
    // linkedin: `https://linkedin.com/in/${USERNAME1}`,
    // devto: `https://dev.to/${USERNAME1}`,
    // instagram:`https://instagram.com/${USERNAME2}`,
    whatsapp:`https://wa.me/${phone}`,
    // community:`https://discord.gg/hbaMwruume`,
    // reddit: `https://www.reddit.com/user/${USERNAME1}`,
    // medium:`https://medium.com/@${USERNAME1}`,
    // bluesky:`https://bsky.app/profile/${bskyHandle}`
};

export default function Redirector(props) {
    const location = useLocation();
    const params = useParams();
    const [redirectFailed, setRedirectFailed] = useState(false);
    const [targetUrl, setTargetUrl] = useState(null);
    const [platformName, setPlatformName] = useState('');

    useEffect(() => {
        // Get platform from props first, then params, then query
        const queryParams = new URLSearchParams(location.search);
        const querySocial = queryParams.get("social")?.toLowerCase();
        const key = props.platform?.toLowerCase() || params.platform?.toLowerCase() || querySocial;
        
        setPlatformName(key || '');
        const profileUrl = socialProfiles[key];
        setTargetUrl(profileUrl);

        if (profileUrl) {
            // Try to redirect immediately
            window.location.replace(profileUrl); // Using replace instead of href for cleaner history
            
            // Set a shorter fallback timeout
            const timeout = setTimeout(() => {
                setRedirectFailed(true);
            }, 3000); // Reduced from 5000ms to 3000ms

            return () => clearTimeout(timeout);
        } else {
            setRedirectFailed(true);
        }
    }, [location, params, props.platform]);

    // Rest of the component remains the same
    if (redirectFailed) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h2>⚠️ Redirect failed or took too long.</h2>
                {targetUrl ? (
                    <>
                        <p>Click below to go to {platformName}:</p>
                        <a 
                            href={targetUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                background: '#4a86e8',
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                margin: '10px 0',
                                fontWeight: 'bold'
                            }}
                        >
                            👉 Go to {platformName.charAt(0).toUpperCase() + platformName.slice(1)}
                        </a>
                    </>
                ) : (
                    <>
                        <p>Unknown or unsupported platform: <strong>{platformName}</strong></p>
                        <p>
                            <Link to="/example" style={{color: '#4a86e8'}}>
                                View all available platforms
                            </Link>
                        </p>
                    </>
                )}
                <p style={{ marginTop: '1rem' }}>
                    <button 
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '8px 15px',
                            background: '#f0f0f0',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        🔄 Try Again
                    </button>
                </p>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Redirecting to {platformName || 'social profile'}...</p>
            <div className="loader" style={{
                border: '4px solid #f3f3f3',
                borderTop: '4px solid #3498db',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                animation: 'spin 1s linear infinite',
                margin: '20px auto'
            }}></div>
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}