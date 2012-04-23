SHELL := /bin/bash

build:
	@interleave src --package
	
	@bake pkg/oldschool/dws.js --output test/browser

test:
	@mocha --reporter spec --timeout 15000

.PHONY: test