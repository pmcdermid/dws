SHELL := /bin/bash

build:
	@interleave src --package
	
	@bake pkg/oldschool/dws.js --output test/browser

test:
	@mocha --reporter spec

.PHONY: test