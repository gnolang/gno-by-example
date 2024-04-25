package constants

const s = "constant string"

func Render(name string) string {
	// we cannot change the assignment on a constant,
	// so this line will fail when compiling
	// s = "other value"

	return s
}
