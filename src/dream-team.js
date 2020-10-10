const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let result = new Array;
    if (Array.isArray(array)) {
       array.forEach((i)=>{
           if (typeof(i)==="string") {
            (/^[a-z_ ]+$/i).test(i)  ? result.push(i.replace(/[ ]/gi,"")[0].toUpperCase()) : result;
               
           }
       });
            
        
    } else { 
        return false
        
    }
    
  
  return result.sort().join("");
};
