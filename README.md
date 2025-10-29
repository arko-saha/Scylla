# Scylla - The Home of UK's Next Cricket Generation

A modern, responsive web platform connecting cricket talent with opportunities across the UK. Built with HTML5, CSS3, and JavaScript, featuring a beautiful UI with Tailwind CSS.

## 🏏 Features

- **Player Profiles**: Create dynamic digital CVs with stats, photos, and videos
- **Talent Discovery**: Find and connect with promising cricket talent
- **Opportunity Matching**: Discover clubs, academies, and career opportunities
- **Professional Network**: Connect with scouts, coaches, and industry professionals
- **Responsive Design**: Optimized for all devices and screen sizes

## 🚀 Live Demo

Visit the live site: [https://scylla-talent-platform.vercel.app](https://scylla-talent-platform.vercel.app)

## 🔐 Authentication

The platform includes a demo authentication system:
- **Email/Password**: Works immediately for testing
- **Google OAuth**: Requires configuration (see GOOGLE_OAUTH_SETUP.md)

### Demo Login
You can test the platform by:
1. Going to the Sign Up page
2. Filling in any email and password
3. Selecting your role (Player, Scout, or Admin)
4. Creating an account

The system will store your session locally and redirect you to the main page.

### Troubleshooting Authentication
If you see "don't have an account" messages:
1. Clear your browser's localStorage
2. Try creating a new account
3. Check the browser console for any errors

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
├── index.html              # Main landing page
├── find-talent.html        # Talent discovery page
├── find-opportunities.html # Opportunities page
├── career-hub.html         # Career resources
├── login.html              # User login
├── signup.html             # User registration
├── *.html                  # Additional service pages
├── *.svg                   # Icon assets
├── package.json            # Project configuration
├── vercel.json             # Vercel deployment config
└── README.md               # Project documentation
```

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional design with cricket-themed color scheme
- **Animations**: Smooth transitions and hover effects
- **Mobile-First**: Responsive design that works on all devices
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized loading with CDN resources

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Git (for cloning)
- Node.js (optional, for local development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arko-saha/Scylla.git
cd Scylla
```

2. Open `index.html` in your web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 🌐 Deployment

This project is automatically deployed on Vercel. Any push to the main branch will trigger a new deployment.

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

## 🎯 Target Audience

- **Cricket Players**: Young and aspiring cricketers looking to showcase their talent
- **Scouts & Coaches**: Professionals seeking to discover new talent
- **Cricket Clubs**: Organizations looking to recruit players
- **Cricket Academies**: Training institutions seeking students

## 📱 Pages Overview

- **Home**: Landing page with hero section and key features
- **Find Talent**: Browse and discover cricket players
- **Find Opportunities**: Explore career and playing opportunities
- **Career Hub**: Resources and tools for career development
- **Authentication**: Login and signup pages
- **Services**: Various cricket-related services and programs

## 🔧 Customization

The platform uses a cricket-themed color palette:
- Cricket Green: `#2D5016`
- Cricket Gold: `#D4AF37`
- Cricket Red: `#DC2626`
- Cricket Blue: `#1E40AF`
- Cricket Purple: `#7C3AED`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arko Saha**
- GitHub: [@arko-saha](https://github.com/arko-saha)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/arko-saha/Scylla/issues).

## 📞 Support

If you have any questions or need support, please open an issue on GitHub or contact us through the platform.

---

**Scylla** - Building the next generation of cricket stars in the UK! 🏏✨
