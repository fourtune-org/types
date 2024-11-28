#!/bin/bash -eufx

function tsc() {
	./node_modules/.bin/tsc \
	                         --noEmit \
	                         --module nodenext \
	                         --moduleResolution nodenext \
	                         "$1"
}

tsc "./src/core/v1/index.d.mts"
tsc "./src/fourtune/v0/index.d.mts"
tsc "./src/base-realm-js-and-web/v0/index.d.mts"
tsc "./src/realm-js-and-web/v0/runtime/index.d.mts"
tsc "./src/realm-js-and-web/v0/project/index.d.mts"
tsc "./src/realm-js-and-web/v0/assets/index.d.mts"
tsc "./src/realm-js-and-web/_versionless/runtime/index.d.mts"
tsc "./src/realm-js-and-web/autogenerate/index.d.mts"
