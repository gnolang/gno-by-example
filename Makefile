EXAMPLES_DIR = src/tutorials/*/*/*

all: clean clone bin test

clone:
	cd gnobuild && git clone https://github.com/gnolang/gno.git
bin:
	cd gnobuild/gno/gnovm && make build

test: $(EXAMPLES_DIR)
	@echo "++++ Executing tests for $^"
	./gnobuild/gno/gnovm/build/gno test --verbose --root-dir ./gnobuild/gno ./$^

clean:
	rm -rf gnobuild
	mkdir gnobuild
