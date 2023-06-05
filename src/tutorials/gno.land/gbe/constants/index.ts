const markdownContent: string = 
`

TBD

\`\`\`go
package constants

import "fmt"

const s = "constant string"

func Render(name string) string {
	// we cannot change the assignment on a constant, so this line will fail when compiling
	// s = "other valie"

	return s
}
\`\`\`

Test:

\`\`\`go
package constants

import "testing"

func TestConstants(t *testing.T) {
	got := Render("")
	expected := "constant string"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}
\`\`\`
`;

  const title: string = "Constants";

  const section: string = "Section 1";

  const tutorialData = {
    content: markdownContent,
    metadata: {
      title,
      section,
    },
  };

export default tutorialData;
