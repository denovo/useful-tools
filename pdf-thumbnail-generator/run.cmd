#!/bin/sh

for file in assets\pdfs\*.pdf;
do convert -thumbnail 1280x1280 $file -flatten assets\jpgs\${file%.*}.jpg;
done
