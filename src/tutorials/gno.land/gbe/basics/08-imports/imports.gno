package imports

import (
	"bytes"
	"std"
	"strconv"

	"gno.land/p/demo/ufmt"
	"gno.land/r/demo/users"
)

func StrConv(input int) string {
	return strconv.Itoa(input)
}

func Bytes() string {
	var b bytes.Buffer

	b.WriteString("This is one line in the buffer\n")
	b.WriteString("This is a second line in the buffer")

	return b.String()
}

func Formatter(input int) string {
	// Package ufmt provides utility functions for formatting strings, similarly
	// to the Go package "fmt", of which only a subset is currently supported
	// (hence the name µfmt - micro fmt).
	return ufmt.Sprintf("The user has inputted %d!", input)
}

func CheckRegistration(address std.Address) string {
	user := users.GetUserByAddress(address)
	if user == nil {
		return ufmt.Sprintf("Specified address is not registered!")
	}

	return ufmt.Sprintf("Address %s matches %s username!", address.String(), user.Name)
}
