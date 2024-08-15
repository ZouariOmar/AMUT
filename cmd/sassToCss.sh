#!/bin/bash

# Ensure the script receives exactly 1 arguments
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 input_filename output_filename"
  exit 1
fi

#* Compile sass to css in watch mode
sass --watch ../project/sass/$1.sass:../project/css/$1.css

# Compile Sass to CSS
#sass --style expanded "../project/sass/$1" > "../project/css/$2"
