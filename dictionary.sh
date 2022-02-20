#!/bin/bash


# this subshell is a scope of try
# try
(
  # this flag will make to exit from current subshell on any error
  # inside it (all functions run inside will also break on any error)
  set -e

    echo "start dictionary app server"
    echo $(date) # Will print the output of date command

    cd ~/dev/rapidapi-dictionary-app-example/
    npm run start
  # do more stuff here
)
# and here we catch errors
# catch
errorCode=$?
if [ $errorCode -ne 0 ]; then
  echo "Could not start dictionary server."
  notify-send "Could not start dictionary server."

  # We exit the all script with the same error, if you don't want to
  # exit it and continue, just delete this line.
  exit $errorCode
fi
