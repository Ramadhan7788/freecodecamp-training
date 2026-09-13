const lunches = [];

lunches.push("Nasi padang", "Nasi goreng", "Coto");

console.log(`${lunches}\n`);

function addLunchToEnd (arr, text) {
  arr.push(text);
  console.log(`${text} added to the end of the lunch menu.`);
  return arr;
}

addLunchToEnd(lunches, "Tacos");
console.log(lunches);
console.log("\n");

// console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
// console.log("\n");

function addLunchToStart(arr, text) {
  arr.unshift(text);
  console.log(`${text} added to the start of the lunch menu.`);
  return arr;
}

addLunchToStart(lunches, "Sushi");
console.log(lunches);
console.log("\n");

// console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));
// console.log("\n");

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const lastItem = arr.at(-1);
    arr.pop();
    console.log(`${lastItem} removed from the end of the lunch menu.`)
  }
  return arr;
}

removeLastLunch(lunches);
console.log(lunches);
console.log("\n");

// console.log(removeLastLunch([]));
// console.log("\n");

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const firstItem = arr.at(0);
    arr.shift();
    console.log(`${firstItem} removed from the start of the lunch menu.`);
  }
  return arr;
}

removeFirstLunch(lunches);
console.log(lunches);
console.log("\n");

// console.log(removeFirstLunch([]));
// console.log("\n");


function getRandomLunch (arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`)
  }
}

getRandomLunch(lunches);
console.log(lunches);
console.log("\n");


function showLunchMenu (arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`)
  }
}

showLunchMenu(lunches);
console.log(lunches);
console.log("\n");
