const addNums = (...nums) => {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    } return sum;
}

console.log(addNums(2,4,3,4,6));

const numbers = [4, 17, 2, 3]

const addNumsSpread = (num1, num2) => {
    return num1 + num2;
} 

console.log(addNumsSpread(...numbers))