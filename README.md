# AutoRestart_GTAC
A simple batch file that will automatically restart your GTA Connected server every 5 hours.

INSTALL:
1) Place the LaunchServer.bat file into your ROOT DIRECTORY for your GTAConnected Server! It should be in the same location as Server.exe
2) Place the AutoRestartNotify resource into your resources folder.
3) Start the resource in your Server.xml
4) Run LauncherServer.bat

THINGS TO NOTE:
1) If your server executable is not "Server.exe" then you will need to make the proper adjustments in the LauncherServer.bat file. There are two instances where "Server.exe" show up.
2) Your server will restart every 5 hours, assuming neither the batch file or the server console are closed manually.
3) If you wish to prevent a restart, you can close the batch file. (This will not prevent players from being notified of a restart, unless you stop the AutoRestartNotify resource)
4) The batch file and your server console will print the time of important notices, such as the 30 minute warning.
