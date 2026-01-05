# FareFinder Landing Page 🚗

A beautiful, minimal landing page for the FareFinder app, inspired by modern web design aesthetics.

## Features ✨

- **Premium Dark Theme** with animated gradients
- **Glassmorphism Effects** for modern UI elements
- **Smooth Animations** and micro-interactions
- **Responsive Design** that works on all devices
- **APK Download Button** for direct app installation
- **Interactive Phone Mockup** with parallax effects

## Quick Start 🚀

1. Simply open `index.html` in your browser
2. No build process or dependencies required!

## Customization 🎨

### Update APK Download Link

Edit `script.js` and update the `APK_URL` constant:

```javascript
const APK_URL = 'https://github.com/Aditya41150/Fare-Finder-Cabs-and-Bikes/releases/latest/download/fare-finder.apk';
```

### Change Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Update Content

Edit `index.html` to change:
- App name and tagline
- Description text
- Features
- Footer links

## Deployment 🌐

### Option 1: GitHub Pages
1. Push this folder to a GitHub repository
2. Go to Settings → Pages
3. Select the branch and folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify
1. Drag and drop this folder to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant deployment

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory
3. Follow the prompts

## Hosting Your APK 📦

To make the download button work, you need to host your APK file:

### GitHub Releases (Recommended)
1. Go to your repository on GitHub
2. Click "Releases" → "Create a new release"
3. Upload your APK file
4. Copy the download URL and update `script.js`

### Alternative Options
- Google Drive (make sure link is publicly accessible)
- Dropbox
- Firebase Storage
- Your own server

## File Structure 📁

```
fare-finder-website/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Browser Support 🌐

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Credits 💝

- Design inspired by [ritualz.app](https://ritualz.app)
- Built for [FareFinder](https://github.com/Aditya41150/Fare-Finder-Cabs-and-Bikes)
- Created with ❤️ by Aditya

## License 📄

Feel free to use and modify this template for your own projects!
