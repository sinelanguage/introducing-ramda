import curry from 'curry';

const sum = (a,b) => a + b;
const add = curry(sum);
const add2 = add(2);
const add100 = add2(100);

export const logAdd2 = () => console.log(`add2: ${add2}`);
export const logAdd100 = () => console.log(`add100: ${add100}`);
