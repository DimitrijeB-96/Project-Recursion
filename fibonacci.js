// Iteration
function fibs(n) {
  let previous = 0;
  let next = 1;

  let sum = 0;
  let res = [];

  for (let i = previous; i < n; i++) {
    sum = previous;
    previous = next;
    next = previous + sum;

    res.push(sum);
  }

  return res;
}

// Recursive
function fibsRec(n) {
  if (n === 2) {
    return [0, 1];
  } else {
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
  }
}