gnobin := go run github.com/gnolang/gno/gnovm/cmd/gno

all: generate build

test:
	$(gnobin) test -v ./src/tutorials/...

dev build generate: node_modules
	yarn run $@

node_modules: package.json yarn.lock
	yarn

.PHONY: dev build generate test all
