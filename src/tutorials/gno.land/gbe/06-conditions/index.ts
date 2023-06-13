const markdownContent: string = `

As in Go, we have two ways to check for specific conditions, using \`if\` statements and \`switch\`es:

\`\`\`go
func RenderIf(v string) string {
	if v == "v1" {
		return "value one"
	} else if v == "v2" {
		return "value two"
	} else {
		return "other value"
	}
}
\`\`\`

\`\`\`go
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
\`\`\`
Check out the full example [here](https://github.com/gnolang/gno-by-example/tree/main/src/tutorials/gno.land/gbe/06-conditions).`;

const title: string = "Conditions";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
