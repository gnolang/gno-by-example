const markdownContent: string = `

Example using primitives.
Take into account that special types that are not in Go language will be implemented for easy of usage, like bigint.

<Playground open="src/tutorials/gno.land/gbe/03-primitives/primitives.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F03-primitives%2Fprimitives.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22fmt%5C%22%5Cn%5Ct%5C%22strings%5C%22%5Cn)%5Cn%5Cnvar%20b%20bool%5Cn%5Cnvar%20s%20string%5Cn%5Cnvar%20(%5Cn%5Cti%20%20%20int%5Cn%5Cti8%20%20int8%5Cn%5Cti16%20int16%5Cn%5Cti32%20int32%5Cn%5Cti64%20int64%5Cn)%5Cn%5Cnvar%20(%5Cn%5Ctui%20%20%20uint%5Cn%5Ctui8%20%20uint8%5Cn%5Ctui16%20uint16%5Cn%5Ctui32%20uint32%5Cn%5Ctui64%20uint64%5Cn%5Ct%2F%2F%20up%20%20%20uintptr%20%2F%2F%20TODO%20not%20supported%5Cn)%5Cn%5Cnvar%20(%5Cn%5Ctby%20byte%20%2F%2F%20alias%20for%20uint8%5Cn%5Ctr%20%20rune%20%2F%2F%20alias%20for%20int32.%20Represents%20a%20Unicode%20code%20point.%5Cn)%5Cn%5Cnvar%20(%5Cn%5Ctf32%20float32%5Cn%5Ctf64%20float64%5Cn)%5Cn%5Cn%2F%2F%20TODO%20not%20supported%5Cn%2F%2F%20var%20(%5Cn%2F%2F%20%5Ctc64%20%20complex64%5Cn%2F%2F%20%5Ctc128%20complex128%5Cn%2F%2F%20)%5Cn%5Cn%2F%2F%20TODO%3A%20not%20yet%20implemented%3A%20https%3A%2F%2Fgithub.com%2Fgnolang%2Fgno%2Fpull%2F764%5Cn%2F%2F%20var%20bi%20bigint%5Cn%5Cnfunc%20Render(path%20string)%20string%20%7B%5Cn%5Cn%5Ctout%20%3A%3D%20%5B%5Dstring%7B%5Cn%5Ct%5Ct%2F%2F%20bool%20and%20string%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25v%2C%20%25q%5C%22%2C%20b%2C%20s)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20int%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25d%2C%20%25d%2C%20%25d%2C%20%25d%2C%20%25d%5C%22%2C%20i%2C%20i8%2C%20i16%2C%20i32%2C%20i64)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20uint%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25d%2C%20%25d%2C%20%25d%2C%20%25d%2C%20%25d%5C%22%2C%20ui%2C%20ui8%2C%20ui16%2C%20ui32%2C%20ui64%20%2F*%2C%20up%20*%2F)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20bytes%20and%20runes%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25v%2C%20%25v%5C%22%2C%20by%2C%20r)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20float%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25f%2C%20%25f%5C%22%2C%20f32%2C%20f64)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20complex%5Cn%5Ct%5Ct%2F%2F%20fmt.Sprintf(%5C%22%25f%2C%20%25f%5C%22%2C%20c64%2C%20c128)%2C%5Cn%5Ct%7D%5Cn%5Cn%5Ctreturn%20strings.Join(out%5B%3A%5D%2C%20%5C%22%20%7C%20%5C%22)%5Cn%7D%5Cn%5Cnfunc%20SetValues()%20%7B%5Cn%5Ctb%20%3D%20true%5Cn%5Cn%5Cts%20%3D%20%5C%22a%20string%5C%22%5Cn%5Cn%5Cti%20%3D%20-42%5Cn%5Cti8%20%3D%20-8%5Cn%5Cti16%20%3D%20-4216%5Cn%5Cti32%20%3D%20-4232%5Cn%5Cti64%20%3D%20-4264%5Cn%5Cn%5Ctui%20%3D%2042%5Cn%5Ctui8%20%3D%208%5Cn%5Ctui16%20%3D%204216%5Cn%5Ctui32%20%3D%204232%5Cn%5Ctui64%20%3D%204264%5Cn%5Ct%2F%2F%20up%20%3D%2042%5Cn%5Cn%5Ctby%20%3D%20byte('A')%5Cn%5Ctr%20%3D%20rune('A')%5Cn%5Cn%5Ctf32%20%3D%2042.32%5Cn%5Ctf64%20%3D%2042.64%5Cn%5Cn%5Ct%2F%2F%20c64%20%3D%2042%20%2B%2064i%5Cn%5Ct%2F%2F%20c128%20%3D%2042%20%2B%20128i%5Cn%7D%5Cn%22%7D%5D">

We can test these primitives:

<Playground open="src/tutorials/gno.land/gbe/03-primitives/primitives_test.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F03-primitives%2Fprimitives_test.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnimport%20%5C%22testing%5C%22%5Cn%5Cnfunc%20TestPrimitives(t%20*testing.T)%20%7B%5Cn%5Ctgot%20%3A%3D%20Render(%5C%22%5C%22)%5Cn%5Ctexpected%20%3A%3D%20%5C%22false%2C%20%5C%5C%5C%22%5C%5C%5C%22%20%7C%200%2C%200%2C%200%2C%200%2C%200%20%7C%200%2C%200%2C%200%2C%200%2C%200%20%7C%200%2C%200%20%7C%200.000000%2C%200.000000%5C%22%5Cn%5Ctif%20got%20!%3D%20expected%20%7B%5Cn%5Ct%5Ctt.Fatalf(%5C%22expected%20%25q%2C%20got%20%25q.%5C%22%2C%20expected%2C%20got)%5Cn%5Ct%7D%5Cn%5Cn%5CtSetValues()%5Cn%5Ctgot%20%3D%20Render(%5C%22%5C%22)%5Cn%5Ctexpected%20%3D%20%5C%22true%2C%20%5C%5C%5C%22a%20string%5C%5C%5C%22%20%7C%20-42%2C%20-8%2C%20-4216%2C%20-4232%2C%20-4264%20%7C%2042%2C%208%2C%204216%2C%204232%2C%204264%20%7C%2065%2C%2065%20%7C%2042.320000%2C%2042.640000%5C%22%5Cn%5Ctif%20got%20!%3D%20expected%20%7B%5Cn%5Ct%5Ctt.Fatalf(%5C%22expected%20%25q%2C%20got%20%25q.%5C%22%2C%20expected%2C%20got)%5Cn%5Ct%7D%5Cn%7D%5Cn%22%7D%2C%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2F03-primitives%2Fprimitives.gno%22%2C%22content%22%3A%22package%20hello%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22fmt%5C%22%5Cn%5Ct%5C%22strings%5C%22%5Cn)%5Cn%5Cnvar%20b%20bool%5Cn%5Cnvar%20s%20string%5Cn%5Cnvar%20(%5Cn%5Cti%20%20%20int%5Cn%5Cti8%20%20int8%5Cn%5Cti16%20int16%5Cn%5Cti32%20int32%5Cn%5Cti64%20int64%5Cn)%5Cn%5Cnvar%20(%5Cn%5Ctui%20%20%20uint%5Cn%5Ctui8%20%20uint8%5Cn%5Ctui16%20uint16%5Cn%5Ctui32%20uint32%5Cn%5Ctui64%20uint64%5Cn%5Ct%2F%2F%20up%20%20%20uintptr%20%2F%2F%20TODO%20not%20supported%5Cn)%5Cn%5Cnvar%20(%5Cn%5Ctby%20byte%20%2F%2F%20alias%20for%20uint8%5Cn%5Ctr%20%20rune%20%2F%2F%20alias%20for%20int32.%20Represents%20a%20Unicode%20code%20point.%5Cn)%5Cn%5Cnvar%20(%5Cn%5Ctf32%20float32%5Cn%5Ctf64%20float64%5Cn)%5Cn%5Cn%2F%2F%20TODO%20not%20supported%5Cn%2F%2F%20var%20(%5Cn%2F%2F%20%5Ctc64%20%20complex64%5Cn%2F%2F%20%5Ctc128%20complex128%5Cn%2F%2F%20)%5Cn%5Cn%2F%2F%20TODO%3A%20not%20yet%20implemented%3A%20https%3A%2F%2Fgithub.com%2Fgnolang%2Fgno%2Fpull%2F764%5Cn%2F%2F%20var%20bi%20bigint%5Cn%5Cnfunc%20Render(path%20string)%20string%20%7B%5Cn%5Cn%5Ctout%20%3A%3D%20%5B%5Dstring%7B%5Cn%5Ct%5Ct%2F%2F%20bool%20and%20string%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25v%2C%20%25q%5C%22%2C%20b%2C%20s)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20int%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25d%2C%20%25d%2C%20%25d%2C%20%25d%2C%20%25d%5C%22%2C%20i%2C%20i8%2C%20i16%2C%20i32%2C%20i64)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20uint%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25d%2C%20%25d%2C%20%25d%2C%20%25d%2C%20%25d%5C%22%2C%20ui%2C%20ui8%2C%20ui16%2C%20ui32%2C%20ui64%20%2F*%2C%20up%20*%2F)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20bytes%20and%20runes%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25v%2C%20%25v%5C%22%2C%20by%2C%20r)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20float%5Cn%5Ct%5Ctfmt.Sprintf(%5C%22%25f%2C%20%25f%5C%22%2C%20f32%2C%20f64)%2C%5Cn%5Cn%5Ct%5Ct%2F%2F%20complex%5Cn%5Ct%5Ct%2F%2F%20fmt.Sprintf(%5C%22%25f%2C%20%25f%5C%22%2C%20c64%2C%20c128)%2C%5Cn%5Ct%7D%5Cn%5Cn%5Ctreturn%20strings.Join(out%5B%3A%5D%2C%20%5C%22%20%7C%20%5C%22)%5Cn%7D%5Cn%5Cnfunc%20SetValues()%20%7B%5Cn%5Ctb%20%3D%20true%5Cn%5Cn%5Cts%20%3D%20%5C%22a%20string%5C%22%5Cn%5Cn%5Cti%20%3D%20-42%5Cn%5Cti8%20%3D%20-8%5Cn%5Cti16%20%3D%20-4216%5Cn%5Cti32%20%3D%20-4232%5Cn%5Cti64%20%3D%20-4264%5Cn%5Cn%5Ctui%20%3D%2042%5Cn%5Ctui8%20%3D%208%5Cn%5Ctui16%20%3D%204216%5Cn%5Ctui32%20%3D%204232%5Cn%5Ctui64%20%3D%204264%5Cn%5Ct%2F%2F%20up%20%3D%2042%5Cn%5Cn%5Ctby%20%3D%20byte('A')%5Cn%5Ctr%20%3D%20rune('A')%5Cn%5Cn%5Ctf32%20%3D%2042.32%5Cn%5Ctf64%20%3D%2042.64%5Cn%5Cn%5Ct%2F%2F%20c64%20%3D%2042%20%2B%2064i%5Cn%5Ct%2F%2F%20c128%20%3D%2042%20%2B%20128i%5Cn%7D%5Cn%22%7D%5D">
`;

const title: string = "Primitives";

const section: string = "Getting Started";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
