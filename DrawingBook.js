// Hacker Rank Drawing Book Problem -

// if book is n pages long, and she wants to turn to page p, what is the minimum number of pages she will turn? Can start at begining or the end of book. Given n and p, find and print the min number of pages she must turn in order to arrive at page p.

// n - number of pages
// p - number of pages

pageFinder = (n, p) => {
  let lowest = 0;
  let frontCount = 0;
  let backCount = 0;
  for (let i = 1; i < n; i++) {
    if (i == p) {
      return frontCount;
    } else {
      frontCount++;
    }
  }

  for (let i = n; i > 0; i--) {
    if (i == p) {
      return backCount;
    } else {
      backCount++;
    }
  }
  if (frontCount < backCount) {
    lowest = frontCount;
  } else {
    lowest = backCount;
  }
  return lowest;
};

// console.log(pageFinder(6, 2));
console.log(pageFinder(5, 4));

// expected output: 1
