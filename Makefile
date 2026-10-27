EXAMPLES_DIR = src/tutorials/*/*/*
# Pinned: newer gno requires gnowork.toml/gnomod.toml (gnolang/gno#4384) and drops the std package.
GNO_REF ?= 9e768b5d74acf22b87505915227f8af6121834df

all: clean clone bin test

clone:
	cd gnobuild && git clone https://github.com/gnolang/gno.git && git -C gno checkout -q $(GNO_REF)
bin:
	cd gnobuild/gno/gnovm && make build

test: $(EXAMPLES_DIR)
	@echo "++++ Executing tests for $^"
	./gnobuild/gno/gnovm/build/gno test -v --root-dir ./gnobuild/gno ./$^

clean:
	rm -rf gnobuild
	mkdir gnobuild
