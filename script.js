//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
const userData =
localStorage.setItem("first name","rajat");
localStorage.setItem("last name","roy");
localStorage.setItem("age",23);
localStorage.setItem("country","india");
localStorage.setItem("state","delhi");

console.log(localStorage);

localStorage.getItem(userData);
console.log(localStorage);

localStorage.removeItem("state");
console.log(localStorage);

localStorage.clear()
console.log(localStorage);

const userS  = JSON.stringify(user);
console.log(userS);








