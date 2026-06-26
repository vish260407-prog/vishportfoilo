@echo off
echo Configuring Git identity for this repository...
git config user.name "Vishmitha M"
git config user.email "vish260407-prog@users.noreply.github.com"
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
echo Adding remote origin (ignoring if it already exists)...
git remote add origin https://github.com/vish260407-prog/vishportfoilo.git 2>nul
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
echo Done! Press any key to exit.
pause
