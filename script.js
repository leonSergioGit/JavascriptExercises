//Challenge 1: Add all numbers
//Return a sum of all parameters entered regardless of the amount of numbers
//Ex addAll(2, 5, 6, 7) === 20

function addAll(){
    let total = 0;

    for(const element in arguments){

        if(typeof arguments[element] === "number"){
            total += arguments[element];
        }
    }

   return total;

}

const sum = addAll(4, 6, 10, 30, "sdfsdf");

console.log(sum);





