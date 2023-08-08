package hello

import "testing"

func TestHello(t *testing.T) {
	got := Render("")
	expected := "Hello World! And hello, **bold!**"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}
