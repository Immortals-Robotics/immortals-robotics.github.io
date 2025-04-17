# Immortals Robotics Team Website

<div align="center">
  <img src="/public/assets/logo.png" alt="Immortals Robotics Team Logo" width="300" />
  <br/>
  <h3><a href="https://immortals-robotics.com">immortals-robotics.com</a></h3>
  <p>🤖 Official website for the Immortals Small Size League (SSL) robotics team</p>
  
  [![Built with Astro](https://astro.badgen.dev/v1)](https://astro.build)
  [![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/immortals/Site)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
</div>

## 📖 About

The Immortals Robotics Team is a distinguished Small Size League (SSL) robotics team founded in 2008. With multiple awards in RoboCup competitions, the team continues to push the boundaries of robotic technology and artificial intelligence.

This repository contains the source code for the official Immortals Robotics Team website, built with [Astro](https://astro.build), a modern static site builder focused on performance.

## ✨ Features

- 🚀 **Fast Performance**: Built with Astro for optimal loading speeds
- 📱 **Responsive Design**: Works on all devices and screen sizes
- 📄 **Markdown Content**: Easy to update content using markdown files
- 🖼️ **Image Optimization**: Automatic image optimization
- 🔍 **SEO Friendly**: Optimized for search engines
- 🏆 **Team Achievements**: Showcase of competitions and awards
- 📰 **News Section**: Latest updates and team announcements

## 📚 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/immortals-site.git
   cd immortals-site
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 🚀 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── assets/        # Images and other static assets
│       ├── logo.png
│       ├── robots.jpeg
│       └── ...
├── src/
│   ├── components/    # Reusable Astro components
│   │   ├── Hero.astro
│   │   └── TeamMember.astro
│   ├── layouts/       # Page layouts
│   │   ├── Layout.astro
│   │   └── MarkdownLayout.astro
│   └── pages/         # Page content
│       ├── index.astro  # Home page
│       ├── about.md
│       ├── team.astro
│       ├── achievements.md
│       ├── contact.md
│       └── news/
│           ├── index.astro
│           └── robocup-2023.md
└── package.json       # Project dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro`           | Run Astro CLI commands                           |

## 📝 Content Management

This site uses markdown files for content, making it easy to update. To modify or add content:

1. Navigate to the `src/pages` directory
2. Edit the markdown (.md) or Astro (.astro) files
3. For markdown files, use the frontmatter section at the top to set metadata:
   ```markdown
   ---
   layout: ../layouts/MarkdownLayout.astro
   title: Your Page Title
   description: Page description for SEO
   ---
   
   Your markdown content here
   ```

### Adding News Articles

To add a new news article:
1. Create a new markdown file in `src/pages/news/`
2. Use the proper frontmatter format
3. Add your article content using markdown

## 🖼️ Working with Images

### Adding Images
1. Place image files in the `public/assets/` directory
2. Reference them in your markdown with: `![Alt text](/assets/your-image.jpg)`
3. In Astro components, use: `<img src="/assets/your-image.jpg" alt="Description" />`

### Recommended Image Formats
- Use `.jpg` for photos
- Use `.png` for graphics with transparency
- Use `.svg` for icons and logos when possible
- Consider `.webp` for better compression

## 🧰 Customization

The site uses:
- Markdown for content pages
- Astro components for layouts and interactive elements
- CSS variables for consistent styling

### Modifying the Theme
To change the color scheme, edit the CSS variables in `src/layouts/Layout.astro`.

## 📤 Deployment

This site is built to be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

### Build for Production
```bash
npm run build
```

The built site will be in the `dist/` directory, ready to be deployed.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or more information, please contact the Immortals Robotics Team at:
- Email: contact@immortals-robotics.com
- Website: [immortals-robotics.com](https://immortals-robotics.com)

---

<p align="center">Made with ❤️ by the Immortals Robotics Team</p>
