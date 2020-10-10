const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {
  let result;
  let k = Math.log(2) / 5730;
  if (typeof (activity) != "string") {
    return false

  } else {
    if (Number(activity) > 0 && Number(activity) < 15 ) {

      result = Math.round(Math.log(15 / Number(activity)) / k);
    } else {
      return false;

    }

  }




  return result;

};
