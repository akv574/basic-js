const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let result = 0;
  array.forEach((k) => {
    k.forEach((i)=>{
      i ==="^^" ? result+=1: result;
    })
  });
  return result;
};
