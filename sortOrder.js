const firstValue = process.argv[2].toLocaleLowerCase();
const secondValue = process.argv[3].toLocaleLowerCase();

// Your comparison code (if statements) go here

let answer = 0;

if (firstValue < secondValue) {
    console.log(-1);
} else if (firstValue > secondValue) {
    console.log(1);
} else {
    console.log(0);
}

