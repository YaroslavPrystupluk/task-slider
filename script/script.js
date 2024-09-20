function crsar(str, shift) {
  let result = "";
  for (const char of str) {
    let index = char.charCodeAt(0) + shift;
    result += String.fromCharCode(index);
  }
  // console.log(result);
  return result;
}

const password = crsar("Hello word", 3);

function crsarUndecoding(str, shift) {
  let result = "";
  for (const char of str) {
    let index = char.charCodeAt(0) - shift;
    result += String.fromCharCode(index);
  }
  // console.log(result);
  return result;
}
crsarUndecoding(password, 3);

function pol(str) {
  str = str.replace(/\s/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}
// console.log(pol("Never odd or even"));

const isAnagram = (str1, str2) => {
  if (!str1 || !str2 || str1.length !== str2.length) return false;
  return (
    [...str1.toLowerCase()].toSorted().join("") ===
    [...str2.toLowerCase()].toSorted().join("")
  );
};

// console.log(isAnagram("abcd"));
// console.log(isAnagram("lito", "tilo"));

const arr = [5, 8, 5, 2, 9, 8, 7, 3];

function findPairsWithSum(arr, targetSum) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
// console.log(findPairsWithSum(arr, 10));

let res = [];

document.addEventListener("keydown", (e) => {
  if (!isNaN(+e.key)) {
    res.push(+e.key);
    res = [...new Set(res)];
    res.sort();
    console.log(res);
  } else {
    if (res.length < 2) {
      res = [];
      return false;
    } else {
      console.log(res[1]);
      res = [];
      return;
    }
  }
});

const arr1 = [1, 6, 2, 6, 3, 4, 5, 5, 6];

function removeDuplicates(arr) {
  let res = [];
  arr = [...new Set(arr)];
  arr.sort((a, b) => a - b);
  res.push(arr);
  console.log(res);
}
removeDuplicates(arr1);

// setInterval(() => {
//   console.log("hello");
// }, 5000);
// setTimeout(() => {
//   console.log("hello");
// }, 5000);
