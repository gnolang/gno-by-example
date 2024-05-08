package imports

import (
	"std"
	"testing"
)

func TestStrconv(t *testing.T) {
	println(StrConv(100))
}

func TestBuffer(t *testing.T) {
	println(Bytes())
}

func TestUfmt(t *testing.T) {
	println(Formatter(123))
}

func TestCheckRegistration(t *testing.T) {
	println(CheckRegistration(std.Address("g1us8428u2a5satrlxzagqqa5m6vmuze025anjlj")))
}
