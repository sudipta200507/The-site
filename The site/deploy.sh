#!/bin/bash

# GitHub Pages Deploy Script
# This script helps you push your site to GitHub Pages

echo "=============================================="
echo "  SecForAI - GitHub Pages Deployment Script"
echo "=============================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
fi

# Check if remote is configured
REMOTE_URL=$(git remote get-url origin 2>/dev/null)

if [ -z "$REMOTE_URL" ]; then
    echo "No GitHub remote configured."
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo): " REMOTE_URL
    git remote add origin "$REMOTE_URL"
fi

echo ""
echo "Current remote: $REMOTE_URL"
echo ""

# Add all files
echo "Adding files to staging..."
git add .

# Commit
read -p "Enter commit message (default: 'Update site'): " COMMIT_MSG
COMMIT_MSG=${COMMIT_MSG:-"Update site"}

git commit -m "$COMMIT_MSG"

# Check out gh-pages branch or use main
if git rev-parse --verify gh-pages >/dev/null 2>&1; then
    echo "Switching to gh-pages branch..."
    git checkout gh-pages
else
    echo "Creating gh-pages branch..."
    git checkout -b gh-pages
fi

# Push to GitHub
echo ""
echo "Pushing to GitHub..."
git push -u origin gh-pages

echo ""
echo "=============================================="
echo "  Deployment Complete!"
echo "=============================================="
echo ""
echo "Your site will be live at:"
echo "  https://$(echo $REMOTE_URL | sed 's/.*\/\/\([^/]*\).*/\1\/' | sed 's/github.com\///')/$(basename "$(pwd)")/"
echo ""
echo "Wait a few minutes for GitHub Pages to build, then visit the URL above."
echo ""
