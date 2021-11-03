// const wordSearch = (letters, word) => {
//   const horizontalJoin = letters.map((ls) => ls.join(""));
//   for (l of horizontalJoin) {
//     if (l.includes(word)) return true;
//   }
//   return false;

//   const transpose = function (letters) {
//     // Put your solution here
//     const len = letters.length;
//     let correct = [];
//     let newArray = [];

//     for (let i = 0; i < letters.length; i++) {
//       for (let j = 0; j < letters[i].length; j++) {
//         if (!Array.isArray(newArray[j])) {
//           newArray[j] = [];
//         }
//         newArray[j][i] = letters[i][j];
//       }
//     }
//     return newArray;
//   };

//   //   const verticalJoin = transpose(letters).map((ls) => ls.join(""));
//   //   for (l of verticalJoin) {
//   //     if (l.includes(word)) return true;
//   //   }
//   //   return false;

//   //   function both(bothwords) {
//   //     if (
//   //       verticalJoin(bothwords) === true &&
//   //       horizontalJoin(bothwords) === true
//   //     ) {
//   //       return true;
//   //     }
//   //     return false;
//   //   }
// };

// const array = [
//   ["A", "W", "C", "F", "Q", "U", "A", "L"],
//   ["S", "E", "I", "N", "F", "E", "L", "D"],
//   ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//   ["H", "M", "J", "T", "E", "V", "R", "G"],
//   ["W", "H", "C", "S", "Y", "E", "R", "L"],
//   ["B", "F", "R", "E", "N", "E", "Y", "B"],
//   ["U", "B", "T", "W", "A", "P", "A", "I"],
//   ["O", "D", "C", "A", "K", "U", "A", "S"],
//   ["E", "Z", "K", "F", "Q", "U", "A", "L"],
// ];

// const name1 = "FRANK";
// const name2 = "SEINFELD";

// console.log(wordSearch(array, name2));

// module.exports = wordSearch;

const wordSearch = (letters, word) => {
  // array transpose
  const transpose = function (letters) {
    const len = letters.length;
    let correct = [];
    let newArray = [];

    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        if (!Array.isArray(newArray[j])) {
          newArray[j] = [];
        }
        newArray[j][i] = letters[i][j];
      }
    }
    return newArray;
  };
  // end of array transpose

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));

  for (l of horizontalJoin) {
    for (lv of verticalJoin) {
      if (l.includes(word) || lv.includes(word)) return true;
    }
  }
  return false;

  // console.log(horizontalJoin);
  // console.log(verticalJoin);
};

const array = [
  ["A", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "E", "I", "N", "F", "E", "L", "D"],
  ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  ["H", "M", "J", "T", "E", "V", "R", "G"],
  ["W", "H", "C", "S", "Y", "E", "R", "L"],
  ["B", "F", "R", "E", "N", "E", "Y", "B"],
  ["U", "B", "T", "W", "A", "P", "A", "I"],
  ["O", "D", "C", "A", "K", "U", "A", "S"],
  ["E", "Z", "K", "F", "Q", "U", "A", "L"],
];

console.log(wordSearch(array, "FNFT"));

module.exports = wordSearch;
