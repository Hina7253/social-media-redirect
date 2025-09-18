# Social Media Redirect

A simple React application that redirects users to social media profiles using custom routes and query parameters. Perfect for creating short, memorable links to your social profiles that you can share easily.

## 🌟 Features

- Direct routing with path parameters (e.g., `/#/github`)
- Query parameter redirects (e.g., `/#/join?social=instagram`)
- Configurable social media profile links
- Fallback UI for failed redirects
- GitHub Pages compatible (using HashRouter)
- Informative home page showing all available redirects

## 🔗 Supported Platforms

- GitHub: `/#/github`
- Twitter: `/#/twitter`
- LinkedIn: `/#/linkedin`
- Discord: `/#/discord`
- Dev.to: `/#/devto`
- More can be easily added!

## 🚀 Demo

Access the demo site and try it out:
[https://harshyadav152.github.io/how](https://harshyadav152.github.io/how)

## 🧰 Setup Your Own

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Git](https://git-scm.com/)

### Installation

1. Clone this repository or create a new one:
   ```bash
   # Option 1: Clone this repo
   git clone https://github.com/HarshYadav152/social.git
   cd social-redirect

   # Option 2: Create from scratch
   npm create vite@latest my-social-redirect -- --template react
   cd my-social-redirect
   npm install react-router-dom
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure for GitHub Pages deployment:
   ```bash
   npm install --save-dev gh-pages
   ```

4. Update your package.json with:
   ```json
   {
     "homepage": "https://yourusername.github.io/social-redirect",
     "scripts": {
       // other scripts...
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

5. Create a vite.config.js or update existing one:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: './', // Important for GitHub Pages deployment
   })
   ```

### Customization

1. Open `src/Redirector.jsx` and modify the USERNAME variables to your handles:
   ```javascript
   // Your usernames for different platforms
   const USERNAME1 = "Username1";
   const USERNAME2 = "Username2";
   
   // Configure social profile URLs
   const socialProfiles = {
     github: `https://github.com/${USERNAME1}`,
     twitter: `https://twitter.com/${USERNAME2}`,
     linkedin: `https://linkedin.com/in/${USERNAME1}`,
     discord: `https://discord.gg/${USERNAME1}`,
     devto: `https://dev.to/${USERNAME1}`,
     // Add more platforms as needed
   };
   ```

2. To add more platforms, update both the `socialProfiles` object in `Redirector.jsx` and add new routes in `App.jsx`:
   ```javascript
   // In App.jsx
   <Route path="/newplatform" element={<Redirector platform="newplatform" />} />
   ```

### Deployment

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Setup social media redirector"
   git push
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to Pages section
   - Select the `gh-pages` branch
   - Save the changes

Your redirector will be available at `https://yourusername.github.io/social-redirect`

## 🧩 Usage

Access the application and append the social media platform as a hash route:
```
https://yourusername.github.io/social-redirect/#/github
https://yourusername.github.io/social-redirect/#/twitter
```

Or use the query parameter approach:
```
https://yourusername.github.io/social-redirect/#/join?social=github
```

## 💻 Development

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🔧 Technologies

- React 19
- React Router 7
- Vite 7

## 📝 License

MIT

---

Created with ❤️ by [Harsh Yadav](https://github.com/HarshYadav152)