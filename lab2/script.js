function minSquareSize(n, w, h) {
  const maxSide = Math.max(w, h);

  let left = 1; 
  let right = Math.pow(10, 18); 

  while (left < right) {
    const mid = Math.floor((left + right) / 2); 

    if (Math.floor(mid / w) * Math.floor(mid / h) >= n) {
      right = mid; 
    } else {
      left = mid + 1; 
    }
  }
  return left; 
}

console.log(minSquareSize(10, 2, 3));
console.log(minSquareSize(2, 1000000000, 999999999)); 
console.log(minSquareSize(4, 1, 1)); 
