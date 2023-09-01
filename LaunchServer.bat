@echo off
:start
cls
echo ==============================================
echo ==============   Auto Restart   ==============
echo ============== By JoshuaFrameTV ==============
echo ==============================================
echo.
echo IMPORTANT INFORMATION:
echo  - Ensure you have the announcement resource started! Otherwise, players will not be alerted to an upcoming restart!
echo  - The server is set to automatically restart after 5 hours from the time this auto start file was launched!
echo  - If this batch file is NOT running, your server will not restart on a loop.
echo  - If you wish to prevent the auto restart, close this batch file.
echo  - Both this console and your server console will print the time of important notices, such as the 30 minute warning.
echo  - The server console will not display hour intervals, only from the 30 minute warning until the end.
echo  - If you have any questions feel free to contact JoshuaFrameTV via the GTA Connected Discord!
echo.
start Server.exe

echo NOTICE:
echo [%time%] Server is scheduled to restart in 5 hours!
timeout /t 3600 /nobreak >nul
echo [%time%] Server is scheduled to restart in 4 hours!
timeout /t 3600 /nobreak >nul
echo [%time%] Server is scheduled to restart in 3 hours!
timeout /t 3600 /nobreak >nul
echo [%time%] Server is scheduled to restart in 2 hours!
timeout /t 3600 /nobreak >nul
echo [%time%] Server is scheduled to restart in 1 hour!
timeout /t 1800 /nobreak >nul
echo [%time%] Server is scheduled to restart in 30 minutes!
timeout /t 900 /nobreak >nul
echo [%time%] Server is scheduled to restart in 15 minutes!
timeout /t 300 /nobreak >nul
echo [%time%] Server is scheduled to restart in 10 minutes!
timeout /t 300 /nobreak >nul
echo [%time%] Server is scheduled to restart in 5 minutes!
timeout /t 60 /nobreak >nul
echo [%time%] Server is scheduled to restart in 4 minutes!
timeout /t 60 /nobreak >nul
echo [%time%] Server is scheduled to restart in 3 minutes!
timeout /t 60 /nobreak >nul
echo [%time%] Server is scheduled to restart in 2 minutes!
timeout /t 60 /nobreak >nul
echo [%time%] Server is scheduled to restart in 1 minute!
timeout /t 60 /nobreak >nul
echo [%time%] Server is scheduled to restart in 10 seconds, you can interupt this if you wish
timeout /t 10 /nobreak
taskkill /im Server.exe /f
goto start