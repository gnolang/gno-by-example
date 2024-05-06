package panic

var count int

func Increment(shouldRevert bool) {
	count++

	if shouldRevert {
		count++
		panic("i was instructed to revert!")
	}
}
