const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: "",
  result: "",
  chaineLength: 0,
  getLength() {
    return this.str.split("~~").length

  },
  addLink(value) {
    this.str === "" ? this.str = `( ${String(value)} )` : this.str = this.str + `~~( ${String(value)} )`;
    return this

  },
  removeLink(position) {

    if (position > 0 && position % 1 === 0) {
      let arr = this.str.split("~~");
      arr.splice(position - 1, 1);
      this.str = arr.join("~~");
    } else {
      this.str = "";
      throw CustomError();
    }
    return this;


  },
  reverseChain() {
    this.str = this.str.split("~~").reverse().join("~~");

    return this;


  },
  finishChain() {
    this.result = this.str;
    this.str = "";
    return this.result;

  }
};

module.exports = chainMaker;
