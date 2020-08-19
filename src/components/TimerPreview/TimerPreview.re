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
  let UseTimerHook.{minutes, seconds} = timer;
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
            onClick={() => timer.setTimer(time)}
          />
          <Controls.TogglePlay
            color={theme.primaryColor}
            onPause={timer.pause}
            onPlay={timer.start}
          />
        </div>
      </div>
      <div className=content>
        <h1 className={title(theme.secondaryColor)}>
          titleValue->React.string
        </h1>
        <h2 className={subtitle(theme.primaryColor)}>
          descriptionValue->React.string
        </h2>
        <p className={timerValue(theme.secondaryColor)}>
          {j|$(minutes):$(seconds)|j}->React.string
        </p>
      </div>
    </div>
  );
};
