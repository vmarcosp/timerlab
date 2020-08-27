[@react.component]
let make = () => {
  SidebarStyles.(
    <div className=footer>
      <p>
        <Text> "Made with " </Text>
        <Link target="_blank" href="https://reasonml.github.io/">
          "ReasonML "
        </Link>
        <Text> " by " </Text>
        <Link target="_blank" href="https://lukin.co"> "Lukin Co." </Link>
      </p>
      <a className=forkMeText href="https://github.com/lukinco/timerlab">
        <GithubIcon />
        "Fork me on GitHub"->React.string
      </a>
    </div>
  );
};
