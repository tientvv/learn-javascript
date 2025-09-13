const friends = ['Jonas', 'Steven', 'Peter'];

// Add Element
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const poped = friends.pop();
console.log(friends);
console.log(poped);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Jonas'));

friends.push(23);
console.log(friends.includes(23));
