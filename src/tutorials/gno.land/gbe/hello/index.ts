const markdownContent: string = 
`

This is the simplest application that you can create using Gno. \`Render(string) string\` is a special method that will be
used by \`gnoweb\` to render markdown output.

\`\`\`go
package hello

func Render(path string) string {
	return "Hello World!"
}
\`\`\`

We can test the \`Render\` method:

\`\`\`go
package hello

import "testing"

func TestHello(t *testing.T) {
	got := Render("")
	expected := "Hello World!"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}
\`\`\`
`;

  const title: string = "Hello World";

  const section: string = "Section 1";

  const tutorialData = {
    content: markdownContent,
    metadata: {
      title,
      section,
    },
  };

export default tutorialData;
