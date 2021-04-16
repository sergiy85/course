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
  getPercent(num1, num2){
    if(this.isNumber(num1) && this.isNumber(num2) && 
      num1 != null && num2 != null && 
      typeof num1 === 'number' && typeof num2 === 'number'
      ){
      const result = num1*100/num2;
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
}

const newCalc = new Calculate();

console.log(newCalc.add(4, 5)); // 9
console.log(newCalc.add(4)); // null
console.log(newCalc.add(4, '4')); // null

console.log(newCalc.subtraction(2, 4)); // -2
console.log(newCalc.multiply(2, 4)); // 8
console.log(newCalc.division(22, 7)); // 3.1428571428

// получить, сколько составляет процент первого числа от второго  
console.log(newCalc.getPercent(5, 10)); //50