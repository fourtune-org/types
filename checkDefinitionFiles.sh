#!/bin/bash -eufx

function tsc() {
	./node_modules/.bin/tsc \
	                         --noEmit \
	                         --module nodenext \
	                         --moduleResolution nodenext \
	                         "$1"
}

tsc "./src/base-realm/v0/index.d.mts"
tsc "./src/base-realm-js-and-web/v0/index.d.mts"
tsc "./src/realm-js-and-web/runtime/v0/index.d.mts"
tsc "./src/realm-js-and-web/project/v0/index.d.mts"
tsc "./src/realm-js-and-web/resources/v0/index.d.mts"
