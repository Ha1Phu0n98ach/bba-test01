function findPairsDivisibleBy17() {
  let count = 0;
  const pairs = [];

  for (let i = 1; i <= 100; i++) {
    for (let j = i; j <= 100; j++) {
      if ((i + j) % 17 === 0) {
        count++;
        pairs.push(`(${i}, ${j})`);
      }
    }
  }

  console.log(`Có tất cả ${count} cặp số thỏa mãn.`);

  console.log("Danh sách tất cả các cặp:");
  console.log(pairs.join(", "));
}

findPairsDivisibleBy17();
