#!/bin/bash -eux

WORDNET_VERSION="1.1"
curl -fsSL "https://github.com/kscanne/wordnet-gaeilge/releases/download/v${WORDNET_VERSION}/lsg-lmf.zip" \
    -o "/tmp/lsg-lmf.zip" && \
    unzip /tmp/lsg-lmf.zip -d /tmp -o

"$(dirname $0)/generator-utils.py" $(dirname $0)
