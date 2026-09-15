#!/bin/sh
set -eu

# Revive contract: if the preview is already up, do nothing.
if curl -sf -o /dev/null http://127.0.0.1:8080/; then
  exit 0
fi

cd /workspace
npm run dev >/tmp/skyryse-bms-dev.log 2>&1 &
exit 0
