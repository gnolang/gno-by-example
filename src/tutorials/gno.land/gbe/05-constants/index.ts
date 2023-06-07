const markdownContent: string = `

Constants works as they do in standard Go:

\`\`\`go
package constants

import "fmt"

const s = "constant string"

func Render(name string) string {
	// we cannot change the assignment on a constant, 
	// so this line will fail when compiling
	// s = "other value"

	return s
}
\`\`\`
`;

const title: string = "Constants";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
