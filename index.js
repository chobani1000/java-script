const textvalue ="hello world";
console.log(textvalue.toUpperCase());
// var total = 0
// console.log('total:', total);
// total = 10;
// console.log('New total:', total);
// const myArray = [100,57,2,9,120]
// console.log('myArray:', myArray[3]);
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log("length:", length);
let str = "Apple, banana, Kiwi,die,death,sadness,emotional damage,upset,sad,depression,emo";
let part = str.slice(6, 30);
console.log("part",part);
 str = "funny, banana, kiwi";
 part = str.slice(4, 9);
 console.log("part",part);
 let text = " Microsoft! microsoft better than sony hahah get nae nae'd you suck sony microsoft";
 let newText = text.replace("Microsoft", "do we exist just to wonder why we exist i mean what really is the meaning of life their really cant be a exact definition since everone lives their lives differetly their cant be an exact definition since nobody would ever agree on it even if their actually was a meaning of life who would be able to figure it out I mean who would want to after all if the meaning of life is to find the meaning of life then once we find the meaning of life then our lives would have no meaning");
 console.log("newtext:", newText);
 let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3)
 text1 = "      Hello World!      ";
 text2 = text1.trim();
console.log("text2", text2);