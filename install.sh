#!/usr/bin/env bash
SCRIPTPATH=`readlink -f $0`;
SCRIPTNAME=$(basename $SCRIPTPATH)
ROOT_DIR="$(dirname $SCRIPTPATH)"

function usage
{
    printf "Install assets link for development"
}

function install
{
    PWD=$(pwd)
    cd $ROOT_DIR
    if [ ! -f public/javascript/src ] ; then
        echo "symlink src to public"
        ln -s ../../src public/javascript/src
    fi
    cd $PWD
}

SHORT_OPT="i"
LONG_OPT="install,help"

# parse arguments
OPTS=$( getopt -o "$SHORT_OPT" -l "$LONG_OPT" -- "$@" )
if  [ $? != 0 ]; then
    usage;
    exit 1;
fi
eval set -- "$OPTS"

while true ; do
    case "$1" in
        -i|--install) shift
            INSTALL=1;;
        -h|--help) usage
            exit 0;;
        --) install
            break;;
    esac
done

if [ -n "$INSTALL" ]
then
    install
fi
