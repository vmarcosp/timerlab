[@react.component]
let make =
    (
      ~title as titleValue="Cool title",
      ~description as descriptionValue="Cool description",
      ~onToggle,
      ~fullWidth,
      ~theme,
      ~timer: UseTimerHook.useTimerResult,
      ~time,
    ) => {
  let (timerStatus, toggleTimer) = React.useState(_ => false);

  let UseTimerHook.{minutes, seconds} = timer;

  React.useEffect1(
    () => {
      toggleTimer(_ => false);
      timer.setTimer(time);
      None;
    },
    [|time|],
  );

  let handleReset = () => {
    timer.setTimer(time)
    timer.pause()
    toggleTimer(_ => false)
  }

  TimerPreviewStyles.(
    <div className={wrapper(fullWidth, theme)}>
      <div className=header>
        <Controls.ToggleSidebar
          color={theme.primaryColor}
          isOpen=fullWidth
          onClick=onToggle
        />
        <div>
          <Controls.Reset
            color={theme.primaryColor}
            onClick={handleReset}
          />
          <Controls.TogglePlay
            status=timerStatus
            color={theme.primaryColor}
            toggleTimer
            onPause={timer.pause}
            onPlay={timer.start}
          />
        </div>
      </div>
      <div className=content>
        <h1 className={title(theme.primaryColor)}>
          titleValue->React.string
        </h1>
        <h2 className={subtitle(theme.secondaryColor)}>
          descriptionValue->React.string
        </h2>
        <p className={timerValue(theme.primaryColor)}>
          {j|$(minutes):$(seconds)|j}->React.string
        </p>
      </div>
    </div>
  );
};
