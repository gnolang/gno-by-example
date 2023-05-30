package count

import "testing"

func Test(t *testing.T) {
	Add()
	Add()
	Add()
	Remove()
	got := Render("")
	expected := "Count: 2"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}