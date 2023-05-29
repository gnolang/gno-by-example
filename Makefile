EXAMPLES_DIR = examples/*/*/*

all: clean clone bin test

clone:
	cd build && git clone https://github.com/gnolang/gno.git
bin:
	cd build/gno/gnovm && make build

test: EXAMPLES_DIR
	@echo "++++ Executing tests for $^"
	./build/gno/gnovm/build/gno test --verbose --root-dir ./build/gno ./$^

clean:
	rm -rf build
	mkdir build