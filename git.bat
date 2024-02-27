@echo off
setlocal
set /p comment=please add comments:
cd "C:\Users\hirase naoki\python-git"
git add .
git commit -m %comment%
git push -u origin master
pause
exit /b 0