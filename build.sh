#!/bin/bash
echo "Packaging extension as ut-build-`date +%F`.zip"
zip ut-build-`date +%F`.zip jquery_1_8.js manifest.json README.md urbantamil-button-128.png urbantamil.js

