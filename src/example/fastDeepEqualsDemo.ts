import equal from 'fast-deep-equal';
 
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 1, b: 2 }


export function testFastDeepEquals() {

    console.log("fast-deep-equal: " + equal(obj1, obj2)); 

}
