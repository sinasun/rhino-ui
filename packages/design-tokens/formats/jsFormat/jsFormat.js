const createFileHeader = require("../../utils/createFileHeader/createFileHeader");
const {format} = require("style-dictionary");

const jsFormat = {
  name: 'javascript/esm',
  formatter: function (dictionary) {

    const generated = format['javascript/module'](dictionary);

    return generated.replace("module.exports = ", "export default ");
  }
}

module.exports = jsFormat;
