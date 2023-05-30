package hello

import "testing"

func Test(t *testing.T) {
	got := Render("")
	expected := "0, 0, \"\", []"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}

	SetValues()
	got = Render("")
	expected = "42, 4216, \"string\", [one two three]"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}