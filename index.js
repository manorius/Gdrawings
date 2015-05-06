var convert = require("./js/svg2gcode");
var fs = require('fs');

var svgData = "";

fs.readFile('./test.svg', {encoding:"utf8"},function (err, data) {
  if (err) throw err;
  svgData = data;
});

console.log(convert.svg2gcode(svgData));