@echo off
echo Initializing Git repository...
git init
echo.
echo Adding files...
git add .
echo.
echo Committing changes...
git commit -m "Initial commit - Portfolio website"
echo.
echo Setting branch to main...
git branch -M main
echo.
echo Adding remote origin...
git remote add origin https://github.com/vish260407-prog/vishportfoilo.git
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo Done! Press any key to exit.
pause
