# Quick Start Guide - Pentesting Learning Site

## Prerequisites
Make sure you have **Node.js installed** on your computer.

## Step-by-Step: Running the Site

### Method 1: Using http-server (Easiest)

Open your terminal/command prompt and run these commands:

```bash
# Navigate to the project folder
cd "D:/Multiple Types of Pen Testing/The site"

# Install http-server globally (only needs to be done once)
npm install -g http-server

# Start the server
http-server -p 3000
```

Then open your browser and go to:
```
http://localhost:3000
```

### Method 2: Using npm (if you have package.json)

```bash
cd "D:/Multiple Types of Pen Testing/The site"
npm start
```

### Method 3: Using Python (no Node.js required)

If you don't have Node.js installed, use Python's built-in server:

```bash
# For Python 3
cd "D:/Multiple Types of Pen Testing/The site"
python -m http.server 3000

# For Python 2
python -m SimpleHTTPServer 3000
```

### Method 4: Using VS Code (if you prefer a GUI)

1. Open the project folder in VS Code
2. Install the "Live Server" extension
3. Right-click on `index.html`
4. Select "Open with Live Server"

## What You'll See

When you open the site, you'll see:
- **Home Page**: Hero section with overview and subject cards
- **Subjects Menu**: Click "Subjects" to navigate to all 7 categories
- **Topic Pages**: Each OWASP Top 10 vulnerability with code examples and quizzes

## Available Commands Summary

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies (if any) |
| `npm start` | Start the server on port 3000 |
| `http-server -p 3000` | Alternative way to start server |
| `python -m http.server 3000` | Python server option |

## Troubleshooting

**Port 3000 already in use?**
```bash
# Use a different port
http-server -p 8080
```

**Can't find the folder?**
Make sure the path matches your actual location:
```
D:/Multiple Types of Pen Testing/The site
```
Use forward slashes `/` even on Windows.

**Server starts but page is blank?**
- Open browser console (F12) and check for errors
- Make sure all files are in the project folder
- Try clearing browser cache

## Next Steps

1. Explore the **Subjects** menu
2. Read through the **Web App Pentesting** section (OWASP Top 10)
3. Complete the **quizzes** at the bottom of each topic page
4. Switch to **Dark Mode** using the toggle in the header

## Need Help?

Check the full README.md file for detailed documentation on:
- Adding new topics
- Customizing the site
- File structure
- Contributing

---

**Built for offline learning** - Once loaded, the site works without internet connection.
