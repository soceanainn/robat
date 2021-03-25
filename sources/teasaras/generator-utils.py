#!/usr/bin/env python3

from lxml import etree
import json
import csv
from collections import OrderedDict

import sys

if len(sys.argv) !=2:
    print('Please call from lsg-generator.sh, do not call directly')
    sys.exit(1)

class SetEncoder(json.JSONEncoder):
        def default(self, obj):
            return list(obj)

tree = etree.parse("/tmp/lsg-lmf.xml")

root = tree.getroot()[0]

sense_sets = {}
words = {}
output = OrderedDict()
for entry in root:
    if entry.tag == 'LexicalEntry':
        key = ""
        type = ""
        senses = set()
        for field in entry:
            if field.tag == 'Lemma':
                key = field.attrib['writtenForm']
                type = field.attrib['partOfSpeech']
            else:
                senses.add(field.attrib['synset'])
        for s in senses:
            words[key]= words.get(key, []) + [{'nodeType': type, 'synset': {'id': s}}]
            sense_sets[s] = sense_sets.get(s, set()) | {key}

for word in words.copy():
    for sense in range(len(words[word])):
        words[word][sense]['synset']['similar'] = words[word][sense]['synset'].get('similar', set()) | sense_sets.get(words[word][sense]['synset']['id'], set())
        words[word][sense]['synset']['similar'].remove(word)
        if len(words[word][sense]['synset']['similar']) == 0:
            words[word][sense] = None
    words[word] = list(filter(lambda x: x != None, words[word]))
    if len(words[word]) == 0:
        del words[word]

print("WORDS: " + str(len(words)))

words_with_similar = dict(map(lambda x: (x, list(map(lambda y: y['synset']['similar'], words[x]))), words))
with open(sys.argv[1] + '/db.json', 'w+') as fd:
    fd.write(json.dumps(words_with_similar, indent=4, ensure_ascii=False, cls=SetEncoder))
