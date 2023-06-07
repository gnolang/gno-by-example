const markdownContent: string = `

Global variables will keep the state between executions, but that is not the case for variables outside the global context, like inside functions:

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
`;

const title: string = "Variables";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
