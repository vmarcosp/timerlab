open CssHelpers;

let button =
  Css.(
    style([
      noBorder,
      noOutline,
      padding(zero),
      background(transparent),
      cursor(pointer),
      selector("&:nth-child(2)", [marginLeft(1.->rem)]),
      selector(":disabled", [opacity(0.5)])
    ])
  );

let icon = isOpen =>
  Css.(
    style([
      //
      transform(`rotate(`deg(isOpen ? 0. : 180.))),
      transitionDuration(300),
    ])
  );

module TogglePlay = {
  [@react.component]
  let make = (~onPause, ~onPlay, ~color, ~status, ~toggleTimer, ~disabled) => {
    <button
      onClick={_ => {
        toggleTimer(_ => !status);
        status ? onPause() : onPlay();
      }}
      className=button
      disabled=disabled>
      {status ? <PauseIcon color /> : <PlayIcon color />}
    </button>;
  };
};

module Reset = {
  [@react.component]
  let make = (~onClick, ~color) => {
    <button onClick={_ => onClick()} className=button>
      <ResetIcon color />
    </button>;
  };
};

module ToggleSidebar = {
  [@react.component]
  let make = (~onClick, ~isOpen, ~color) => {
    <button onClick={_ => onClick()} className=button>
      <ToggleIcon color className={icon(isOpen)} />
    </button>;
  };
};
