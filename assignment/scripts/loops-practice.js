console.log('****** Loops Practice *******');


// 1. 'for' loop
// Example: a for loop to console.log numbers from 0 to 3
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
for (i = 0; i < 6; i++){
  console.log(i);
}
// change the number 4 to 6 to fit the problem 

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
for (i = 3; i <= 5; i++) {
  console.log(i);
}



// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
for (i = 2; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
for (i = 0; i <= 5; i--) {
  console.log(i);
}

// 2. For of loops  
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
 for (let bang of stars) {
  console.log(bang);
}
// 3. While loops  

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array

let task;
let i = 0;
while ( i < (stars.length)) {
    task = (stars[i]);
    console.log(task);
    i++;
}
// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5



let taskss;
let w = 0;
while ( w <= 5 ) {
    taskss = w;
    console.log(taskss);
    w++;
}


// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5

let tasks;
let z = 10;
while ( z >= 5 ) {
    tasks = z;
    console.log(tasks);
    z--;
}

    