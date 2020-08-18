[@react.component]
let make = () => {
  SidebarStyles.(
    <div className=footer>
      <div className=buttonsContainer>
        <Button block=true> "Apply changes" </Button>
      </div>
      <p>
        <Text> "Made with " </Text>
        <Link href="github.com"> "ReasonML " </Link>
        <Text> " by " </Text>
        <Link href="lukin.co"> "Lukin Co." </Link>
      </p>
    </div>
  );
};
