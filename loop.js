const numbers = [3, 7, 12, 5, -2, 9, 14];

for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];

    // 1. Check for negative numbers first to stop the loop entirely
    if (current < 0) {
        break;
    }

    // 2. Check for even numbers to skip the rest of this iteration
    if (current % 2 === 0) {
        continue;
    }

    // 3. This only runs for positive odd numbers
    console.log(current); 
}
 
//while vs Do-whileet isOpen = false;
let isOpen = false;
while (isOpen === true) {
    console.log("Welcome! Come on in."); // This NEVER runs
}


do {
    console.log("Welcome! Come on in."); // This runs EXACTLY ONCE
} while (isOpen === true);

