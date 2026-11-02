@echo off
chcp 65001 >nul
title Bilgi Evreni 4D Sunucu
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js kurulu degil. Lutfen https://nodejs.org adresinden kurun.
  pause
  exit /b 1
)
if not exist index.html (
  echo index.html bulunamadi. server.js ile ayni klasorde olmali.
  pause
  exit /b 1
)

rem --- Dogal ses (Microsoft Emel Neural) icin Python + edge-tts kontrolu ---
set PYCMD=
where python >nul 2>nul && set PYCMD=python
if "%PYCMD%"=="" where py >nul 2>nul && set PYCMD=py
if "%PYCMD%"=="" (
  echo [Bilgi] Python bulunamadi: dogal ses kapali, tarayici sesi kullanilacak.
  echo         Emel sesi icin https://www.python.org adresinden Python kurun.
) else (
  %PYCMD% -c "import edge_tts" >nul 2>nul
  if errorlevel 1 (
    echo edge-tts kuruluyor, lutfen bekleyin...
    %PYCMD% -m pip install --quiet --disable-pip-version-check edge-tts
  )
)
where ffmpeg >nul 2>nul
if errorlevel 1 echo [Bilgi] ffmpeg yok: ses calisir ama nefes ve duraklama eklenmez. Onerilen: winget install ffmpeg

start "" cmd /c "ping -n 3 127.0.0.1 >nul & start http://localhost:3000"
node server.js
pause