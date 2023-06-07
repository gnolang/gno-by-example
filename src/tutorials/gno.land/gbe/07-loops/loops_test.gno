package loops

import "testing"

func TestLoops(t *testing.T) {
	got := Render("while")
	expected := "AAAAAAAAAA"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}

	got = Render("for")
	expected = "0123456789"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}
