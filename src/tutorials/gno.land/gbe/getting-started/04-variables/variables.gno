package variables

import (
	"gno.land/p/demo/ufmt"
)

// This variable will keep the state between realm calls
var count int

func Render(name string) string {
	// Adding one to the global variable to keep track of Render calls
	count++

	// This variable is created at function scope, so it won't be persisted on the realm state.
	hi := ufmt.Sprintf("Hello %s!", name)

	return ufmt.Sprintf("%s. Call number %d", hi, count)
}
