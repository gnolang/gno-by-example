package count

import "testing"

func TestCount(t *testing.T) {
	Add()
	Add()
	Add()
	Subtract()
	got := Render("")
	expected := "Count: 2"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}
