@react.component
let make = () => {
  open SidebarStyles
  <div className=footer>
    <p>
      <Text> "Made with " </Text>
      <Link target="_blank" href="https://reasonml.github.io/"> "ReScript " </Link>
      <Text> " by " </Text>
      <Link target="_blank" href="https://github.com/vmarcosp"> "@vmarcosp" </Link>
    </p>
    <a className=forkMeText href="https://github.com/lukinco/timerlab">
      <GithubIcon /> {"Fork me on GitHub"->React.string}
    </a>
  </div>
}
