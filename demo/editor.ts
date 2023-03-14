import { EditorView, basicSetup } from "codemirror"
import { SNBT, SNBTLanguage } from "../dist/index.js"

// SNBTLanguage.parser.parse(

const editor = document.querySelector<HTMLDivElement>("div#editor")!
const output = document.querySelector<HTMLDivElement>("div#output")!

new EditorView({
  extensions: [
    basicSetup,
    SNBT(),
    EditorView.updateListener.of((e) => {
      try {
        const tree = SNBTLanguage.parser.parse(e.state.doc.toString());
        output.innerText = tree.children.toString()
      } catch (e) {
        output.innerText = e.message;
        console.error(e);
      }
    })
  ],
  parent: editor
})
