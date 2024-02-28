@echo off
setlocal
set /p comment=please write comments:
cd "C:\Users\hirase naoki\python-git"
git add .
git commit -m %comment%
git push -u origin main
pause
exit /b 0