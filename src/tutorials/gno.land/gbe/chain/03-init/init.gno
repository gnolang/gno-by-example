package event

import (
	"std"
)

var admin std.Address

func init() {
	admin = std.PrevRealm().Addr()
}

func GetAdmin() string {
	return admin.String()
}
