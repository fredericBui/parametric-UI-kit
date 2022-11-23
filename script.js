let div = document.createElement("div");
let sectionBtnFont = document.createElement("section");
let sectionBtnShape = document.createElement("section");
let button = document.createElement("button");
let btnWidth = document.createElement("input");
let btnHeight = document.createElement("input");
let btnRound = document.createElement("input");
let btnFontSize = document.createElement("input");
let btnContent = document.createElement("textarea");
let pre = document.createElement("pre");
let codeArea = document.createElement("div");
let br = document.createElement("br");
let br2 = document.createElement("br");
let br3 = document.createElement("br");
let br4 = document.createElement("br");
let br5 = document.createElement("br");
let br6 = document.createElement("br");
let btnRedIntensity = document.createElement("input");
let btnGreenIntensity = document.createElement("input");
let btnBlueIntensity = document.createElement("input");
let btnShadowY = document.createElement("input");
let btnShadowX = document.createElement("input");
let btnShadowBlur = document.createElement("input");

btnWidth.style.width = "100%";
btnWidth.value = "0";
btnWidth.type = "range";
btnWidth.min = "0";
btnWidth.max = window.innerWidth;
btnHeight.placeholder = "Btn Height";
btnHeight.type = "number";
btnHeight.min = "0";
btnHeight.max = "100";
btnRound.placeholder = "Btn Round";
btnRound.type = "number";
btnRound.min = "0";
btnRound.max = "100";
btnContent.style.marginTop = "10px";
btnContent.placeholder = "Write text or HTML tag.";
btnFontSize.type = "number";
btnFontSize.min = "0";
btnFontSize.placeholder = "Font Size";
btnRedIntensity.type = "range";
btnRedIntensity.min = "0";
btnRedIntensity.max = "255";
btnGreenIntensity.type = "range";
btnGreenIntensity.min = "0";
btnGreenIntensity.max = "255";
btnBlueIntensity.type = "range";
btnBlueIntensity.min = "0";
btnBlueIntensity.max = "255";
btnShadowY.type = "range";
btnShadowY.value = "0";
btnShadowY.min = "-50";
btnShadowY.max = "50";
btnShadowX.type = "range";
btnShadowX.value = "-50";
btnShadowX.min = "-50";
btnShadowX.max = "50";
btnShadowBlur.type = "number";
btnShadowBlur.placeholder = "Btn Shadow Blur";
sectionBtnShape.style.margin = "10px 0px";

document.body.appendChild(div);
document.body.appendChild(pre);
div.appendChild(button);
div.appendChild(btnWidth);
div.appendChild(sectionBtnFont);
sectionBtnFont.appendChild(btnContent);
sectionBtnFont.appendChild(br);
sectionBtnFont.appendChild(btnFontSize);
div.appendChild(sectionBtnShape);
sectionBtnShape.appendChild(btnHeight);
sectionBtnShape.appendChild(btnRound);
div.appendChild(btnRedIntensity);
div.appendChild(btnGreenIntensity);
div.appendChild(btnBlueIntensity);
div.appendChild(br6);
div.appendChild(btnShadowY);
div.appendChild(btnShadowX);
div.appendChild(btnShadowBlur);
pre.appendChild(codeArea);

btnWidth.addEventListener("change", btnWidthTrigger);
btnHeight.addEventListener("change", btnHeightTrigger);
btnContent.addEventListener("keyup", btnContentTrigger);
btnRound.addEventListener("change", btnRoundTrigger);
btnFontSize.addEventListener("change", btnFontSizeTrigger);
btnRedIntensity.addEventListener("change", btnColorIntensityTrigger);
btnGreenIntensity.addEventListener("change", btnColorIntensityTrigger);
btnBlueIntensity.addEventListener("change", btnColorIntensityTrigger);
btnShadowY.addEventListener("change", btnShadowTrigger);
btnShadowX.addEventListener("change", btnShadowTrigger);
btnShadowBlur.addEventListener("change", btnShadowTrigger);

function btnWidthTrigger(e) {
  button.style.width = `${(e.target.value * 100) / window.innerWidth}%`;
  refreshCodeArea();
}

function btnHeightTrigger(e) {
  button.style.paddingTop = `${e.target.value}px`;
  button.style.paddingBottom = `${e.target.value}px`;
  refreshCodeArea();
}

function btnContentTrigger(e) {
  button.innerHTML = e.target.value;
  btnWidth.value = `${button.clientWidth}`;
  btnFontSize.value = button.clientHeight;
  console.log(button.clientWidth);
  refreshCodeArea();
}

function btnRoundTrigger(e) {
  button.style.border = "1px solid grey";
  button.style.borderRadius = `${e.target.value}px`;
  refreshCodeArea();
}

function btnFontSizeTrigger(e) {
  button.style.fontSize = `${e.target.value}px`;
  refreshCodeArea();
}

function btnColorIntensityTrigger() {
  button.style.border = "1px solid grey";
  button.style.backgroundColor = `rgb(${btnRedIntensity.value},${btnGreenIntensity.value},${btnBlueIntensity.value})`;
  refreshCodeArea();
}

function btnShadowTrigger() {
  button.style.boxShadow = `${btnShadowX.value}px ${btnShadowY.value}px ${
    btnShadowBlur.value > 0 ? btnShadowBlur.value : "0"
  }px grey`;
  refreshCodeArea();
}

function refreshCodeArea() {
  codeArea.innerHTML = button.outerHTML.toString().replaceAll("<", "&lt;");
}
