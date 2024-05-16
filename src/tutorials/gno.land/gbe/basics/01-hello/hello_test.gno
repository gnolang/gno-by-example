package hello

import "testing"

func TestHello(t *testing.T) {
	got := Render("")
	expected := "Hello World!"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}