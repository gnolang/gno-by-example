package variables

import "fmt"

// this variable will keep the state between realm calls
var count int

func Render(name string) string {
	// adding one to the global variable to keep track of Render calls
	count++

	// this variable is created at function scope, so it won't be persisted on the realm state.
	hi := fmt.Sprintf("Hello %s!", name)
	
	return fmt.Sprintf("%s. Call number %d", hi, count)
}