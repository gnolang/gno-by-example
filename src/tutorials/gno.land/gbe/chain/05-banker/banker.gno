package event

import (
	"std"
)

func ReadBalances(owner std.Address) string {
	banker := std.GetBanker(std.BankerTypeReadonly)
	coins := banker.GetCoins(owner)
	return coins.String()
}

func SendCoinsFromRealm(to std.Address) {
	banker := std.GetBanker(std.BankerTypeOrigSend)
	return coins.String()
}
