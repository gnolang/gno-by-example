package variables

import "testing"

func Test(t *testing.T) {
	got := Render("user1")
	expected := "Hello user1!. Call number 1"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}

	got = Render("user2")
	expected = "Hello user2!. Call number 2"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}