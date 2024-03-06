function minBeerTypes(n, b, preferences) {
  const likedBeers = Array.from({ length: b }, () => 0);

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < b; j++) {
          if (preferences[i * b + j] == 'Y') {
              likedBeers[j]++;
              break;
          }
      }
  }

  return likedBeers.filter(count => count > 0).length;
}

console.log(minBeerTypes(2, 2, ['Y', 'N', 'N', 'Y'])); 
console.log(minBeerTypes(6, 3, ['Y', 'N', 'N', 'Y', 'N', 'Y', 'Y', 'N', 'Y', 'N', 'Y', 'Y', 'N', 'Y'])); 
