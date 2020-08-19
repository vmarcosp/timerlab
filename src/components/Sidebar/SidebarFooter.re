[@react.component]
let make = () => {
  SidebarStyles.(
    <div className=footer>
      <div className=buttonsContainer>
        <Button block=true> "Save" </Button>
      </div>
      <p>
        <Text> "Made with " </Text>
        <Link target="_blank" href="https://github.com/lukinco/timerlab">
          "ReasonML "
        </Link>
        <Text> " by " </Text>
        <Link target="_blank" href="https://lukin.co"> "Lukin Co." </Link>
      </p>
    </div>
  );
};
