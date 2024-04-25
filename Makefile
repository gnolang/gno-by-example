gnobin := go run github.com/gnolang/gno/gnovm/cmd/gno

all: test

test:
	$(gnobin) test -v ./src/tutorials/...

dev build generate: node_modules
	yarn run $@

node_modules: package.json yarn.lock
	yarn

