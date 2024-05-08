package banker

import (
	"std"
)

// ReadBalances returns the coin balances of a specific address
func ReadBalances(owner std.Address) string {
	// Initialize the banker with read-only access
	banker := std.GetBanker(std.BankerTypeReadonly)
	coins := banker.GetCoins(owner)
	return coins.String()
}

// ForwardGNOT takes any ugnot sent to it and forwards it to `to`
func ForwardGNOT(to std.Address) {
	// Initialize the banker with sending permission for coins sent with the transaction
	banker := std.GetBanker(std.BankerTypeOrigSend)
	// Get coins sent with the transaction
	coinsSent := std.GetOrigSend()
	// Get the amount of ugnot owned by the realm
	gnotsSent := coinsSent.AmountOf("ugnot")
	// Send all coins to `to`
	banker.SendCoins(to, std.Coin{"ugnot", gnotsSent})
}

// SendGNOTFromRealmBalance sends any GNOT in the realm balance to `to`
func SendGNOTFromRealmBalance(to std.Address) {
	// Initialize the banker with permission for all coins
	banker := std.GetBanker(std.BankerTypeRealmSend)
	// Get all coins owned by this realm
	currentRealmCoins := banker.GetCoins(std.CurrentRealm().Addr())
	// Get the amount of ugnot owned by the realm
	currentRealmGnots := currentRealmCoins.AmountOf("ugnot")
	// Send all coins to `to`
	banker.SendCoins(to, std.Coin{"ugnot", currentRealmGnots})
}
