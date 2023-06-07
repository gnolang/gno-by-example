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

func RenderSwitch(v string) (out string) {
	switch v {
	case "v1":
		out = "value one"
		break
	case "v2":
		out = "value two"
		break
	default:
		out = "other value"
		break
	}

	return
}
