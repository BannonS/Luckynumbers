// Write your code below this line.
function randomNumberGenerator(n) {
    let numbers = new Set();
    while (numbers.size < n) {
        numbers.add(Math.floor(Math.random() * 10) + 1);
    }
    return [...numbers]
} 
console.log(randomNumberGenerator(5))
git add findLuckyNumbers.js
git commit -m "findLuckyNumbers.js"
git push