const markdownContent: string = `

Loops works as in standard Go, but you have to be careful to always check for the right condition to break it, if not your application will consume all the available Gas.

\`\`\`go
const totalLoops = 10

func forLoop() string {
	var out string
	for i := 0; i < totalLoops; i++ {
		out = out + fmt.Sprintf("%d", i)
	}

	return out
}

func whileLoop() string {
	var loops int
	var out string
	for {
		if loops == totalLoops {
			break
		}

		out = out + "A"

		// you have to be sure to reach the break condition,
		// if not you will exaust all the available gas for this execution
		loops++
	}

	return out
}
\`\`\`
`;

const title: string = "Loops";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
