// Hacker Rank Drawing Book Problem -

// if book is n pages long, and she wants to turn to page p, what is the minimum number of pages she will turn? Can start at begining or the end of book. Given n and p, find and print the min number of pages she must turn in order to arrive at page p.

// n - number of pages
// p - number of pages

pageFinder = (n, p) => {
  // let's make an array = to that of the book.
  let turns = Math.floor(p / 2);
  console.log(turns);

  let total = Math.floor(n / 2);
  console.log(total);
  return Math.min(turns, total - turns);
};

console.log(pageFinder(6, 2));
// console.log(pageFinder(5, 4));

// expected output: 1
