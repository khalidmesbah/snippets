/* 
export let arr = [1, 2, 3];
export let n = 20;
export const f = () => {
    console.log(`hi fff`);
};
*/

let arr = [1, 2, 3];
let n = 20;
const f = () => {
    console.log(`hi fff`);
};

export { arr, n as number, f };

const name = `khaled`;
export default name;