function combinations(str) {
    let index = str.indexOf("?");
    if(index == -1) return result.push(str); // Base Case
    
    let strAsArray = str.split("") // [1, ?, 1, ?]
    let addOneToMe = strAsArray.slice() // [1, ?, 1, ?] new instance
    let addZeroToMe = strAsArray.slice() // [1, ?, 1, ?] new instance

    addOneToMe.splice(index, 1, "1") // [1, 1, 1, ?]
    addZeroToMe.splice(index, 1, "0") // [1, 0, 1, ?]

    combinations(addOneToMe.join(""))
    combinations(addZeroToMe.join(""))
}

combinations("1?1?")
//console.log(result)


// option 2:

let result = [];
const LOOK_UP = "&";
const anyNamedThingCalledData = "1?0?"
function combinations(str) {
  const index = str.indexOf("?");
  if (index == -1) return result.push(str); // Base Case
  let strAsArray = str.split(""); // [1, ?, 1, ?]
  let addOneToMe = strAsArray.slice(); // [1, ?, 1, ?] new instance
  let addZeroToMe = strAsArray.slice(); // [1, ?, 1, ?] new instance

  addOneToMe.splice(index, 1, "1"); // [1, 1, 1, ?]
  addZeroToMe.splice(index, 1, "0"); // [1, 0, 1, ?]

  combinations(addOneToMe.join(""));
  combinations(addZeroToMe.join(""));
}
combinations("1?0?");
console.log(result);

const rescursive = () => {};

const stack = anyNamedThingCalledData.split(); // [1, 0, 1, ?]

const somethingElse = (str) => {

  stack.push();
  stack.pop();


  // const result = [];
  // const index = str.indexOf("?");
  // const strAsArray = str.split(""); // [1, ?, 1, ?]
  // console.log(str);


  // if (str) {
  //   somethingElse();
  // }
  // strAsArray.forEach((character) => {
  //   const shallowCopy = strAsArray;

  //   [1, 0].map((char) => {
  //     shallowCopy.splice(index, 1, char); //
  //   })
  // });

  // return result;
};

console.log(somethingElse("test"));
