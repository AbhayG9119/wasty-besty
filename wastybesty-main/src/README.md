# Wasty Besty - Official Website

![Wasty Besty Logo](https://yt3.googleusercontent.com/ytc/AIdro_kzc2V698OvpFqD4ojbU_HLMF-DRk8FMJ9aPuUESWYMYBQ=s160-c-k-c0x00ffffff-no-rj)

A modern React website for the Wasty Besty YouTube channel - your destination for DIY gardening, upcycled projects, plant care, and creative content.

## 🌱 About Wasty Besty

Wasty Besty is a YouTube channel hosted by Mam that focuses on:
- **DIY Gardening**: Creative projects using upcycled materials
- **Plant Care**: Tips and tricks for maintaining healthy plants
- **Garden Tours**: Visual inspiration and design ideas
- **Quick Hacks**: Bite-sized gardening tips and tricks
- **Community Building**: Troubleshooting and learning together

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **YouTube Integration**: Embedded videos and playlists from the Wasty Besty channel
- **Modern UI**: Clean, professional design with smooth animations
- **Multi-page Navigation**: Easy access to different sections of the website
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
wastybesty-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ScrollTopButton.js
│   │   ├── VideoCard.js
│   │   ├── VideoGrid.js
│   │   └── LeafTransitions.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Videos.js
│   │   ├── Shorts.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Blog.js
│   │   └── BestyBuilds.js
│   ├── hooks/
│   │   └── useYouTubeData.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── layout.css
│   │   └── variables.css
│   ├── images/
│   ├── utils/
│   └── App.js
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wastybesty-website.git
   cd wastybesty-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📄 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Updating YouTube Content
Edit the video arrays in the respective page components:
- `src/pages/Home.js` - Featured videos and playlists
- `src/pages/Videos.js` - Main video content
- `src/pages/Shorts.js` - Short-form content

### Styling
- Modify CSS files in `src/styles/` for global styles
- Component-specific styles are in corresponding CSS files
- Color variables are defined in `src/styles/variables.css`

## 🌐 Pages

- **Home**: Featured content, channel introduction, and main navigation
- **Videos**: Complete video library and playlists
- **Shorts**: Bite-sized gardening tips and quick hacks
- **About**: Channel story and creator information
- **Contact**: Get in touch with Wasty Besty
- **Blog**: Gardening articles and tips
- **BestyBuilds**: DIY project showcases

## 🤝 Contributing

We welcome contributions! Please feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests for improvements

## 📞 Contact & Links

- **YouTube**: [Wasty Besty Channel](https://www.youtube.com/@WastyBesty)
- **Email**: [Add contact email here]
- **Social Media**: [Add social media links here]

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons and images from various sources
- YouTube API for video integration
- The amazing Wasty Besty community for their support

---

*Made with ❤️ for the gardening community*
