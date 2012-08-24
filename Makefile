SHELL := /bin/bash

build:
	@interleave build src/*.js --wrap

test:
	@mocha --reporter spec --timeout 15000

.PHONY: test