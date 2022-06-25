// retrieve elements
const runCodeBtn = document.querySelector(".editor__run");
const resetCodeBtn = document.querySelector(".editor__reset");

var codeEditor = ace.edit("editorCode");

var editorLib = {
  init() {
    codeEditor.setTheme("ace/theme/cloud9_night_low_color");
    codeEditor.session.setMode("ace/mode/golang");
  },
};

runCodeBtn.addEventListener("click", () => {});

resetCodeBtn.addEventListener("click", () => {
  codeEditor.setValue("");
});

editorLib.init();
