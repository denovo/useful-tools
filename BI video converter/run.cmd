for %%f in (assets\mp4\*.mp4) do (
  lib\ffmpeg-20160310-git-66edd86-win64-shared\bin\ffmpeg -i %%f -c:v libvpx -crf 4 -cpu-used 16 -minrate 0.5M -b:v 1.5M -c:a libvorbis assets\webm\%%~nf.webm
)

PAUSE