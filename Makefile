SHELL=/bin/bash

PROJECT_NAME=ClutchApp
WORKSPACE=$(shell pwd)

.PHONY: build

init:
	@npm install -g expo-cli
	@npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
	@npm install --save-dev react-docgen-typescript