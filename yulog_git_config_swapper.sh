#!/bin/bash

current_repo="$(git config -l | grep remote.origin.url= | cut -f 2 -d "=")"
dev_repo=https://github.com/resourceSaga/yulog.git
dep_repo=https://github.com/resourceSaga/ResourceSaga.github.io.git

current_mode="${YULOG_MODE}"

input_keyboard=""

case "$1" in
    "dev")
        echo "excute develop mode"

        if [ ! -d .git-develop ]; then
            mkdir .git-develop
        fi

        if [ $current_repo == $dep_repo ]; then
            mv .git .git-deploy/.
            echo ".git is moved in .git-deploy"
            mv .git-develop/.git .
        fi
            echo "current repo is $(git config -l | grep remote.origin.url=)"
        ;;

    "dep")
        echo "excute deploy mode"
        if [ ! -d .git-deploy  ]; then
            mkdir .git-deploy
        fi

        if [ $current_repo == $dev_repo ]; then
            mv .git .git-develop/.
            echo ".git is moved in .git-develop"
            mv .git-deploy/.git .
        fi
            echo "current repo is $(git config -l | grep remote.origin.url=)"
        ;;

    *)
        echo "yulog init start!"
        function init_yulog()
        {
            echo "export YULOG_MODE=dev" >> ~/.bash_profile
            source ~/.bash_profile
            echo "env init YULOG_MODE='${current_mode}'"
        }

        # -z option: current_mode == 0 is true
        if [ -z $current_mode ]; then
            echo "YULOG_MODE is not exist"
            init_yulog

        elif [ $current_mode != "dev" ] && [ $current_mode != "dep" ]; then
            echo "YULOG_MODE is using other process.."
            read -p "keep going on? [y/n] > " input_keyboard

            if [ $input_keyboard == y ]; then
                sed -i '/YULOG_MODE/d' ~/.bash_profile
                init_yulog
            fi

        else
            echo "YULOG_MODE is exist already"
            echo "YULOG_MODE=$current_mode"
        fi
        ;;
esac




