// // 1-SAVOL JAVOBI
// function allArray(arg1, arg2) {
//   let res = [];
//   arg1.map(function (value) {
//     if (arg2.includes(value)) {
//       res.push(value);
//     }
//   });
//   return res;
// }
// let arr1 = [1, "talim", true, 2, "DOM"];
// let arr2 = [1, true, "talim", 3];
// console.log(allArray(arr1, arr2));
// // 2-SAVOL JAVOBI
// function multiplyArray(arg, koef) {
//   return arg.map(function (value) {
//     if (typeof value === "number") {
//       return value * koef;
//     }
//     return value;
//   });
// }
// let arr = [1, "fitnes", true, 5];
// console.log(multiplyArray(arr, 3));
// // 3-SAVOL JAVOBI
// function chekPositiveArray(arg) {
//   let res = [];
//   res = arg.filter(function (value) {
//     return typeof value == "number";
//   });
//   if (res.length <= 0) {
//     return "Berilgan massivda son mavjud emas";
//   }
//   let sum = 0;
//   let pos = res.map(function (value) {
//     if (value > 0) {
//       sum += value;
//     }
//   });
//   return sum;
// }
// let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// console.log(chekPositiveArray(arr));
// // 4-SAVOL JAVOBI
// function end0Array(arg) {
//   let res = arg
//     .map(function (value) {
//       return value !== 0 ? value : null;
//     })
//     .filter(function (value) {
//       return value !== null;
//     });
//   arg.forEach(function (value) {
//     if (value == 0) {
//       res.push(0);
//     }
//   });
//   return res;
// }
// let arr = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0];
// console.log(end0Array(arr));
// // 5-SAVOL JAVOBI
// function checkArray(arg) {
//   let res = {};
//   let max = 0;
//   let maxEl;
//   arg.forEach(function (value) {
//     res[value] = (res[value] || 0) + 1;
//     if (res[value] > max) {
//       max = res[value];
//       maxEl = value;
//     }
//   });
//   return [maxEl, max];
// }
// let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5];
// console.log(checkArray(arr));
// // 6-SAVOL JAVOBI
// BU masalani savoliga va tushunmadim
// // 7-SAVOL JAVOBI
// function mergeAndRemoveArray(arg1, arg2) {
//   let merge = arg1.concat(arg2);
//   let res = merge.filter(function (value, index) {
//     return merge.indexOf(value) == index;
//   });
//   return res;
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];
// console.log(mergeAndRemoveArray(arr1, arr2));
// // 8-SAVOL JAVOBI
// function checkArray(arg) {
//   let toq = [];
//   let juft = [];
//   arg.forEach(function (value) {
//     if (value % 2 == 0) {
//       juft.push(value);
//     } else {
//       toq.push(value);
//     }
//   });
//   return [toq, juft];
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(checkArray(arr));
// // 9-SAVOL JAVOBI
// function checkArray(arg, inc) {
//   return arg.includes(inc);
// }
// let arr = [12, 3, 4, 5, 5, 63];
// console.log(checkArray(arr, 63));
// // 10-SAVOL JAVOBI
// function check(arg) {
//   let max = arg[0];
//   let min = arg[0];
//   arg.map(function (value) {
//     if (arg[value] < min) {
//       min = arg[value];
//     }
//     if (arg[value] > min) {
//       max = arg[value];
//     }
//   });
//   return [min, max];
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(check(arr));

// // // ### Obyektlar bilan ishlash
// // 11-SAVOL JAVOBI
// let obj = {
//   age: 23,
//   name: "John",
//   state: "America",
// };
// function sortObj(obj) {
//   let resObj = Object.keys(obj).sort();
//   let result = {};
//   for (const key of resObj) {
//     result[key] = obj[key];
//   }
//   return result;
// }
// console.log(sortObj(obj));
// // 12-SAVOL JAVOBI
// function objToArray(obj) {
//   let keys = [];
//   let values = [];

//   for (const key in obj) {
//     keys.push(key);
//     values.push(obj[key]);
//   }
//   return [keys, values];
// }
// let obj = {
//   age: 23,
//   name: "John",
//   state: "America",
// };
// console.log(objToArray(obj));
// // 13-SAVOL JAVOBI
// function obj(obj1, obj2) {
//   let res = { ...obj1 };

//   for (let key in obj2) {
//     res[key] = obj2[key];
//   }

//   return res;
// }
// let obj1 = {
//   name: "John",
//   state: "America",
//   age: 33,
// };
// let obj2 = {
//   state: "America",
//   age: 44,
//   study: "University",
// };
// console.log(obj(obj1, obj2));
// // 15-SAVOL JAVOBI
// function objRename(obj) {
//   obj.surname = obj.name;
//   delete obj.name;
//   return obj;
// }
// let obj = {
//   name: "John",
//   age: 33,
// };
// console.log(objRename(obj));
// // 16-SAVOL JAVOBI
// function keyObj(obj, key) {
//   let res = { ...obj };
//   delete res[key];
//   return res;
// }
// let obj = {
//   name: "John",
//   age: 33,
//   city: "Fergana",
// };
// console.log(keyObj(obj, "city"));
// // 17-SAVOL JAVOBI
// Bu masalaga ancha vaqtim ketip qoldi lkin baribir tushunmadim savoliga;
// // 18-SAVOL JAVOBI
// function objArray(obj) {
//   let res = [];
//   for (let key in obj) {
//     if (Array.isArray(obj[key])) {
//       res = res.concat(obj[key]);
//     }
//   }
//   return res;
// }
// let obj = {
//   name: "Xoshim",
//   age: 33,
//   phoneNumber: ["🇺🇿| +998-90-234-23-54", "🇺🇿| +998-99-242-24-63"],
// };
// console.log(objArray(obj));
// // 19-SAVOL JAVOBI
// // 20-SAVOL JAVOBI
// // // ### String bilan ishlash
// // 21-SAVOL JAVOBI
// Savolga tushundim ammo ishlay olmadim
// // 22-SAVOL JAVOBI
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverseString("Sorry"));
// // 23-SAVOL JAVOBI
// function longWordString(str) {
//   let sub = str.split(" ");
//   let res = "";
//   sub.map(function (value) {
//     if (value.length > res.length) {
//       res = value;
//     }
//   });
//   return res;
// }
// console.log(longWordString("Mening JS dagi kodlarim"));
// // 24-SAVOL JAVOBI
// function str(str, let) {
//   return str
//     .split("")
//     .map(function (value) {
//       return value == let ? value + let : value;
//     })
//     .join("");
// }
// console.log(str("Mening JS dagi kodlarim", "a"));
// // 25-SAVOL JAVOBI
// function numString(str) {
//   return str
//     .split("")
//     .filter(function (value) {
//       return value < "0" || value > "9";
//     })
//     .join("");
// }
// console.log(numString("5-oy 6-dars"));
