package hello

import "testing"

func Test(t *testing.T) {
	got := Render("")
	expected := "false, \"\" | 0, 0, 0, 0, 0 | 0, 0, 0, 0, 0 | 0, 0 | 0.000000, 0.000000"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}

	SetValues()
	got = Render("")
	expected = "true, \"a string\" | -42, -8, -4216, -4232, -4264 | 42, 8, 4216, 4232, 4264 | 65, 65 | 42.320000, 42.640000"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}
