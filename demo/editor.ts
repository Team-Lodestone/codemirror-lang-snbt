import {EditorView, basicSetup} from "codemirror"
import { SNBT } from "../dist/index.js"

new EditorView({
  extensions: [basicSetup, SNBT()],
  parent: document.body
})
