
// import {
//     add,
//     multi,
//     minus
// } from "./main"


// function expect(actualValue) {
//     return {
//         toBe: (expectation) => {
//             if (expectation !== actualValue) {
//                 throw new Error(`期望值是${expectation},实际值是${actualValue}`)

//             }
//         }
//     }
// }

// function test(desc, fn) {
//     try {
//         fn()
//         console.log(`${desc}通过测试`);

//     } catch (e) {
//         console.log(`${desc}不通过测试，${e}`);
//     }
// }

test('测试3+7', () => {
    expect(10).toBe(10)
})
test('测试101', () => {
    expect(11).toBe(11)
})
