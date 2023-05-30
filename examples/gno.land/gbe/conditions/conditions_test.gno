package conditions

import "testing"

func Test(t *testing.T) {
	gotIf := RenderIf("v1")
	gotSwitch := RenderSwitch("v1")
	expected := "value one"
	if gotSwitch != expected  {
		t.Fatalf("expected %q, got %q.", expected, gotSwitch)
	}
	
	if gotIf != expected  {
		t.Fatalf("expected %q, got %q.", expected, gotIf)
	}

	gotIf = RenderIf("v3")
	gotSwitch = RenderSwitch("v3")
	expected = "other value"
	if gotSwitch != expected  {
		t.Fatalf("expected %q, got %q.", expected, gotSwitch)
	}
	
	if gotIf != expected  {
		t.Fatalf("expected %q, got %q.", expected, gotIf)
	}
}