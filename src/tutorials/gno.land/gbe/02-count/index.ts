const markdownContent: string = `

Let's create our first application. This realm is able to add and substract from a global count variable using \`Add()\`
and \`Remove()\` methods. The state will be saved between executions.

<!--TODO: add an example about how to deploy this realm and how to call to Add() and Remove() using the command line -->

\`\`\`go
package count

import "fmt"

var count int

func Render(path string) string {
	return fmt.Sprintf("Count: %d", count)
}

func Add() {
	count++
}

func Remove() {
	count--
}
\`\`\`

Tests:

\`\`\`go
package count

import "testing"

func TestCount(t *testing.T) {
	Add()
	Add()
	Add()
	Remove()
	got := Render("")
	expected := "Count: 2"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}
\`\`\`
`;

const title: string = "First App";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
