@bs.val external import_: string => string = "require"
@bs.val external require: string => unit = "require"
let preventDefault = e => ReactEvent.Mouse.preventDefault(e)
