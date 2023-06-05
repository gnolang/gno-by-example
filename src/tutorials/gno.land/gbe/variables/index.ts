const markdownContent: string = 
`

TBD

\`\`\`go
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
\`\`\`

Tests:

\`\`\`go
package variables

import "testing"

func TestVariables(t *testing.T) {
	got := Render("user1")
	expected := "Hello user1!. Call number 1"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}

	got = Render("user2")
	expected = "Hello user2!. Call number 2"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}
\`\`\`
`;

  const title: string = "Variables";

  const section: string = "Section 1";

  const tutorialData = {
    content: markdownContent,
    metadata: {
      title,
      section,
    },
  };

export default tutorialData;
