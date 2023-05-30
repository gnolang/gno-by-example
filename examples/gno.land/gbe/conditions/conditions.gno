package conditions

import "fmt"

func RenderIf(v string) string {
	if v == "v1" {
		return "value one"
	} else if v == "v2" {
		return "value two"
	} else {
		return "other value"
	}
}

func RenderSwitch(v string) string {
	switch v {
		case "v1":
			return "value one"
		case "v2":
			return "value two"
		default:
			return "other value"
	}
}