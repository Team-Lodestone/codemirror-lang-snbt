import {styleTags, tags as t} from "@lezer/highlight"

export const snbtHighlighting = styleTags({
  String: t.string,
  Number: t.number,
  "True False": t.bool,
  PropertyName: t.propertyName,
  Null: t.null,
  ",": t.separator,
  "[ ]": t.squareBracket,
  "{ }": t.brace
})