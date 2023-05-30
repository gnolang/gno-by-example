package constants

import "testing"

func Test(t *testing.T) {
	got := Render("")
	expected := "constant string"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}