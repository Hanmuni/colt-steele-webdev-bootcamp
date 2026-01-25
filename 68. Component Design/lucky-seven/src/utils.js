const d6 = () => Math.floor(Math.random() * 6) + 1;

const getRolls = (n) => Array.from({ length: n }, () => d6());

const sum = (nums) => nums.reduce((prev, cur) => prev + cur, 0);

export { d6, getRolls, sum };
