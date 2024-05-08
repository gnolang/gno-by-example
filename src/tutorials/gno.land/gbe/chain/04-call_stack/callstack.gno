package event

import (
	"std"
)

func Callers() {
	// The main way to get the transaction caller
	immediateCaller := std.PrevRealm().Addr()

	// When there are multiple connected calls, such as
	// User > realm A > realm B
	// You can get the origin caller using std.GetOrigCaller()
	originCaller := std.GetOrigCaller()
}
