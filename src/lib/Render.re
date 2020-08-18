let map = (items, fn) =>
  Belt.Array.mapWithIndex(items, (index, item) =>
    fn(index->string_of_int, item)
  )
  ->React.array;
