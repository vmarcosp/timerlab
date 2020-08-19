let (>>?) = (maybe, defaultValue) =>
  Option.getWithDefault(maybe, defaultValue);
