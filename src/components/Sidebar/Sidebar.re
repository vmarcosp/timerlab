[@react.component]
let make = () => {
  SidebarStyles.(
    <div className=sidebar>
      <div className=header> <Logo /> </div>
      <div className=content>
        <Input label="Title" placeholder="Title" />
        <Input label="Description" placeholder="Description" />
        <Input label="Time" placeholder="00:00" type_="number" />
        <Select label="Theme">
          <option> "Custom theme"->React.string </option>
        </Select>
      </div>
      <div className=footer>
        <p>
          <Text> "Made with " </Text>
          <Link href="github.com"> "ReasonML " </Link>
          <Text> " by " </Text>
          <Link href="lukin.co"> "Lukin Co." </Link>
        </p>
      </div>
    </div>
  );
};
