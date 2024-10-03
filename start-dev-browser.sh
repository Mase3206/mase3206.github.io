#!/bin/sh

# create temp folder
temp=$(mktemp -d)

echo "starting chrome"
# run chromium with web security disabled
/Applications/Chromium.app/Contents/MacOS/Chromium --disable-web-security --user-data-dir="$temp" > /dev/null 2>&1
echo "stopping chrome"

# remove temp folder when the above finishes
rm -r $temp