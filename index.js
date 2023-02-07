 function saturdayFun (activity = "roller-skate"){
    let message = activity ;
    return (`This Saturday, I want to ${message}!`);
 }
 function mondayWork (Mwork = "go to the office"){
    return (`This Monday, I will ${Mwork}.`);
 }
 
 function wrapAdjective(part1 = "*"){
   const innerFunction = function (part2 = "special"){
      return(`You are ${part1}${part2}${part1}!`);
    };
    return innerFunction;
    }

    