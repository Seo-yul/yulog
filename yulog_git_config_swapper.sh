#!/bin/bash

current_repo="$(git config -l | grep remote.origin.url= | cut -f 2 -d "=")"
dev_repo=https://github.com/resourceSaga/yulog.git
dep_repo=https://github.com/resourceSaga/ResourceSaga.github.io.git

current_mode="${YULOG_MODE}"

input_keyboard=""

case "$1" in
    "dev")
        echo "excute develop mode"

        git remote set-url origin $dev_repo
        echo "current repo is $(git config -l | grep remote.origin.url=)"
        sed -i 's/YULOG_MODE=dep/YULOG_MODE=dev/g' ~/.bash_profile
        ;;

    "dep")
        echo "excute deploy mode"

        git remote set-url origin $dep_repo
        echo "current repo is $(git config -l | grep remote.origin.url=)"
        sed -i 's/YULOG_MODE=dev/YULOG_MODE=dep/g' ~/.bash_profile
        npm run deploy
        echo "npm run deploy end"
        ;;

    *)
        echo "yulog init start!"
        function init_yulog()
        {
            echo "export YULOG_MODE=dev" >> ~/.bash_profile
            source ~/.bash_profile
            current_mode="${YULOG_MODE}"
            echo "env init YULOG_MODE='${current_mode}'"
        }

        # -z option: current_mode == 0 is true
        if [ -z $current_mode ]; then
            echo "YULOG_MODE is not exist"
            init_yulog

        elif [ $current_mode != "dev" ] && [ $current_mode != "dep" ]; then
            echo "YULOG_MODE is using other process.."
            read -p "keep going on? [y/n] > " input_keyboard

            if [ "$input_keyboard" == "y" ]; then
                sed -i '/YULOG_MODE/d' ~/.bash_profile
                init_yulog
            fi

        else
            echo "YULOG_MODE is exist already"
            echo "YULOG_MODE=$current_mode"
        fi
        ;;
esac




