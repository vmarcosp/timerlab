type useTimerResult = {
  minutes: string,
  seconds: string,
  start: unit => unit,
  reset: unit => unit,
  setTimer: string => unit,
  finished: unit => unit,
  pause: unit => unit,
};

[@bs.module "@fdaciuk/use-timer"]
external useTimer: string => useTimerResult = "default";
