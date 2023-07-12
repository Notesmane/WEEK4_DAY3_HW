//! lab assigned on June 29th, not sure of the due date,
//! link: https://perscholas.instructure.com/courses/1513/assignments/311077
//! Deliverables are as follows:
//! JavaScript file that runs without syntax errors (comment out stuff that doesn't work).
//! A coded solution for each of the problem statements below.
//! At least one git commit message per problem, as described below.


//TODO =============================================  Exercise 1 (Easy Going) - DONE
// write a for loop that will log the numbers 1 through 20

// for (let i = 0; i <= 20; i++) {
//     console.log(i);
// }


//TODO =============================================  Exercise 2 (Easy Going) - DONE
// Write a for loop that will log only the even numbers in 0 through 200.

// for (let i = 0; i <= 200; i++) {

//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


//TODO =============================================  Exercise 3 (Fizz Buzz) - DONE
// Write a Javascript Application that logs all numbers from 1 - 100.
// If a number is divisible by 3, log "Fizz" instead of the number.
// If a number is divisible by 5, log "Buzz" instead of the number.
// If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i)
//     } 
//  }


//TODO =============================================  Exercise 4 (Wild Wild Life) - DONE
// Use the following arrays to answer the questions below (name, species, age, hometown).
// You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee.splice(2,1, 5001);
// console.log(plantee)

// // 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy.splice(3, 1, "Gotham City");
// console.log(wolfy)

// // 3. Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins");
// console.log(dart)

// // 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
// wolfy.splice(0, 1, "Gameboy");
// console.log(wolfy)


//TODO =============================================  Exercise 5 (Ninja Turtles) - DONE
// ------ Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// ---- Use a for of loop to call toUpperCase() on each of them and print out the result.
// for (let turtle of ninjaTurtles) {
//     console.log(turtle.toUpperCase());
// }


//TODO =============================================  Exercise 6 (Methods Revisted) - COMPLETED

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas',
//  'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver',
//   'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console.log(favMovies)

// // Console log the index of Titanic. - DONE

// // console.log(favMovies.length);
// console.log(favMovies.indexOf('Titanic'));

// // 1. Use the .sort method.  - DONE
// // favMovies.sort((a, b) => {
// //     if (a > b) return 1;
// //     if (a < b) return -1;
// //     return 0;
// // });
// favMovies.sort();
// console.log(favMovies);
// // 2. Thought Question: What did this do to the array? Did it permanently alter it? - DONE
// // the above went through each element of the array, if it was alphabetically after the next one then it was indexed to 1,
// // if it came before the next one it was indexed to -1. And yes,it permanently altered the OG array

// // 3. Use the method pop. - DONE
// favMovies.pop();
// console.log(favMovies);

// // 4. push "Guardians of the Galaxy". - DONE
// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

// // 5. Reverse the array. - DONE
// favMovies.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//     return 0;
// }); console.log(favMovies);

// // 6. Use the shift method. - DONE
// favMovies.shift();
// console.log(favMovies);

// // 7. unshift - what does it return? - DONE
// // ANSWER: adds a new element to the beginning of the array.

// // 8. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself). - DONE
// console.log(favMovies.indexOf('Django Unchained'));
// favMovies.splice(14, 1, 'Avatar');
// console.log(favMovies);

// // 9. Thought Question: Did this permanently alter our array? - DONE
// // ANSWER: no, it returned a 'shallow copy' of the array

// // 10. slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather 
// // than counting it and hard coding it.  - DONE
// console.log(favMovies.length);
// console.log(favMovies.slice(-9));

// // 11. Thought Question: Did this permanently alter our array? - DONE
// // ANSWER no it did not, it returned a s'shallow copy' of the array

// // 12. Store the value of your slice in a variable and console.log it. - DONE
// const lastHalf = favMovies.slice(-9);
// console.log(lastHalf);

// // 13. Thought Question: What is going on here? - DONE
// // Above, I had to create a new variable, lastHalf, and then slive off the last half, then I console logged it.

// // 14. console.log your final results - DONE
// console.log(favMovies);

// // After running the above tasks, console.log the index of "Fast and Furious." - DONE
// console.log(favMovies.indexOf('Fast and Furious'));

// // We removed it from the array. What value do we get when we look for the index of something that is not in the array? - DONE
// // ANSWER: undefined

// // Thought Question: We declared the variable favMovies with const, and yet we were allowed to change the array. Weird? 
// // Should we have used let? - DONE
// // ANSWER: no, by using methods we never actually changed the original array, just made internal edits


//TODO =============================================  Exercise 7 (Where is Waldo) - COMPLETED
// Remove Eggbert (hint look at the slice/splice methods).
const whereIsWaldo = [
    ["Timmy", "Frank"],
     "Eggbert",
     ["Lucinda", "Jacc", "Neff", "Snoop"], 
     ["Petunia", ["Baked Goods", "Waldo"]]];

     delete whereIsWaldo[1];
     
     console.table(whereIsWaldo);
// Change "Neff" to "No One".
whereIsWaldo.splice(1,2, "No One");

console.table(whereIsWaldo);

// Access and console.log "Waldo".
console.log(whereIsWaldo);



//TODO =============================================  Exercise 8 (Excited Kitten) - COMPLETED
//^ Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// let hiss = ('Love me, pet me! HSSSSSSS!'); {
//     for (let m = 1; m <= 20; m++) {
//         console.log(hiss);
//     }
// }
// const kittySpeaks=[
//     '...human... why you taking pictures of me?...',       
//     '... the catnip madse me do it...', 
//     '...why does the red dot always get away...']; {

//         const randomIndex = Math.floor(Math.random() * kittySpeaks.length);
//         console.log(kittySpeaks[randomIndex]);

//     }console.log("Love me, pet me! HSSSSSS!");

//     // the below was a mistake
// // for (let q = 1; q <= 20; q++) {
// //     if(q % 2 === 0) {
        
// //     }
// // }


//TODO =============================================  Exercise 9 (Find the Median) - COMPLETED
//^ Find the median number in the following numsarray, then console.log that number.
//^ hint if you check the length of the array / 2, you might get not get a whole number. 
//^ In which case, look into Math.floor( // something )

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// let sum = 0;

// for (let r = 0; r < nums.length -1; r++) {
//     sum = sum+nums[r]-1;
// } 
// let median = sum / nums.length;
// median = Math.round(median); // this rounds down the median varaible and redeclares it

// console.log(`The sum of the array is ${sum}`);
// console.log(`The median of the array is ${median}`);
