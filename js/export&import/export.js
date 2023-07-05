const add = (...args) => {
  let res = 0;
  for (let i = 0; i < args.length; i++) res += args[i];
  return res;
};
const test = () => 1;
export { add, test };
export default ()=>`export default`;
