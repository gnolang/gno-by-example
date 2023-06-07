package loops

import (
	"fmt"
)

func Render(path string) string {
	if path == "while" {
		return whileLoop()
	}

	if path == "for" {
		return forLoop()
	}

	return "NOOP"
}

const totalLoops = 10

func forLoop() string {
	var out string
	for i := 0; i < totalLoops; i++ {
		out = out + fmt.Sprintf("%d", i)
	}

	return out
}

func whileLoop() string {
	var loops int
	var out string
	for {
		if loops == totalLoops {
			break
		}

		out = out + "A"

		// you have to be sure to reach the break condition,
		// if not you will exaust all the available gas for this execution
		loops++
	}

	return out
}
