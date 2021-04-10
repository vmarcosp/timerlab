type t

type rec event = {target: target}
and target = {result: string}

@bs.new external make: unit => t = "FileReader"

@bs.send
external addEventListener: (t, string, event => unit) => unit = "addEventListener"

@bs.send external readAsDataURL: (t, 'a) => unit = "readAsDataURL"
