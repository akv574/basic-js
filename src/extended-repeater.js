const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === undefined) {
    throw new CustomError('Not implemented');
}
let newStr = String(str);
let result = "";
let newOption = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "|"
}

if (options !== undefined) {
    Object.keys(options).map((i) => {
        newOption[i] = String(options[i]);
       
    })
}



newStr = newStr + newOption.addition;

for (let j = 1; j < newOption.additionRepeatTimes; j++) {
    newStr = newStr + newOption.additionSeparator + newOption.addition

}

result = newStr;


for (let i = 1; i < newOption.repeatTimes; i++) {

    result = result + newOption.separator + newStr

}

return result;



};
