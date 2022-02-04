const fact = (n) => (n > 1 ? n * fact(n - 1) : n);

console.log(fact(0));
