package coin

import "gno.land/p/demo/ufmt"

func Coin() {
	// We can make a new coin instance, 1000000 coins of denomination ugnot, equal to 1 GNOT
	var coinA std.Coin = std.Coin{1000000, "ugnot"}

	// You can get a string representaton of a coin with the `String()` method
	stringedCoin := coinA.String()

	// We can make another instance of ugnot coins, but with a different amount
	var coinB std.Coin = std.Coin{100, "ugnot"}

	// We can perform simple checks on coin instances to compare them
	if coinA.IsGTE(coinB) {
		ufmt.Sprintf("Coin A amount (%d) is greater than or equal than Coin B amount (%d)!", coinA.Amount, coinB.Amount)
	}
}
