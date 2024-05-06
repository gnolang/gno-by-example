package event

import (
	"std"
	"testing"
)

func TesteadBalances(t *testing.T) {
	owner := std.Address("g1jg8mtutu9khhfwc4nxmuhcpftf0pajdhfvsqf5")
	println(ReadBalances(owner))
}
