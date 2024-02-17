function isPrime(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
