const markdownContent: string = `

In Gno, you can import 3 different types of code - Gno standard libraries,
on-chain packages, and on-chain realms.

### Standard libraries

The Gno Standard Library behaves as you would expect in Go - simply import and 
use it. However, some packages, such as \`crypto/rand\` are not available due to
their non-deterministic nature. You can see a full compatability list 
[here](https://docs.gno.land/reference/go-gno-compatibility/#stdlibs).

### On-chain packages and realms

Gno code can be written and deployed to the chain. This code, be it a package
or a realm, can then be imported by other Gno code, allowing for reusability.

Packages and realms live under specific package paths, such as \`gno.land/p/demo/\`
& \`gno.land/r/demo/\`. They can be imported by other code using this path, and
used as expected.

Let's check out some examples:

<Playground open="src/tutorials/gno.land/gbe/basics/08-imports/imports.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fbasics%2F08-imports%2Fimports.gno%22%2C%22content%22%3A%22package%20imports%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22bytes%5C%22%5Cn%5Ct%5C%22std%5C%22%5Cn%5Ct%5C%22strconv%5C%22%5Cn%5Cn%5Ct%5C%22gno.land%2Fp%2Fdemo%2Fufmt%5C%22%5Cn%5Ct%5C%22gno.land%2Fr%2Fdemo%2Fusers%5C%22%5Cn)%5Cn%5Cnfunc%20StrConv(input%20int)%20string%20%7B%5Cn%5Ctreturn%20strconv.Itoa(input)%5Cn%7D%5Cn%5Cnfunc%20Bytes()%20string%20%7B%5Cn%5Ctvar%20b%20bytes.Buffer%5Cn%5Cn%5Ctb.WriteString(%5C%22This%20is%20one%20line%20in%20the%20buffer%5C%5Cn%5C%22)%5Cn%5Ctb.WriteString(%5C%22This%20is%20a%20second%20line%20in%20the%20buffer%5C%22)%5Cn%5Cn%5Ctreturn%20b.String()%5Cn%7D%5Cn%5Cnfunc%20Formatter(input%20int)%20string%20%7B%5Cn%5Ct%2F%2F%20Package%20ufmt%20provides%20utility%20functions%20for%20formatting%20strings%2C%20similarly%5Cn%5Ct%2F%2F%20to%20the%20Go%20package%20%5C%22fmt%5C%22%2C%20of%20which%20only%20a%20subset%20is%20currently%20supported%5Cn%5Ct%2F%2F%20(hence%20the%20name%20%C2%B5fmt%20-%20micro%20fmt).%5Cn%5Ctreturn%20ufmt.Sprintf(%5C%22The%20user%20has%20inputted%20%25d!%5C%22%2C%20input)%5Cn%7D%5Cn%5Cnfunc%20CheckRegistration(address%20std.Address)%20string%20%7B%5Cn%5Ctuser%20%3A%3D%20users.GetUserByAddress(address)%5Cn%5Ctif%20user%20%3D%3D%20nil%20%7B%5Cn%5Ct%5Ctreturn%20ufmt.Sprintf(%5C%22Specified%20address%20is%20not%20registered!%5C%22)%5Cn%5Ct%7D%5Cn%5Cn%5Ctreturn%20ufmt.Sprintf(%5C%22Address%20%25s%20matches%20%25s%20username!%5C%22%2C%20address.String()%2C%20user.Name)%5Cn%7D%5Cn%22%7D%5D">

<Playground open="src/tutorials/gno.land/gbe/basics/08-imports/imports_test.gno" files="%5B%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fbasics%2F08-imports%2Fimports_test.gno%22%2C%22content%22%3A%22package%20imports%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22std%5C%22%5Cn%5Ct%5C%22testing%5C%22%5Cn)%5Cn%5Cnfunc%20TestStrconv(t%20*testing.T)%20%7B%5Cn%5Ctprintln(StrConv(100))%5Cn%7D%5Cn%5Cnfunc%20TestBuffer(t%20*testing.T)%20%7B%5Cn%5Ctprintln(Bytes())%5Cn%7D%5Cn%5Cnfunc%20TestUfmt(t%20*testing.T)%20%7B%5Cn%5Ctprintln(Formatter(123))%5Cn%7D%5Cn%5Cnfunc%20TestCheckRegistration(t%20*testing.T)%20%7B%5Cn%5Ctprintln(CheckRegistration(std.Address(%5C%22g1us8428u2a5satrlxzagqqa5m6vmuze025anjlj%5C%22)))%5Cn%7D%5Cn%22%7D%2C%7B%22path%22%3A%22src%2Ftutorials%2Fgno.land%2Fgbe%2Fbasics%2F08-imports%2Fimports.gno%22%2C%22content%22%3A%22package%20imports%5Cn%5Cnimport%20(%5Cn%5Ct%5C%22bytes%5C%22%5Cn%5Ct%5C%22std%5C%22%5Cn%5Ct%5C%22strconv%5C%22%5Cn%5Cn%5Ct%5C%22gno.land%2Fp%2Fdemo%2Fufmt%5C%22%5Cn%5Ct%5C%22gno.land%2Fr%2Fdemo%2Fusers%5C%22%5Cn)%5Cn%5Cnfunc%20StrConv(input%20int)%20string%20%7B%5Cn%5Ctreturn%20strconv.Itoa(input)%5Cn%7D%5Cn%5Cnfunc%20Bytes()%20string%20%7B%5Cn%5Ctvar%20b%20bytes.Buffer%5Cn%5Cn%5Ctb.WriteString(%5C%22This%20is%20one%20line%20in%20the%20buffer%5C%5Cn%5C%22)%5Cn%5Ctb.WriteString(%5C%22This%20is%20a%20second%20line%20in%20the%20buffer%5C%22)%5Cn%5Cn%5Ctreturn%20b.String()%5Cn%7D%5Cn%5Cnfunc%20Formatter(input%20int)%20string%20%7B%5Cn%5Ct%2F%2F%20Package%20ufmt%20provides%20utility%20functions%20for%20formatting%20strings%2C%20similarly%5Cn%5Ct%2F%2F%20to%20the%20Go%20package%20%5C%22fmt%5C%22%2C%20of%20which%20only%20a%20subset%20is%20currently%20supported%5Cn%5Ct%2F%2F%20(hence%20the%20name%20%C2%B5fmt%20-%20micro%20fmt).%5Cn%5Ctreturn%20ufmt.Sprintf(%5C%22The%20user%20has%20inputted%20%25d!%5C%22%2C%20input)%5Cn%7D%5Cn%5Cnfunc%20CheckRegistration(address%20std.Address)%20string%20%7B%5Cn%5Ctuser%20%3A%3D%20users.GetUserByAddress(address)%5Cn%5Ctif%20user%20%3D%3D%20nil%20%7B%5Cn%5Ct%5Ctreturn%20ufmt.Sprintf(%5C%22Specified%20address%20is%20not%20registered!%5C%22)%5Cn%5Ct%7D%5Cn%5Cn%5Ctreturn%20ufmt.Sprintf(%5C%22Address%20%25s%20matches%20%25s%20username!%5C%22%2C%20address.String()%2C%20user.Name)%5Cn%7D%5Cn%22%7D%5D">

Read more about packages, realms, and standard libraries in the 
[Official Documentation](https://docs.gno.land/), and see more example packages
and realms [here](https://github.com/gnolang/gno/tree/master/examples).`;

const title: string = "Importing";

const section: string = "Basics";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
