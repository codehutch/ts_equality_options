import { testFastDeepEquals } from "./example/fastDeepEqualsDemo";
import equal from 'fast-deep-equal';
import { Point } from "./example/point"; 

console.log("v6");
testFastDeepEquals();

let p = new Point(123, 456);
let q = new Point(123, 456);

console.log("point");
console.log(+p);
console.log(p == q);
console.log(+p == +q);
console.log(+p === +q);

const startA = performance.now();

for (let i = 0; i < 1000000; i++)
{
    if (+p !== +q)
        console.log("won't happen");
}

const endA = performance.now();
console.log(`valueOf time: ${endA - startA} ms`);

// https://262.ecma-international.org/6.0/#sec-abstract-equality-comparison

const startB = performance.now();

for (let i = 0; i < 1000000; i++)
{
    if (!equal(p, q))
        console.log("won't happen");
}

const endB = performance.now();
console.log(`fast deep equal time: ${endB - startB} ms`);

const startC = performance.now();

for (let i = 0; i < 1000000; i++)
{
    if (JSON.stringify(p) !== JSON.stringify(q))
        console.log("won't happen");
}

const endC = performance.now();
console.log(`json equal time: ${endC - startC} ms`);
