const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (Array.isArray(array) ) {
    let discardPrev = "--discard-prev";
    let discardNext = "--discard-next";
    let doublePrev = "--double-prev";
    let doubleNext = "--double-next";
    let resultArray = new Array();
    let modify = false;
    for (let i = 0; i < array.length; i++) {
      switch (array[i]) {
        case discardPrev:
          if (i === 0) { break }
          if (modify) { modify = false; break }
          resultArray.pop();


          break;

        case discardNext:
          if (i === array.length - 1) { break }
          modify = true;
          i += 1


          break;

        case doublePrev:
          if (i === 0) { break }
          if (modify) { modify = false; break }
          resultArray.push(array[i - 1]);

          break;

        case doubleNext:
          if (i === array.length - 1) { break }
          resultArray.push(array[i + 1]);
          break;

        default:
          resultArray.push(array[i])
          modify = false;
          break;
      }


    }


    
    return resultArray






  } else {
    
      throw CustomError('Not implemented');
    





  }



  // remove line with error and write your code here
};
