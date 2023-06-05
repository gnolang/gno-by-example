const markdownContent: string = `

TBD

\`\`\`go
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

\`\`\`

Tests:

\`\`\`go
package conditions

import "testing"

func TestConditions(t *testing.T) {
	gotIf := RenderIf("v1")
	gotSwitch := RenderSwitch("v1")
	expected := "value one"
	if gotSwitch != expected  {
		t.Fatalf("expected %q, got %q.", expected, gotSwitch)
	}
	
	if gotIf != expected  {
		t.Fatalf("expected %q, got %q.", expected, gotIf)
	}

	gotIf = RenderIf("v3")
	gotSwitch = RenderSwitch("v3")
	expected = "other value"
	if gotSwitch != expected  {
		t.Fatalf("expected %q, got %q.", expected, gotSwitch)
	}
	
	if gotIf != expected  {
		t.Fatalf("expected %q, got %q.", expected, gotIf)
	}
}
\`\`\`
`;

const title: string = "Conditions";

const section: string = "Section 1";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
