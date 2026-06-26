@echo off
echo Adding modified files...
git add .
echo.
echo Committing changes...
git commit -m "Fix mobile layout overlapping and sizing in Hero section"
echo.
echo Pushing to GitHub...
git push origin main
echo.
echo Done! Press any key to exit.
pause
