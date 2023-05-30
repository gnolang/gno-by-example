package hello

import "fmt"

var i int
var i16 int16
var s string
var ss []string

// TODO: not yet implemented: https://github.com/gnolang/gno/pull/764
// var bi bigint

// TODO: map state is not persisted between calls yet: https://github.com/gnolang/gno/issues/817
// var map map[string]bool


func Render(path string) string {
	return fmt.Sprintf("%d, %d, %q, %v", i, i16, s, ss)
}

func SetValues() {
	i = 42
	i16 = 4216
	s = "string"
	ss = append(ss, "one")
	ss = append(ss, "two")
	ss = append(ss, "three")
}