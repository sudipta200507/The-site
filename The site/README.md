# SecForAI - Pentesting Learning Platform

An offline-first learning website for AI/ML engineers transitioning into security roles. Learn foundational concepts and web application pentesting techniques through interactive lessons.

---

## Quick Deploy to GitHub Pages (No Server Required!)

This site works **directly from GitHub Pages** - no build steps or server configuration needed!

### How to Deploy:

1. **Create a new GitHub repository**

2. **Add these files to your repo** (or clone this project):
   - All HTML files (`index.html`, `subjects/*.html`, `topics/*.html`)
   - `css/style.css`
   - `js/app.js`

3. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Click **Settings** > **Pages**
   - Under **Source**, select **main branch** (or **gh-pages branch**)
   - Click **Save**

4. **Your site is live!** Visit: `https://YOUR_USERNAME.github.io/your-repo/`

> **That's it!** No npm install, no server setup, no build process.

---

## Features

- **Offline-First**: Works entirely offline after initial load
- **No External Dependencies**: All libraries are bundled locally
- **Dark/Light Mode**: Toggle between themes
- **Interactive Quizzes**: Test your understanding after each topic
- **Code Examples**: Vulnerable and safe code side-by-side for pentesting topics
- **Responsive Design**: Works on desktop and mobile devices
- **Clean UI**: Inspired by modern blog themes

## Topics Covered

### 1. Computer Networks
- OSI Model
- TCP/IP Protocol Suite
- HTTP/HTTPS
- DNS
- Network Ports
- Firewalls
- Proxies
- Sockets

### 2. Computer Science Essentials
- Data Structures
- Algorithm Complexity (Big O)
- Operating Systems
- Memory Management
- Databases
- Concurrency

### 3. Web Fundamentals
- HTML/CSS Basics
- JavaScript
- Client-Server Model
- Cookies & Sessions
- REST APIs
- Authentication & Authorization

### 4. Web App Pentesting (OWASP Top 10)
- SQL Injection (SQLi)
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)
- Server-Side Request Forgery (SSRF)
- Insecure Direct Object Reference (IDOR)
- Authentication Bypass
- File Upload Vulnerabilities
- Command Injection
- XML External Entity (XXE)
- Security Misconfigurations

### 5. AI Concepts
- AI Fundamentals
- AI History
- AI Use Cases
- Key Terminology
- AI Security
- AI-Powered Threats

### 6. Machine Learning
- ML Fundamentals
- Key Algorithms
- ML Workflow
- Evaluation Metrics
- Feature Engineering
- Secure ML
- Model Bias & Fairness
- ML Model Deployment

### 7. Deep Learning
- Neural Networks
- Convolutional Neural Networks (CNNs)
- Recurrent Neural Networks (RNNs)
- Transformers
- Model Training
- Deep Learning Security

## Running Locally (Optional)

If you want to preview the site before deploying:

### Option 1: Using http-server
```bash
npx http-server -p 3000
```

### Option 2: Using Python
```bash
python -m http.server 3000
```

### Option 3: Using VS Code Live Server
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Adding New Topics

To add a new topic page:

1. Create a new HTML file in the `topics/` directory
2. Copy the structure from an existing topic page
3. Update the content, add your quiz questions, and include the diagram

## Customization

### Changing the Color Scheme
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2F6BFF;
    --primary-color-dark: #1e53e5;
    /* ... */
}
```

## License

MIT License - Feel free to use and modify for your own learning purposes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

**Built for offline learning. Deploy to GitHub Pages in minutes!**
