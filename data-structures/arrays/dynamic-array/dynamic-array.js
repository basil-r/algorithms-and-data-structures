const chars = ["a", "b", "c", "d", "e"];

// access - lookup O(1)
const c = chars[2];

// search O(n)
const dIndex = chars.indexOf("d"); 

// insertion O(n)
chars.splice(2, 0, "x");

// deletion O(n)
chars.splice(4, 1);
