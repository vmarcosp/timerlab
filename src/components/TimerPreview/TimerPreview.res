@react.component
let make = (
  ~title as titleValue="Cool title",
  ~description as descriptionValue="Cool description",
  ~onToggle,
  ~fullWidth,
  ~theme,
  ~timer: UseTimerHook.useTimerResult,
  ~time,
) => {
  let (timerStatus, toggleTimer) = React.useState(_ => false)

  let {UseTimerHook.minutes: minutes, seconds} = timer
  let isToggleDisabled = minutes === "00" && seconds === "00"

  React.useEffect1(() => {
    toggleTimer(_ => false)
    timer.setTimer(time)
    None
  }, [time])

  let handleReset = () => {
    timer.setTimer(time)
    timer.pause()
    toggleTimer(_ => false)
  }

  let onStart = () =>
    if isToggleDisabled {
      toggleTimer(_ => false)
    } else {
      timer.start()
    }

  open TimerPreviewStyles
  <div className={wrapper(fullWidth, theme)}>
    <div className=header>
      <Controls.ToggleSidebar color=theme.primaryColor isOpen=fullWidth onClick=onToggle />
      <div>
        <Controls.Reset color=theme.primaryColor onClick=handleReset />
        <Controls.TogglePlay
          status=timerStatus
          color=theme.primaryColor
          toggleTimer
          onPause=timer.pause
          onPlay=onStart
          disabled=isToggleDisabled
        />
      </div>
    </div>
    <div className=content>
      <h1 className={title(theme.primaryColor)}> {titleValue->React.string} </h1>
      <h2 className={subtitle(theme.secondaryColor)}> {descriptionValue->React.string} </h2>
      <p className={timerValue(theme.primaryColor)}> {j`$(minutes):$(seconds)`->React.string} </p>
    </div>
  </div>
}
