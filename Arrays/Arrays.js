
//example One

const  hobbies  = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(hobbies)


/////////////////////////////////////////////////////////////////////////////////


//example Two Accessing Array Elements


const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[2];
console.log(famousSayings[2])
console.log(famousSayings[3])


/////////////////////////////////////////////////////////////////////////////////



//example Two Updating the Array Elements


let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList); 

//////////////////////////////

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

//////////////////////////////
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

utensils[3] = 'Spoon';
console.log(utensils);


/////////////////////////////////////////////////////////////////////////////////


//example Three  .length property (tell us the number of items in the array. )

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

/////////////////////////////////////////////////////////////////////////////////



//example Three  .length property (tell us the number of items in the array. )

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('wash dishes', 'take out trash');

console.log(chores); 


/////////////////////////////////////////////////////////////////////////////////


//example Four  The .pop() Method (method removes (pops) the last element of an array.)

const choreslist = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

const removed = choreslist.pop();

console.log(choreslist); 

console.log(removed);


/////////////////////////////////////////////////////////////////////////////////
