@echo off
setlocal
set /p comment=please write comments:
cd "自身のローカルリポジトリ"
git add .
git commit -m "%comment%"
git push -u origin main
pause
exit /b 0
