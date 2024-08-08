#!/bin/bash

# Ensure the script receives exactly 2 arguments
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 input_filename output_filename"
  exit 1
fi

# Compile Sass to CSS
sass --style expanded "../project/sass/$1" > "../project/css/$2"
