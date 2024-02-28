@echo off
setlocal
set /p comment=please add comments:
cd "自身のローカルリポジトリ"
echo git add .
git add .
echo git add .
rem git commit -m %comment%
rem git push -u origin main
pause
exit /b 0
