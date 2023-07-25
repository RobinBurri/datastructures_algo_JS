/**
 * In JavaScript, all standard built-in object-copy operations 
 * (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) 
 * create shallow copies rather than deep copies.
 */


/**
 * One way to make a deep copy of a JavaScript object, if it can be serialized,
 * is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse()
 * to convert the string back into a (completely new) JavaScript object:
 */

let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_deepcopy.
ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]

/**
 * For objects that are serializable, you can alternatively use the structuredClone() method to create deep copies. structuredClone() has the advantage of allowing transferable objects in the source to be transferred to the new copy, rather than just cloned. But note that structuredClone() isn't a feature of the JavaScript language itself — instead it's a feature of browsers and any other JavaScript runtimes that implement a global object like window. And calling structuredClone() to clone a non-serializable object will fail in the same way that calling JSON.stringify() to serialize it will fail.
 */

// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved
