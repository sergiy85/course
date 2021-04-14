class Calculate{
  constructor(){ }

  isNumber(value){
    return !Number.isNaN(Number(value));
  }

  add(num1, num2){
    if(this.isNumber(num1) && this.isNumber(num2) && 
      num1 != null && num2 != null && 
      typeof num1 === 'number' && typeof num2 === 'number'
      ){
      return num1 + num2;
    }
    else{
      return null;
    }       
  }

  subtraction(num1, num2){
    if(this.isNumber(num1) && this.isNumber(num2) && 
      num1 != null && num2 != null && 
      typeof num1 === 'number' && typeof num2 === 'number'
      ){
      return num1 - num2;
    }
    else{
      return null;
    }
  }

  multiply(num1, num2){
    if(this.isNumber(num1) && this.isNumber(num2) && 
      num1 != null && num2 != null && 
      typeof num1 === 'number' && typeof num2 === 'number'
      ){
      return num1*num2;
    }
    else{
      return null;
    }
  }
  division(num1, num2){
    if(this.isNumber(num1) && this.isNumber(num2) && 
      num1 != null && num2 != null && 
      typeof num1 === 'number' && typeof num2 === 'number'
      ){
      const result = num1/num2;
      
      switch(true){
        case ((result === Infinity)||(result === -Infinity)) : return null
        case (result === -0) : return 0
        default: return result
      }
    }
    else{
      return null;
    }
  }
  getPercent(num, percent){
    if(this.isNumber(num) && this.isNumber(percent) && 
      num != null && percent != null && 
      typeof num === 'number' && typeof percent === 'number'
      ){
      return num*100/percent;
    }
    else{
      return null;
    }
  }
}

const newCalc = new Calculate();

console.log(newCalc.add(4,true));
console.log(newCalc.subtraction(2,4));
console.log(newCalc.multiply(2,4));
console.log(newCalc.division(22,7));
console.log(newCalc.getPercent(2,4));
