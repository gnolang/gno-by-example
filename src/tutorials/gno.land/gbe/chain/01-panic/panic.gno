package panic

var count int

func Increment(shouldRevert bool) {
	if shouldRevert {
		count++
		panic("i was instructed to revert!")
	}

	count++
}
