# GitHub Pages Deploy Script (Windows/Batch)

@echo off
echo ==============================================
echo   SecForAI - GitHub Pages Deployment Script
echo ==============================================
echo.

REM Check if git is initialized
git rev-parse --git-dir >nul 2>&1
if %errorlevel% neq 0 (
    echo Initializing Git repository...
    git init
)

REM Check if remote is configured
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo No GitHub remote configured.
    set /p REMOTE_URL="Enter your GitHub repository URL (e.g., https://github.com/username/repo): "
    git remote add origin %REMOTE_URL%
)

echo.
echo Current remote: %REMOTE_URL%
echo.

REM Add all files
echo Adding files to staging...
git add .

REM Commit
set /p COMMIT_MSG="Enter commit message (default: 'Update site'): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update site
git commit -m "%COMMIT_MSG%"

REM Check out gh-pages branch or use main
git checkout gh-pages 2>nul
if %errorlevel% neq 0 (
    echo Creating gh-pages branch...
    git checkout -b gh-pages
)

REM Push to GitHub
echo.
echo Pushing to GitHub...
git push -u origin gh-pages

echo.
echo ==============================================
echo   Deployment Complete!
echo ==============================================
echo.
echo Your site will be live at:
echo   https://USERNAME.github.io/REPONAME/
echo.
echo Wait a few minutes for GitHub Pages to build.
echo.
