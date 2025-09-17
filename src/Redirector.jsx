import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const USERNAME1 = "HarshYadav152";
const USERNAME2 = "HarshYadav_152";
const phone = "+918650758730";
const bskyHandle = "HarshYadav.bsky.social";
const socialProfiles = {
    github: `https://github.com/${USERNAME1}`,
    discord: `https://discord.gg/${USERNAME1}`,
    twitter: `https://twitter.com/${USERNAME2}`,
    linkedin: `https://linkedin.com/in/${USERNAME1}`,
    devto: `https://dev.to/${USERNAME1}`,
    instagram:`https://instagram.com/${USERNAME2}`,
    whatsapp:`https://wa.me/${phone}`,
    community:`https://discord.gg/hbaMwruume`,
    reddit: `https://www.reddit.com/user/${USERNAME1}`,
    medium:`https://medium.com/@${USERNAME1}`,
    bluesky:`https://bsky.app/profile/${bskyHandle}`
};

export default function Redirector() {
    const location = useLocation();
    const { platform } = useParams();
    const [redirectFailed, setRedirectFailed] = useState(false);
    const [targetUrl, setTargetUrl] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const querySocial = queryParams.get("social")?.toLowerCase();
        const key = platform?.toLowerCase() || querySocial;
        const profileUrl = socialProfiles[key];

        setTargetUrl(profileUrl);

        if (profileUrl) {
            // Try to redirect immediately
            window.location.href = profileUrl;

            // Set a fallback in case it fails or takes too long
            const timeout = setTimeout(() => {
                setRedirectFailed(true);
            }, 5000);

            return () => clearTimeout(timeout);
        } else {
            setRedirectFailed(true);
        }
    }, [location, platform]);

    if (redirectFailed) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h2>⚠️ Redirect failed or took too long.</h2>
                <p>Click below to try again:</p>
                {targetUrl ? (
                    <a href={targetUrl} target="_blank" rel="noopener noreferrer">
                        👉 Go to Profile
                    </a>
                ) : (
                    <p>Unknown or unsupported platform.</p>
                )}
                <p style={{ marginTop: '1rem' }}>
                    <button onClick={() => window.location.reload()}>🔄 Refresh Page</button>
                </p>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Redirecting to {platform || new URLSearchParams(location.search).get('social')}...</p>
        </div>
    );
}
