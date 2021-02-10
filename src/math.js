const cache = new Map();

export const pow = (base, exp) => {
  const key = `${base}-${exp}`;

  if (!cache.has(key)) {
    cache.set(key, base ** exp);
  }

  return cache.get(key);
};

export const sum = (...args) => args.reduce((t, i) => t + i, 0);

export const mul = (a, b) => a * b;

const SUPER_MATH_CONSTANT = 23;

export default SUPER_MATH_CONSTANT;
