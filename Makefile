#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/tape test/*

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "initial commit"
	@hub create micro-js/scroll-to -d "Imperatively smooth scroll to the given y-coordinates"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
