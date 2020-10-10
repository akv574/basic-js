const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directOrReverseMaschine = true) {
    this.directOrReverseMaschine = directOrReverseMaschine;

    

  }
  encrypt(string, key) {

    if (!string && !key) {
      throw CustomError()
    }
    let result = '';
    for (let i = 0, j = 0; i < string.length; i++) {
      let letter = string.toUpperCase().charCodeAt(i);
      if (65 <= letter && letter <= 90) {
        result += String.fromCharCode(((letter + key.toUpperCase().charCodeAt(j % key.length) - 130) % 26) + 65)
        j++;

      } else {
        result += string[i]

      }

    }


    if (this.directOrReverseMaschine) {
      return result
    } else {
      return result.split("").reverse().join("")
    }
  }

  decrypt(string, key) {
    if (!string && !key) {
      throw CustomError()
    }

    let result = '';
    for (let i = 0, j = 0; i < string.length; i++) {
      let letter = string.toUpperCase().charCodeAt(i);
      if (65 <= letter && letter <= 90) {
        if (letter - key.toUpperCase().charCodeAt(j % key.length) < 0) {
          result += (String.fromCharCode(((letter - key.toUpperCase().charCodeAt(j % key.length)) + 26) + 65));
          j++

        } else {
          result += (String.fromCharCode(((letter - key.toUpperCase().charCodeAt(j % key.length)) % 26) + 65));
          j++;
        }



      } else {
        result += string[i]

      }

    }


    if (this.directOrReverseMaschine) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }


  }
}

module.exports = VigenereCipheringMachine;
