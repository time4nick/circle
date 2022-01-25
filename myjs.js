// js for circle area
// const radIn = 5;
var radIn = document.getElementById("radIns");
console.log(radIn);
function cm(inches) {
  radCms = inches * 2.54;
  console.log(radCms);
  return radCms;
}
const radius = cm(radIn);
function area(value) {
  areaIn = 3.14 * radIn * radIn;
  areaCms = 3.14 * radCms * radCms;
  console.log(areaIn);
  console.log(areaCms);
}
area(radIn);
