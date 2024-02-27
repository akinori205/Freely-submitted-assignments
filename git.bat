@echo off
setlocal
set /p comment=please add comments:
cd "C:\Users\hirase naoki\python-git"
git add .
rem git commit -m %comment%
rem git push -u origin main
pause
exit /b 0