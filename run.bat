@echo off
setlocal EnableDelayedExpansion

echo =====================================
echo          K6 LOAD TEST
echo =====================================
echo.

:: Load .env
for /f "usebackq tokens=1,* delims==" %%A in (".env") do (
    if not "%%A"=="" (
        if not "%%A:~0,1%%"=="#" (
            set %%A=%%B
        )
    )
)

echo Base URL : %BASE_URL%
echo Virtual Users : %VU%
echo Duration : %DURATION%
echo.

echo 1. Smoke Test
echo 2. Load Test
echo 3. Stress Test
echo 4. Soak Test
echo.

set /p CHOICE=Choose Test :

echo.

if "%CHOICE%"=="1" (
    k6 run tests/smoke.js
)

if "%CHOICE%"=="2" (
    k6 run tests/load.js
)

if "%CHOICE%"=="3" (
    k6 run tests/stress.js
)

if "%CHOICE%"=="4" (
    k6 run tests/soak.js
)

pause