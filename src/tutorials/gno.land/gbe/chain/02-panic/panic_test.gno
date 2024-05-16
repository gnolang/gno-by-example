package panic

import "testing"

func TestIncrement(t *testing.T) {
	println(count)
	Increment(true)
}

func TestIncrement2(t *testing.T) {
	println(count)
}
