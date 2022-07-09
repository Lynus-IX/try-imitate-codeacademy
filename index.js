// retrieve elements
const runCodeBtn = document.querySelector(".editor__run");
const resetCodeBtn = document.querySelector(".editor__reset");
const consoleDiv = document.querySelector(".editor__console");

var codeEditor = ace.edit("editorCode");
var defaultCode = `console.log("Hello World");`;
let consoleMessage = "";

var editorLib = {
  printConsole() {
    const newLine = document.createElement("div");
    newLine.append(`> ${consoleMessage}`);
    consoleDiv.append(newLine);
  },
  clearConsole() {
    consoleDiv.remove(consoleDiv.children);
  },
  init() {
    codeEditor.setTheme("ace/theme/cloud9_night_low_color");
    codeEditor.session.setMode("ace/mode/javascript");
    codeEditor.setValue(defaultCode);
  },
};

runCodeBtn.addEventListener("click", () => {
  const userCode = codeEditor.getValue();
  try {
    new Function(userCode)();
  } catch (err) {
    console.log(err);
  }
  editorLib.printConsole();
});

resetCodeBtn.addEventListener("click", () => {
  codeEditor.setValue(defaultCode);
  editorLib.clearConsole();
});

editorLib.init();
