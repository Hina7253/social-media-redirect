Collecting workspace information# Social Media Redirect

A simple React application that redirects users to social media profiles using custom routes and query parameters.

## Features

- Direct routing with path parameters (e.g., `/#/github`)
- Query parameter redirects (e.g., `/#/join?social=instagram`)
- Configurable social media profile links
- Fallback UI for failed redirects
- HashRouter for simple GitHub Pages deployment

## Supported Platforms

- GitHub: `/#/github`
- Twitter: `/#/twitter`
- LinkedIn: `/#/linkedin`
- Discord: `/#/discord`
- Dev.to: `/#/devto`

## Usage

Access the application and append the social media platform as a hash route:

```
https://harshyadav152.github.io/#/github
https://harshyadav152.github.io/#/twitter
https://harshyadav152.github.io/#/linkedin
```

Or use the query parameter approach:

```
https://harshyadav152.github.io/#/join?social=github
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## Customization

Update the username variables in `Redirector.jsx` to change the social profile links:

```javascript
const USERNAME1 = "YourUsername";
const USERNAME2 = "Your_Username";
```

Add more social platforms by extending the `socialProfiles` object in the same file.

## Technologies

- React 19
- React Router 7
- Vite 7