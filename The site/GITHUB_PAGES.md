# GitHub Pages Deployment

## Deploy Your Site to GitHub Pages (Zero Configuration)

This site is designed as a **pure static site** that works directly from GitHub Pages without any build steps or server configuration.

## Quick Deploy Steps

### Step 1: Initialize Git (if not already done)
```bash
cd "D:/Multiple Types of Pen Testing/The site"
git init
git add .
git commit -m "Initial commit - Pentesting Learning Site"
```

### Step 2: Add GitHub Remote
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **main branch** or **gh-pages branch**
5. Click **Save**

### Step 4: Your site is live!
Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Deploy Using GitHub UI (Alternative)

1. Go to https://github.com/new
2. Create a new repository
3. Click **"uploading an existing file"**
4. Drag and drop all files from this folder
5. Commit changes
6. Go to Settings > Pages and enable GitHub Pages

---

## File Structure (What Gets Deployed)

```
├── index.html              # Main page
├── css/
│   └── style.css          # All styles
├── js/
│   └── app.js             # JavaScript
├── subjects/              # Subject pages
│   ├── networking.html
│   ├── cs-essentials.html
│   ├── web-fundamentals.html
│   ├── pentesting.html
│   ├── ai.html
│   ├── ml.html
│   └── dl.html
└── topics/                # Topic pages with quizzes
    ├── sqli.html
    ├── xss.html
    ├── csrf.html
    └── ssrf.html
```

---

## After Deployment

- **Build time**: GitHub Pages typically builds within 1-2 minutes
- **URL**: `https://username.github.io/repository-name/`
- **Caching**: Pages may be cached - hard refresh with `Ctrl+Shift+R`

---

## Custom Domain (Optional)

To use a custom domain like `yourdomain.com`:

1. Create a `CNAME` file in your repo with just your domain:
   ```
   yourdomain.com
   ```

2. Add A records in your DNS pointing to GitHub:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

3. Update GitHub Pages settings with your custom domain

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 page | Check files are in root, not in subfolder |
| CSS not loading | Ensure paths are relative (`css/style.css`) |
| Dark mode not working | Check `js/app.js` is loaded |
| GitHub Pages not building | Wait 2-3 minutes, then check Settings > Pages |

---

## That's It!

No Node.js, no build tools, no configuration. Just push HTML files to GitHub and your site is live!
