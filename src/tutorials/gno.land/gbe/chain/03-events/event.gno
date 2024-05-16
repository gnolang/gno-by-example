package event

import (
	"std"
	"strconv"
)

var count int

func Emitter(value2 string) {
	count += 1
	// Here we define a unique identifier for our event
	event := "GBE-chain-02-events"

	// `Emit` takes in a string name, and an even number of key:value string pairs as arguments to emit
	std.Emit(event, "timesCalled", strconv.Itoa(count), "userArgument", value2)
}
