package coins

func Coins() {
	// We can make a new coin instance, 1000000 coins of denomination ugnot, equal to 1 GNOT
	var coinA std.Coin = std.Coin{1000000, "ugnot"}

	// Make a different coin instance, of 1000 coins of denomination gbe
	var coinB std.Coin = std.Coin{1000, "gbe"}
}


// Make a set of coins
var coinSet std.Coins = std.Coins{lxyCoin}

// Check amount of specific coin in set
coinSet.AmountOf("lxy") // 100

// AmountOf will return 0 if coin does not exist in set
coinSet.AmountOf("somecoin") // 0

// Add a coin to a set
coinSet.Add(lyx)

// View full coins API on
// https://docs.gno.land/reference/standard-library/std/coin &
// https://docs.gno.land/reference/standard-library/std/coins