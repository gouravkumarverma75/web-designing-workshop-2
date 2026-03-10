// 1.Simple pyramid
// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }


// 2.Flipped inverted pyramid
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     for (let k = 1; k <= i; k++) {
//         row += "*";
//     }

//     console.log(row);
// }




// 3.Inverted pyramid
// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }



// 4.Flipped inverted pyramid
// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";

//     for (let j = 0; j < n - i; j++) {
//         row += " ";
//     }

//     for (let k = 1; k <= i; k++) {
//         row += "*";
//     }

//     console.log(row);
// }


// 5.Triangle
// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }

//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }



// 6.Inverted triangle
// let n = 4;

// for (let i = n; i >= 1; i--) {
//   let row = "";

//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }

//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }


// 7.Half diamond pattern
// let n = 4;

// // upper part
// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }

// // lower part
// for (let i = n - 1; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }



// 8.Flipped half diamond pattern
// let n = 5;

// // Upper part
// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// // Lower part
// for (let i = n - 1; i >= 1; i--) {
//     let row = "";

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }


// 9.Diamond pattern
// let n = 4;

// // upper part
// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     for (let k = 1; k <= i; k++) {
//         row += "* ";
//     }

//     console.log(row);
// }

// // lower part
// for (let i = n - 1; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     for (let k = 1; k <= i; k++) {
//         row += "* ";
//     }

//     console.log(row);
// }


// 10.Hourglass pattern
// let n = 5;

// // upper part
// for (let i = n; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// // lower part
// for (let i = 2; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }

//     console.log(row);
// }


// 11.Number pyramid
// let n = 4;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += i + " ";
//     }

//     console.log(row);
// }



// 12.rotated number pyramid
// let n = 4;
// let num = 1;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//         row += "  ";
//     }

//     // numbers
//     for (let j = 1; j <= i; j++) {
//         row += num + " ";
//         num++;
//     }

//     console.log(row);
// }


// 13. pallidrome triangle
// let n = 4;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // increasing numbers
//     for (let j = 0; j < i; j++) {
//         row += (i + j) + " ";
//     }

//     // decreasing numbers
//     for (let j = i - 2; j >= 0; j--) {
//         row += (i + j) + " ";
//     }

//     console.log(row);
// }


// 14.alphabet pyramid
// let n = 5;
// let ch = 65; // ASCII value of 'A'

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += String.fromCharCode(ch) + " ";
//     }

//     console.log(row);

//     ch++; // move to next alphabet
// }



// 15.continous alphabet pyramid
// let n = 4;
// let ch = 65; // ASCII value of 'A'

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         row += String.fromCharCode(ch) + " ";
//         ch++;
//     }

//     console.log(row);
// }
